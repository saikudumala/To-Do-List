import React from "react";
import LoginComponent from "../FormComponent/LoginComponent";
import SignupComponent from "../FormComponent/SignupComponent";
import TextHeadingLineComponent from "../NavBar/TextHeadingLineComponent";
import styled from "styled-components";

const spanStyles = {
    display: "flex",
    flexwrap: "wrap",
    fontsize: "30px",
    textalign: "center",
    backgroundColor: "black",
    height: "80px"
};
const Navbar = () => {


    /*Need to Know how to place text inside styled components*/
    /* const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 30px;
    text-align: center;
    background-color: white;
    height: 60px;
  `;*/

  
  return (
    <div style={spanStyles}>
      <TextHeadingLineComponent/>
      <SignupComponent />
    </div>
  );
};

export default Navbar;
