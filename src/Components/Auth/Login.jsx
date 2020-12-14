import React, { Component } from 'react';
import { withAuth } from "../../Context/AuthContext";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    if (username === "" || password === "") {
      alert("Los campos no pueden estar vacíos");
    } else {
      this.props.handleLogin({
        username,
        password,
      });
    }
  };
  render() {
      const { username, password } = this.state;
      const { errorLogin } = this.props;
    return (
        <div>
            <form>
                    <label>Nombre de usuario</label>
                    <input value={username} placeholder="Nombre de usuario" onChange={this.handleChange} name="username" type="text" />
                    <label>Contraseña</label>
                    <input value={password} placeholder="Contraseña" name="password" onChange={this.handleChange} type="password" />
                    <input type="submit" onClick={this.handleFormSubmit} value="Iniciar Sesión"/>
                <p style={{color: "red"}}>{errorLogin}</p>
            </form>
        </div>
    );
  }
}

export default withAuth(Login);