import React, { Component, props } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormComponent from "../FormComponent/FormComponent";
import "../../CSS/Authentication.css";

class LoginComponent extends React.Component {
  constructor() {
    super(props);

    this.state = {};
  }
  /**
   *
   * LifeCycle method invoked when component is loaded
   *
   * */
  componentDidMount() {
   
    var docx = document.cookie;
    console.log("Loaded Login Component ****",document);
  }
  render() {
    console.log("Loginc ocmponent loading");
    return (
      <div>
        <Link to="/Login">
          <button class="LoginComponentclass">Login</button>
        </Link>
      </div>
    );
  }
}
export default LoginComponent;
