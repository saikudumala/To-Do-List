import React, { Component, props } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormComponent from "../FormComponent/FormComponent";
import SignupComponent from "./SignupComponent";
class LoginComponent extends React.Component {
  constructor() {
    super(props);
    //defining the state in the constructor
    this.state = {};
    // console.log(this.props);
  }

  render() {
    console.log("Loginc ocmponent loading");
    return (
      <div>
        
        <Router>
        <Link to="/login">Login</Link>
          <Switch>
            <Route path="/login">
              <FormComponent />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default LoginComponent;
