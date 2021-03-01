import React from "react"
import Posts from "../Posts/Post"
import InfiniteScroll from 'react-infinite-scroll-component';
import "../UserProfile/css/userProfile.css";
const returnedPosts = posts =>{
    return(
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
    )
}
export {
    returnedPosts
}