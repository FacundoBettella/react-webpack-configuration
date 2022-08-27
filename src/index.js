import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "../src/styles/global.scss";

// import { render } from "react-dom";
/*Before React v18.0.0
    var container = document.getElementById("app");
    render(<App />, container);
*/

/* After React v18.0.0 */
var container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
