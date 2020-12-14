import React, { Component } from 'react';
import profileImage from "../../images/perfil.jpg";
class TopMenu extends Component {
    state = {  }
    render() { 
        return (
            <>
            <nav className="navbar navbar-light navbar-expand-md fixed-top shadow-sm">
                <div className="container-fluid">
                    <div className="d-md-none d-lg-none d-xl-none flex-grow-0"><img className="rounded-circle" src={profileImage} width="40" height="40" alt="user profile image"/></div><a className="navbar-brand" href="#">Unitalkies</a><button data-toggle="collapse" className="navbar-toggler d-sm-none d-md-none d-lg-none" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="nav navbar-nav">
                            <li className="nav-item"><a className="nav-link active" href="#">First Item</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Second Item</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Nav Item</a></li>
                        </ul>
                </div>
                <div className="d-none float-right d-sm-none d-md-inline d-lg-inline d-xl-inline margin-profile-picture"><img className="rounded-circle shadow-sm d-xl-flex align-items-xl-start" src={profileImage} width="40" height="40" /></div>
                </div>
            </nav>
        </>
         );
    }
}
 
export default TopMenu;