import React, { Component } from 'react'

export default class LoginForm extends Component {
  username = React.createRef();
  state = {
    account: {
      username: '', password: ''
    }
  }
  handleChange = ({ currentTarget: input }) => {
    const account = {...this.state.account}
    account[input.name] = input.value;
    this.setState({account})
  }


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
          <div className="form-group"><label htmlFor="username">Username</label>
          <input value={this.state.account.username} autoFocus 
          onChange={this.handleChange}
          ref={this.username}
           type="text" id="username" name="username" className="form-control"/></div>
          <div className="form-group"><label htmlFor="password">Password</label><input 
          name="password" value={this.state.account.password} onChange={this.handleChange}
          type="text" className="form-control" id="password"/></div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    )
  }
}
