import React, { Component, props } from "react";
import LoginComponent from "../FormComponent/LoginComponent";
import SignupComponent from "../FormComponent/SignupComponent";

class NavBarComponent extends React.Component {
  constructor() {
    super(props);
    //defining the state in the constructor
    this.state = {
      reptile: "alligator",
      color: "#008f68",
    };
    // console.log(this.props);
  }

  render() {
    return (
      <div>
      <LoginComponent/>
      <SignupComponent/>
      </div>
    
    );
  }
}
export default NavBarComponent;
