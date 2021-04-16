import React, {  props } from "react";
import LoginComponent from "../FormComponent/LoginComponent";
import SignupComponent from "../FormComponent/SignupComponent";
import Navbar from "../NavBar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


class NavBarComponent extends React.Component {
  constructor() {
    super(props);
    //defining the state in the constructor
    this.state = {
      reptile: "alligator",
      color: "#008f68"
    };
  }
  /**
   *
   * LifeCycle method invoked when component is loaded
   *
   * */
  componentDidMount() {
    console.log("Loaded NavBar Component");
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/Login" component={LoginComponent} />
            <Route path="/SignUp" component={SignupComponent} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default NavBarComponent;
