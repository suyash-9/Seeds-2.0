import React, { Component } from "react";
import fire from "./config/fire";
import "./Login.css";
import { Link, NavLink, NavLinkProps } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: "",
    };
  }
  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
      <div className="parent" style={{backgroundImage:"url(http://localhost:3000/back2.png)",height:'100vh',marginTop:'0px'}}>

        <div className="content">
          <div className="loginbox">
            {/* <form>
              <h1>login</h1>
                <input
                type="email"
                id="email"
                name="email"
                placeholder="enter email address"
                onChange={this.handleChange}
                value={this.state.email}
                />
                <input
                name="password"
                type= "password"
                onChange={this.handleChange}
                id="password"
                placeholder="enter password"
                value={this.state.password}
                />
                <button onClick={this.login}>Login</button>
                <button onClick={this.signup}>Signup</button>
            </form> */}

            <form>
              <h3 className="heading">Sign In</h3>

              <div className="form-group">
                {/* <label className="label">Email address</label> */}
                <input
                  className="input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter email address"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              </div>

              <div className="form-group">
                {/* <label className="label">Password</label> */}
                <input
                  className="input"
                  name="password"
                  type="password"
                  onChange={this.handleChange}
                  id="password"
                  placeholder="Enter password"
                  value={this.state.password}
                />
              </div>

              {/* <div className="form-group">
                <div className="custom-control-custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember me
                  </label>
                </div>
              </div> */}

              <button type="submit" className="button" onClick={this.login}>
                LogIn
              </button>
              <div className="form-froup"><label className="label2">New User, Click on Register User</label></div>
              {/* <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p> */}
          
            </form>
            
          </div>
          

          <Link to="/Signup">
            <button type="submit" className="button-signup">
              Register User
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Login;
