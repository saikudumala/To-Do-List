import React, { Component, props } from "react";
import FormComponent from "../FormComponent/FormComponent";
import NavBarComponent from "../NavBar/NavBarComponent";
import SideMenuComponent from "../SideMenu/SideMenuComponent";
class MainComponent extends React.Component {
  constructor() {
    super(props);

    this.state = {
      reptile: "alligator",
      color: "#008f68",
      isFormVisible: false,
      windowHeight: null,
      windowWidth: null,
      isFormComponentVisible: true
    };
  }

  /**
   *
   * LifeCycle method invoked when component is loaded
   *
   * */
  componentDidMount() {
    console.log(
      "Loaded Main Component",
      window.innerWidth,
      "Height",
      window.innerHeight
    );
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    });
  }
  render() {
    return (
      <div>
        <NavBarComponent />
        <SideMenuComponent />
        <FormComponent isFormComponentVisible={this.state.isFormComponentVisible} />
      </div>
    );
  }
}
export default MainComponent;
