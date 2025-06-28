import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-JS Object => HTMLElement(render)

// Creating react element using React
// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//   },
//   "Namaste React"
// );
// console.log(heading);

// JSX - HTML-like or XML-like syntax
// JSX - (transpiled before it reaches the JS Engine) - PARCEL - Babel
// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)

// Creating react element using JSX
const jsxHeading = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
