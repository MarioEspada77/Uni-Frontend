import React, { useState } from "react";
import imageprofile from "../../images/perfil.jpg";
import { withAuth } from "../../Context/AuthContext";
import postServices from "../../Services/postService";
import { Button } from "bootstrap";

const AddPost = (props) => {
  const [state, setText] = useState({ text: "" });

  const handleInput = (e) => {
    setText({
      [e.target.name]: e.target.value,
    });
    console.log(state.text);
  };

  const sendData = async (e) => {
    const { user, handleNewPublications } = props;
    e.preventDefault();

    try {
      const post = await postServices.createPost(user.username, state.text);
      console.log("post", post)
      if (post) {
        const publications = await postServices.listAllPost();
        if (publications) {
          handleNewPublications(publications);
        }
      }
    } catch (error) {
      console.log("Error al crear el post");
    }
  };
  return (
    <div
      className='modal fade bd-example-modal-lg'
      tabindex='-1'
      role='dialog'
      aria-labelledby='myLargeModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-lg'>
        <div className='modal-content'>
          <div className='publication-wrap'>
            <form onSubmit={sendData}>
              <img
                class='rounded-circle'
                src={imageprofile}
                style={{ width: "40px", height: "40px", marginTop: "5px" }}
                alt='user profile image'
              />
              <textarea
                cols='30'
                rows='3'
                name='text'
                className='publication-textArea'
                placeholder='¿En qué estás pensando?'
                style={{ overflow: "hidden", resize: "none", height: "100px" }}
                onChange={handleInput}
              ></textarea>
              <button type="submit" className='button-publication'>Publicar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(AddPost);
