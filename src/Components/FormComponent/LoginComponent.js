import React, { Component, props } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormComponent from "../FormComponent/FormComponent";
import "../../CSS/Authentication.css";
import styled from "styled-components";
function LoginComponent(props) {
  const LoginElement = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 30px;
    text-align: center;
    background-color: white;
    height: 60px;
  `;
  return (
    <div>
      <Link to="/Login">
        <LoginElement>
          <input type="text" name="username" placeholder="Username" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <input type="submit" value="Login" />
        </LoginElement>
      </Link>
    </div>
  );
}
