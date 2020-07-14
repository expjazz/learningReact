import React, { Component } from "react";
import Input from "./common/Input";
export default class RegisterForm extends Component {
  state = {
    data: {
      username: "",
      password: "",
      name: "",
    },
    errors: {},
  };

  validate = () => {
    const errors = {};
    const { data } = this.state;
    Object.keys(data).forEach((key) => {
      if (data[key].trim() === "") {
        errors[key] = `${key} cannot be empty`;
      }
    });
    console.log(errors);
    // if (data[data.name].trim() === "") {
    //   errors[data.name] = `${data.name} is required`;
    // }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    console.log("submit");
  };

  render() {
    const { data, errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          name="username"
          onChange={this.handleChange}
          value={data.username}
          label="Username"
          errors={errors.username}
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
