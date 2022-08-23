// why react ??
// to inject html files in our js code

// var React = require("react");
// var ReactDOM = require("react-dom");

import React from "react";
import ReactDOM from "react-dom";
// ReactDOM.render(what to show , where to show)

//ReactDOM.render(<h1>Hello ✅ World!</h1>, document.getElementById("root"));
// #vanilla js
// let h1 = document.createElement("h1");
// h1.innerHTML = "Hello World 😈";

// document.getElementById("root").appendChild(h1);

/* 
what i want to create  multiple elements at same time?
*/
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>this is a paragraph</p>
  </div>,
  document.getElementById("root")
);
