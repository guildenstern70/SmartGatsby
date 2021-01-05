/*
 * Project SmartGatsby
 * Copyright (c) Alessio Saltarin 2021
 * Licensed under MIT license
 */


import * as React from "react";
import "./login.css"
import Layout from "../components/layout";
import { Link, navigate } from "gatsby";
// @ts-ignore
import logo from "../images/gatsby-icon.png";

interface LoginState {
  username: string;
  password: string;
}

export default class LoginPage extends React.Component<never, LoginState> {

  constructor(props: never) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeUsername(event: React.FormEvent<HTMLInputElement>): void {
    this.setState({ username: event.currentTarget.value });
  }

  onChangePassword(event: React.FormEvent<HTMLInputElement>): void {
    this.setState({ password: event.currentTarget.value });
  }

  onSubmit() {
    if (this.state.username.length > 0 && this.state.password.length > 0)
      navigate('/main');
  }

  render(): React.ReactNode {
    return (
      <Layout>
        <div className="row col mt-5">
          <div className="loginform form-signin text-center mt-5">
            <img className="mb-4" src={logo} alt="Gatsby Logo" width="60" />
            <form>
              <h1 className="h4 mb-3 fw-normal text-primary">Please sign in</h1>
              <label htmlFor="inputEmail" className="visually-hidden">Username</label>
              <input type="text" id="inputEmail" className="form-control" placeholder="Username"
                     value={this.state.username}
                     onChange={this.onChangeUsername}
                     required autoFocus />
              <label htmlFor="inputPassword" className="visually-hidden">Password</label>
              <input type="password" id="inputPassword" className="form-control" placeholder="Password"
                     value={this.state.password}
                     onChange={this.onChangePassword}
                     required />
              <div className="checkbox mb-3">
                <label htmlFor="rememberme" className="fs-6">
                  <input id="rememberme" type="checkbox" value="remember-me" />
                  &nbsp;&nbsp;Remember me
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="button" onClick={this.onSubmit}>Sign in</button>
              <p className="mt-5 mb-3 text-muted">Try with 'guest/guest'<br />
              or just <Link to={"/main"}>skip it</Link></p>
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}


