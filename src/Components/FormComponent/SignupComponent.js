import React, { Component, props } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FormComponent from "../FormComponent/FormComponent"
class SignupComponent extends React.Component {
  constructor() {
    super(props);
    //defining the state in the constructor
    this.state = {};
    // console.log(this.props);
  }

  render() {
    return (
      <div> 
      <Router>
      <Link to="/signup">Signup</Link>
        <Switch>
          <Route path="/signup">
            <FormComponent />
          </Route>
        </Switch>
      </Router>
    </div>
    );
  }
}
export default SignupComponent;
