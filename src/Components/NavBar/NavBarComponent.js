import React, { Component, props } from "react";
import LoginComponent from "../FormComponent/LoginComponent";
import SignupComponent from "../FormComponent/SignupComponent";
import MainComponent from "../MainComponent/MainComponent";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
} from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'



class NavBarComponent extends React.Component {
  constructor() {
    super(props);
    //defining the state in the constructor
    this.state = {
      reptile: "alligator",
      color: "#008f68",
    };
  
  }

  render() {
    return (
      <div>
            <Router>
                <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                    <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/signUp">SignUp</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <br />
                <Switch>
                    <Route exact path="/">
                        <MainComponent />
                    </Route>
                    <Route path="/login">
                        <LoginComponent />
                    </Route>
                    <Route path="/signUp">
                        <SignupComponent />
                    </Route>
                </Switch>
            </Router>
      </div>
    
    );
  }
}
export default NavBarComponent;
