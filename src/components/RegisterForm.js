import React, { Component } from "react";
import Input from "./common/Input";
import Joi, { validate } from "joi-browser";
export default class RegisterForm extends Component {
  state = {
    data: {
      username: "",
      password: "",
      name: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required(),
    password: Joi.string().required(),
    name: Joi.string().required(),
  };
  validate = () => {
    const errors = {};
    const result = ''
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    const errors = this.validateProperty(input);
    this.setState({ data, errors });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    console.log("submit");
  };

  validateProperty = ({ name, value }) => {
    const errors = {};
    const { data } = this.state;
    if (value.trim() === "") {
      errors[name] = `${name} cannot be empty`;
    }
    this.setState({ data });
    return Object.keys(errors).length > 0 ? errors : this.state.errors;
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
          errors={errors.password}
        />
        <Input
          name="name"
          onChange={this.handleChange}
          value={data.name}
          label="Name"
          errors={errors.name}
        />
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

// username password name

// validateProperty = ({ name, value }) => {
//   const obj = { [name]: value };
//   const schema = { [name]: this.schema[name] };
//   const { error } = Joi.validate(obj, schema);
//   return error ? error.details[0].message : null;
// };

// Naive validate
// validate = () => {
//   const errors = {};
//   const { data } = this.state;
//   Object.keys(data).forEach((key) => {
//     if (data[key].trim() === "") {
//       errors[key] = `${key} cannot be empty`;
//     }
//   });
