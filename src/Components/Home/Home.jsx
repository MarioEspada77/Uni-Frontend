import React, { Component } from "react";
import postServices from "../../Services/postService";
import { withAuth } from "../../Context/AuthContext";
import Posts from "../Posts/Post";

class Home extends Component {
  state = {
    posts: [],
    userPosts: [],
    loading: true,
    error: undefined,
  };
  async componentDidMount() {
    try {
      const { user } = this.props;
      console.log("USER FRONT", user);
      const posts = await postServices.listAllPost();
      this.setState({ posts, loading: false });
      console.log("posts", posts);
    } catch (error) {
      this.setState({
        loading: false,
        error: "En estos momentos no ha sido posible cargar las publicaciones.",
      });
    }
  }
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
            <button className='btn btn-primary' onClick={handleLogout}>
              Cerrar sesión
            </button>
          </div>
          <div className='col-4 col-sm-12 col-md-12 col-lg-4 col-xl-4'>
            <p style={{ padding: "10px" }}>Paragraph</p>
          </div>
          <button className='fixed-bottom-addPost'>
            <span>+</span>
          </button>
        </div>
      </div>
    );
  }
}

export default withAuth(Home);
