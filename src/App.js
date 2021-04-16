import logo from "./logo.svg";
import "./App.css";
import React, { Component, props } from "react";
import MainComponent from "./Components/MainComponent/MainComponent";

class Welcome extends React.Component {
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
        <h1>Hello, {this.state.reptile}</h1>
        <MainComponent></MainComponent>;
      </div>
    );
    //Main Component
  }
}


export default Welcome;
