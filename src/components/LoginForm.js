import React, { Component } from 'react'

export default class LoginForm extends Component {
  username = React.createRef();
  handleSubmit = e => {
    e.preventDefault();
    const username = this.username.current.value;
    console.log(username)
    console.log('submit')
  }
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group"><label htmlFor="username">Username</label><input ref={this.username} type="text" id="username" className="form-control"/></div>
          <div className="form-group"><label htmlFor="password">Password</label><input type="text" className="form-control" id="password"/></div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    )
  }
}
