import React, { Component, props } from "react";
import NavBarComponent from "../NavBar/NavBarComponent";

class MainComponent extends React.Component {
  constructor() {
    super(props);

    this.state = {
      reptile: "alligator",
      color: "#008f68",
      isFormVisible: false
    };
  }

  /**
   *
   * LifeCycle method invoked when component is loaded
   *
   * */
  componentDidMount() {
    console.log("Loaded Main Component");
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
