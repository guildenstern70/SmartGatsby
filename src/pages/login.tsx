/*
 * Project SmartGatsby
 * Copyright (c) Alessio Saltarin 2021
 * Licensed under MIT license
 */


import * as React from "react";
import "./login.css"
import Layout from "../components/layout";
// @ts-ignore
import logo from "../images/gatsby-icon.png";


const LoginPage: React.FC = () => {
  return (
    <Layout>
      <div className="row col mt-5">
        <div className="loginform form-signin text-center mt-5">
          <img className="mb-4" src={logo} alt="Gatsby Logo" width="60" />
          <form>
            <h1 className="h4 mb-3 fw-normal">Please sign in</h1>
            <label htmlFor="inputEmail" className="visually-hidden">Username</label>
            <input type="text" id="inputEmail" className="form-control" placeholder="Username" required autoFocus />
            <label htmlFor="inputPassword" className="visually-hidden">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
            <div className="checkbox mb-3">
              <label htmlFor="rememberme" className="fs-6">
                <input id="rememberme" type="checkbox" value="remember-me" />
                &nbsp;&nbsp;Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted">Try with 'guest/guest'</p>
          </form>
        </div>
      </div>
    </Layout>

  );
};

export default LoginPage;
