import React, { Component, props } from "react";
import NavBarComponent from "../NavBar/NavBarComponent";
import FormComponent from "../FormComponent/FormComponent"
class MainComponent extends React.Component {
  constructor() {
    super(props);
    //defining the state in the constructor
    this.state = {
      reptile: "alligator",
      color: "#008f68",
      isFormVisible:false,
    };
    // console.log(this.props);
  }

  render() {
    return (
      <div>
        <NavBarComponent></NavBarComponent>
      </div>
    );
  }
}
export default MainComponent;
