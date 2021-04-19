import React, { Component, props } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormComponent from "../FormComponent/FormComponent";
import "../../CSS/Authentication.css";
class SignupComponent extends React.Component {
  constructor() {
    super(props);

      this.state = { userName: null, passWord:null};
      this.submitDetails = this.submitDetails.bind(this);
  }

    /**
     * Method to handle Login submission
     * @param {any} e
     */
    submitDetails() { }
    render() {
        console.log('signup form');
    return (
      <div
        id="signupformComp"
        style={{
          "border-radius": "5px",
          "background-color": "#4DA8DA",
          "margin-top": "100px",
          "text-align": "center",
          width: "500px",
          padding: "20px",
          "margin-left": "33%"
        }}
      >
        {/*<form id="signup_form_login">*/}
          <p>
            <b>UserName:</b>&nbsp;
            <input
              type="text"
              id="username"
              placeholder="Please Enter UserName"
              style={{
                border: "1px solid #ccc",
                "border-radius": "4px",
                " box-sizing": "border-box",
                height: "30px",
                width: "300px"
              }}
              onChange={e => this.setState({ userName: e.target.value })}
            />
          </p>
          <p>
            <b>Password:</b> &nbsp;<input
              type="password"
              id="password"
              placeholder="Please Enter Password"
              style={{
                border: "1px solid #ccc",
                "border-radius": "4px",
                " box-sizing": "border-box",
                height: "30px",
                width: "300px"
              }}
              onChange={e => this.setState({ passWord: e.target.value })}
            />
          </p>

          <p>
            <button
              id="submitbutton"
              type="button"
              style={{
                border: "1px solid #ccc",
                "border-radius": "4px",
                " box-sizing": "border-box",
                height: "30px",
                width: "100px",
                "background-color": "black",
                color: "white",
                cursor: "pointer"
              }}
              onClick={this.submitDetails}
            >
              Login
            </button>
          </p>
       {/* </form>*/}
      </div>
    );
  }
}
export default SignupComponent;
