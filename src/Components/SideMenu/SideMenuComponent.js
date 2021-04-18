import React, { props } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class SideMenuComponent extends React.Component {
    constructor() {
        super(props);
        this.state = {
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
            <div id="sideMenuComp" style={{
                "background-color": "#B0C4DE",
                width: "250px",
                top:"80px",
                bottom: "0px",
                position: "absolute",
                'box-shadow': "15px 10px 8px 3px #737CA1",
                
            }}>
            </div>
        );
    }
}
export default SideMenuComponent;
