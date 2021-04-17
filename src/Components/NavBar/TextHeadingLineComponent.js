import React from "react";

const headerLineStyle = {
  textalign: "center",
  color: "white",
  height: "100px",
  'margin-top': "10px",
  position: "absolute",
  left: "45%"
};

/*Use styled components for dynamic css*/
const TextHeadingLineComponent = () => {
  return (
    <div style={headerLineStyle}>
      <h3>Welcome To-Do-List</h3>
    </div>
  );
};

export default TextHeadingLineComponent;
