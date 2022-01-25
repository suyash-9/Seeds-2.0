import React, { Component } from "react";
import fire from "./config/fire";
import "./Signup.css";
import { Link, NavLink, NavLinkProps } from "react-router-dom";

class Signup extends Component {
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
        <div style={{backgroundImage:"url(http://localhost:3000/back2.png)",height:'100vh',marginTop:'0px'}}>
        <div className="form-content-right">
        <div className="signupbox">
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
            <h3 className="heading-signup">Registration</h3>

            <div className="form-group">
              {/* <label className="label">Email address</label> */}
              <input
                className="input-signup"
                type="name"
                id="name"
                name="name"
                placeholder="Enter Name"
              />
            </div>

            <div className="form-group">
              {/* <label className="label">Email address</label> */}
              <input
                className="input-signup"
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
                className="input-signup"
                name="password"
                type="password"
                onChange={this.handleChange}
                id="password"
                placeholder="Enter password"
                value={this.state.password}
              />
            </div>

            {/* <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                
                <label  htmlFor="customCheck1" >
                  Remember me
                </label>
                
              </div>
            </div> */}

            <button type="submit" className="button" onClick={this.signup}>
              Register
            </button>
            {/* <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p> */}
          </form>
        </div>
          <div className="label-signup"><label >Already Registered , Click on LogIn</label></div>
        
        <Link to="/Login">
          <button type="submit" className="button-login">
            Login
          </button>
        </Link>
      </div>
      </div>
    );
  }
}
export default Signup;
