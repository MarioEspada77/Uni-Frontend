import React, { Component } from 'react';

class BottomMenu extends Component {
    state = {  }
    render() { 
        return (
            <nav className="navbar navbar-light navbar-expand fixed-bottom shadow d-print-none d-sm-flex d-md-none d-lg-none d-xl-none fixed-menu-bottom">
                <div className="container-fluid">
                    <div className="icon-bottom" ><i class="fas fa-home"></i></div>
                    <div className="icon-bottom"><i class="fa fa-search"></i></div>
                    <div className="icon-bottom" ><i class="fa fa-bell"></i></div>
                    <div className="icon-bottom" ><i class="fa fa-envelope"></i></div>
                </div>
            </nav>
         );
    }
}
 
export default BottomMenu;