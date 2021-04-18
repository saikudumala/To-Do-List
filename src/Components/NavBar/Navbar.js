import React from "react";
import SignupComponent from "../FormComponent/SignupComponent";
import TextHeadingLineComponent from "../NavBar/TextHeadingLineComponent";
import styled from "styled-components";

const spanStyles = {
    display: "flex",
    flexwrap: "wrap",
    fontsize: "30px",
    textalign: "center",
    backgroundColor: "#696969",
    height: "80px",
    'box-shadow': "15px 10px 8px 3px #808080",
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
      <div id="navBarComp" style={spanStyles}>
      <TextHeadingLineComponent/>
    </div>
  );
};

export default Navbar;
