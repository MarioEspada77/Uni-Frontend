import React from 'react';
import LoadPosts from "./LoadPost";

const Post = (props) =>{
    const { posts } = props;
    return (
        <div className="post-box">
            {posts.map(post => {
                return (
                    <LoadPosts key={`id-post-${post._id}`} post={post}></LoadPosts>
                );
            })}
        </div>
      );
}


export default Post;