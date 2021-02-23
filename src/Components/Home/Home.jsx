import React, { Component } from "react";
import postServices from "../../Services/postService";
import { withAuth } from "../../Context/AuthContext";
import Posts from "../Posts/Post";
import AddPost from "../Modal/AddPost";

class Home extends Component {
  state = {
    posts: [],
    userPosts: [],
    loading: true,
    error: undefined,
    publication: false,
  };
  async componentDidMount() {
    try {
      const { user } = this.props;
      const posts = await postServices.listAllPost();
      this.setState({ posts, loading: false });
    } catch (error) {
      this.setState({
        loading: false,
        error: "En estos momentos no ha sido posible cargar las publicaciones.",
      });
    }
  }
  handleAddPost = () => {
    const { publication } = this.state;
    this.setState({ publication: !publication });
    console.log(publication);
  };

  handleNewPublications = publications => {
    const { publication } = this.state;
    console.log(this.state.publication)
    this.setState({
      publication: false,
      posts: publications,
    });
    console.log("Después de la actualización del estado: ",this.state.publication)
  };
  render() {
    const { posts, error, loading } = this.state;
    const { handleLogout } = this.props;
    return (
      <div className='container-fluid container-margins'>
        <div className='row' style={{ marginTop: "40px" }}>
          <div className='col-8 col-sm-12 col-md-12 col-lg-8 col-xl-8'>
            {loading && (
              <div class='d-flex justify-content-center'>
                <div class='spinner-border' role='status'>
                  <span class='sr-only'>Loading...</span>
                </div>
              </div>
            )}
            {!error ? (
              !loading && <Posts posts={posts}></Posts>
            ) : (
              <div>
                <p>Error al cargar las publicaciones.</p>
              </div>
            )}
          </div>
          <div className='col-4 col-sm-12 col-md-12 col-lg-4 col-xl-4'>
            <p style={{ padding: "10px" }}>Paragraph</p>
          </div>
          <button
            className='fixed-bottom-addPost'
            onClick={this.handleAddPost}
            data-toggle='modal'
            data-target='.bd-example-modal-lg'
          >
            <span>+</span>
          </button>
        </div>
        {this.state.publication ? (
          <AddPost handleNewPublications={this.handleNewPublications} />
        ) : null}
      </div>
    );
  }
}

export default withAuth(Home);
