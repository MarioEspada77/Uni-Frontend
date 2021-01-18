import React from 'react';
// RUTAS
import { Switch } from "react-router-dom";
import PrivateRoute from "./Components/Auth/PrivateRoute";
import AnonRoute from "./Components/Auth/AnonRoute";
import AuthProvider from "./Context/AuthContext";
import Login from "./Components/Auth/Login";
import Home from "./Components/Home/Home";
// MENU TOP Y BOTTOM
import TopMenu from "./Components/Menu/TopMenu";
import BottomMenu from "./Components/Menu/BottomMenu";
//USER PROFILE
import UserProfile from "./Components/UserProfile/UserProfile";
// BOOSTRAP
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
// STYLES
import "./css/stylesGeneral.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <TopMenu />
            <Switch>
                <AnonRoute exact path="/login" component={Login} />
                <PrivateRoute exact path="/home" component={Home} />
                <PrivateRoute exact path="/user/:username" component={UserProfile} />
            </Switch>
            <BottomMenu />
      </AuthProvider>

    </div>
  );
}

export default App;
