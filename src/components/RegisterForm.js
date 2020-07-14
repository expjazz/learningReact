import React, { Component } from "react";
import Input from "./common/Input";
export default class RegisterForm extends Component {
  state = {
    data: {
      username: "",
      password: "",
      name: "",
    },
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  render() {
    const { data } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          name="username"
          onChange={this.handleChange}
          value={data.username}
          label="Username"
        />

        <Input
          name="password"
          onChange={this.handleChange}
          value={data.password}
          label="Password"
        />
        <Input
          name="name"
          onChange={this.handleChange}
          value={data.name}
          label="Name"
        />
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

// username password name
