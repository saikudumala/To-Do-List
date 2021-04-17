import React, { Component, props } from "react";
import NavBarComponent from "../NavBar/NavBarComponent";

class MainComponent extends React.Component {
  constructor() {
    super(props);

    this.state = {
      reptile: "alligator",
      color: "#008f68",
      isFormVisible: false,
      windowHeight: null,
      windowWidth: null,
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
      windowWidth: window.innerWidth,
    });
  }
  render() {
    return (
      <div>
        <NavBarComponent />
      </div>
    );
  }
}
export default MainComponent;
