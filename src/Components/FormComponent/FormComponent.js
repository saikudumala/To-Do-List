import React, { Component, props } from "react";
class FormComponent extends React.Component {
  constructor() {
    super(props);
    this.state = {};
  }

  /**
   * Method to handle Login submission
   * @param {any} e
   */
  submitDetails(e) {}

  render() {
    return (
      <div
        style={{
          "border-radius": "5px",
          "background-color": "#4DA8DA",
          "margin-top": "100px",
          "text-align": "center",
          width: "500px",
          padding: "20px",
          "margin-left": "33%"
        }}
      >
        <form id="form_login">
          <p>
            <b>UserName:</b>&nbsp;
            <input
              type="text"
              id="username"
              placeholder="Please Enter UserName"
              style={{
                border: "1px solid #ccc",
                "border-radius": "4px",
                " box-sizing": "border-box",
                height: "30px",
                width: "300px"
              }}
            />
          </p>
          <p>
            <b>Password:</b> &nbsp;<input
              type="password"
              id="password"
              placeholder="Please Enter Password"
              style={{
                border: "1px solid #ccc",
                "border-radius": "4px",
                " box-sizing": "border-box",
                height: "30px",
                width: "300px"
              }}
            />
          </p>

          <p>
            <button
              id="submitbutton"
              type="button"
              style={{
                border: "1px solid #ccc",
                "border-radius": "4px",
                " box-sizing": "border-box",
                height: "30px",
                width: "100px",
                "background-color": "black",
                color: "white"
              }}
            >
              Login
            </button>
          </p>
        </form>
      </div>
    );
  }
}
export default FormComponent;
