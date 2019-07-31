import React, { Component } from "react";
import UserHandler from "../apiManager/UserHandler"

export default class Register extends Component {
  state = {
    name: "",
    username: "",
    password: "",
    email: ""
  };


  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  // handles registration submission
  handleRegister = event => {
    event.preventDefault();
    let home = ""
    let findUser = this.props.users.find(user => {
      if (
        user.username === this.state.username ||
        user.email === this.state.email
      ) {
        home = user;
      }
      return home
    });
    if (findUser) {
      console.log("if ",findUser)
      alert(
        "username or email already in use."
      );

    } else {
      let stateUser = this.state
      this.props.addUser(stateUser)
      .then(() => UserHandler.getAll())
      .then(users => {
        users.forEach(user => {
          if(user.username === stateUser.username && user.email === stateUser.email ){
            sessionStorage.setItem("userId", user.id)
          }
        })
        this.props.history.push("/");
      })


    }
  };
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleRegister}>
        <input
            onChange={this.handleFieldChange}
            type="text"
            placeholder="Name"
            id="name"
            className="form-control"
          />
          <input
            onChange={this.handleFieldChange}
            type="text"
            placeholder="Username"
            id="username"
            className="form-control"
          />
          <input
            onChange={this.handleFieldChange}
            type="text"
            placeholder="Email"
            id="email"
            className="form-control"
          />
          <input
            onChange={this.handleFieldChange}
            type="text"
            placeholder="Password"
            id="password"
            className="form-control"
          />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
