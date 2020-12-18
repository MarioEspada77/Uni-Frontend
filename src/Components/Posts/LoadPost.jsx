import React, { Component } from "react";
import postServices from "../../Services/postService";
import { withAuth } from "../../Context/AuthContext";
import imageprofile from "../../images/perfil.jpg";
import Report from "../Modal/Report";
class LoadPost extends Component {
  state = {
    likes: "",
    liked: "",
    report: false,
  };
  componentDidMount() {
    const { post } = this.props;
    console.log("p", post);
    this.setState({ likes: [...post.likes] });
    this.checkIfUserDidLike();
  }
  checkIfUserDidLike = () => {
    const { user } = this.props;
    const liked = this.props.post.likes.includes(user._id);
    this.setState({
      liked: liked ? true : false,
    });
  };
  handleLike = async () => {
    const { post, user } = this.props;
    const { liked } = this.state;
    const makeCall = liked
      ? postServices.createUnlike(post._id, user.username)
      : postServices.createLike(post._id, user.username);
    try {
      const makeLike = await makeCall;
      this.setState({
        likes: [...makeLike.likes],
        liked: !liked,
      });
    } catch (error) {
      console.log("Error like o unlike");
    }
  };
  handleReport = () => {
    const { report } = this.state;
    this.setState({ report: !report });
  };
  render() {
    const { post, user } = this.props;
    const { likes, liked, report } = this.state;
    return (
      <div className='feed' style={{ marginBottom: "20px" }}>
        <div className='card-feed post-margin'>
          <div className='justify-content-xl-start align-items-xl-start card-username'>
            <img
              class='rounded-circle'
              src={imageprofile}
              style={{ width: "40", height: "40" }}
              alt='user profile image'
            />
            <p className='user-name'>
              {post.username.username}
              <span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Verificado">
                <i
                  class='fa fa-check-circle icon-verified'
                  style={{ height: "10px" }}
                ></i>
              </span>
            </p>
            <p className='card-publication'>Hace 1 hora atrás</p>
            <div className='dropdown'>
              <i
                className='fas fa-ellipsis-h'
                id='dropdownMenuButton'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              ></i>
              <div
                className='dropdown-menu'
                aria-labelledby='dropdownMenuButton'
              >
                <a
                  className='dropdown-item'
                  data-toggle='modal'
                  data-target='#exampleModal'
                  data-whatever='@mdo'
                  onClick={this.handleReport}
                >
                  Reportar
                </a>
                <a className='dropdown-item' href='#'>
                  Another action
                </a>
                <a className='dropdown-item' href='#'>
                  Something else here
                </a>
                {post.username._id === user._id && (
                  <>
                    <a className='dropdown-item' href='#'>
                      Eliminar
                    </a>
                    <a className='dropdown-item' href='#'>
                      Fijar en tu perfil
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
          <div>
            <p
              className='text-justify'
              style={{
                marginLeft: "5px",
                marginRight: "5px",
                marginTop: "30px",
              }}
            >
              {post.text}
            </p>
            <div className='card-reactions'>
              <i className='fa fa-heart-o'></i>
              <span className='likes-count'>{likes.length}</span>
              <i className='icon-share-alt share-icon'></i>
              <span className='likes-count'>12</span>
              <i className='icon-bubble'></i>
              <span className='likes-count'>84</span>
            </div>
            <div className='post-reactions'>
              <div className='item-reaction-post' onClick={this.handleLike}>
                <span className='like-button item-reaction-post'>
                  {liked ? (
                    <i class='fas fa-heart like-active'></i>
                  ) : (
                    <i
                      class='fa fa-heart-o like-deactivated'
                      aria-hidden='true'
                    ></i>
                  )}

                  <span style={{ marginLeft: "4px" }}>Me gusta</span>
                </span>
              </div>
              <div className='item-reaction-post'>
                <span className='like-button'>
                  <i className='icon-bubble comment-bubble'></i>
                  <span style={{ marginLeft: "4px" }}>Comentar</span>
                </span>
              </div>
              <div className='item-reaction-post'>
                <span className='like-button'>
                  <i className='icon-share-alt like-active'></i>
                  <span style={{ marginLeft: "4px" }}>Compartir</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        {report && <Report />}
      </div>
    );
  }
}

export default withAuth(LoadPost);
