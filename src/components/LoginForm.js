import React, { Component } from "react";
import Input from "./common/Input";
export default class LoginForm extends Component {
  username = React.createRef();
  state = {
    account: {
      username: "",
      password: "",
    },
  };
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const username = this.username.current.value;
    console.log(username);
    console.log("submit");
  };
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={this.state.account.username}
            label="Username"
            onChange={this.handleChange}
          />

          <Input
            name="password"
            value={this.state.account.password}
            label="Password"
            onChange={this.handleChange}
          />

          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
