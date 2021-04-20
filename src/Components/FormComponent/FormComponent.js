import axios from "axios";
import React, { Component, props } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignupComponent from "../FormComponent/SignupComponent";

class FormComponent extends React.Component {
  constructor() {
    super(props);
    this.state = {
      userName: null,
      passWord: null,
      formComponentVisiblity: true,
    };
    this.submitDetails = this.submitDetails.bind(this);
    this.signUpSubmisiion = this.signUpSubmisiion.bind(this);
  }

  /**
   * Method to handle Login submission
   * @param {any} e
   */
  async submitDetails() {
    const userObject = {userName:this.state.userName, passWord: this.state.passWord};
    const response = await axios.post("http://localhost:8080/login", userObject);
    console.log(response);
  }

  signUpSubmisiion() {
    this.setState({ formComponentVisiblity: false });
    
  }

  render() {
    console.log("FormComponentVisblity", this.state.formComponentVisiblity);

    return (
      <div
        id="formComp"
        style={{
          "border-radius": "5px",
          "background-color": this.state.formComponentVisiblity? "#4DA8DA" : "white",
          "margin-top": "100px",
          "text-align": "center",
          width: "500px",
          padding: "20px",
          "margin-left": "33%",
          
        }}
      >
        <div
        style = {{display: this.state.formComponentVisiblity ? "block" : "None"}}
        >
          {/* <form id="form_login">*/}
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
                width: "300px",
              }}
              onChange={(e) => this.setState({ userName: e.target.value })}
            />
          </p>
          <p>
            <b>Password:</b> &nbsp;
            <input
              type="password"
              id="password"
              placeholder="Please Enter Password"
              style={{
                border: "1px solid #ccc",
                "border-radius": "4px",
                " box-sizing": "border-box",
                height: "30px",
                width: "300px",
              }}
              onChange={(e) => this.setState({ passWord: e.target.value })}
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
                cursor: "pointer",
              }}
              onClick={this.submitDetails}
            >
              Login
            </button>
          </p>
        </div>
        <div>
          <Router>
            <Link to="/SignUp">
              <p onClick={this.signUpSubmisiion}
              style={{
                display:this.state.formComponentVisiblity ? "block" : "None"
              }}>
                {" "}
                Not a Registered user ? Please sign up here
              </p>
            </Link>

            <Route path="/SignUp" component={SignupComponent} />
          </Router>
        </div>
        {/*</form>*/}
      </div>
    );
  }
}
export default FormComponent;
