import React, { Component } from "react";
import imageprofile from "../../images/perfil.jpg"

class AddPost extends Component {
  state = {};
  render() {
    return (
      <div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="publication-wrap">
                  <img
                    class='rounded-circle'
                    src={imageprofile}
                    style={{ width: "40px", height: "40px", marginTop: "5px" }}
                    alt='user profile image'
                  />
                  <textarea cols="30" rows="3" className="publication-textArea" placeholder="¿En qué estás pensando?" style={{overflow:"hidden", resize: "none", height: "100px"}} ></textarea>
              </div>
              <button className="button-publication">Publicar</button>
            </div>
         </div>
      </div>
    );
  }
}
export default AddPost;
