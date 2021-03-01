import React, { Component } from "react";
import "./css/userProfile.css";
import Posts from "../Posts/Post";
import { withAuth } from "../../Context/AuthContext";
import profileServices from "../../Services/profileService";
import InfiniteScroll from 'react-infinite-scroll-component';

class UserProfile extends Component {
  state = {
    posts: [],
    profile: {},
    loading: true,
    isFollowing: null,
    error: null,
  };
  async componentDidMount() {
    const { username } = this.props.match.params;
    try {
      const userProfile = await profileServices.listUserProfile(username);
      this.setState({
        profile: userProfile.userProfile,
        posts: userProfile.posts,
        loading: false,
      });
    } catch (error) {
      this.setState({
        error: "El perfil que estas buscando no existe o no esta disponoible.",
        loading: false,
      });
    }
  }
  render() {
    const { profile, error, loading, posts } = this.state;
    return (
      <div className="user-profile-wrapp">
        {/* Inicio Menú  */}
        <div className="user-profile-menu">
          <div className="sidebar-menu">
            <div className="menu-content">
              <div className="menu-search">
                <p>Search</p>
              </div>
              <div className="menu-user-card">
                <p>User Card</p>
              </div>
              <div className="menu-options">
                <p>Menu</p>
              </div>
            </div>
          </div>
        </div>
        {/* Inicio contenido del perfil  */}
        <div className="user-profile-content">
          <div className="prueba">
            <div className="user-profile-scroll">
              <div
                id="scrollableDiv"
              >
                <InfiniteScroll
                  dataLength={posts.length}
                  loader={<h4>Loading...</h4>}
                  scrollableTarget="scrollableDiv"
                >
                 <Posts posts={posts} />
                </InfiniteScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(UserProfile);
