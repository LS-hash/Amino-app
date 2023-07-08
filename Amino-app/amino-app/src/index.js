import React from "react";
import ReactDOM from "react-dom";
import ReactApp from "./components/ReactApp";

// I'm rendering the `ReactApp` component into the root div.
// And passing "InfoComponent" as the initial component.
ReactDOM.render(
  <React.StrictMode>
    <ReactApp initialComponent="InfoComponent" />
  </React.StrictMode>,
  document.getElementById("root")
);
