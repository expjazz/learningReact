import React, { Component } from "react";
import Input from "./common/Input";
export default class LoginForm extends Component {
  username = React.createRef();
  state = {
    account: {
      username: "",
      password: "",
    },
    errors: {},
  };

  validate = () => {
    const errors = {};

    const { account } = this.state;
    if (account.username.trim() === "")
      errors.username = "username is required";
    if (account.password.trim() === "")
      errors.password = "Password is required";

    return Object.keys(errors).length === 0 ? null : errors;
  };
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
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
            error={this.state.errors.username}
          />

          <Input
            name="password"
            value={this.state.account.password}
            label="Password"
            onChange={this.handleChange}
            error={this.state.errors.password}
          />

          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
