import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Unsplash from "unsplash-js";

export const unsplash = new Unsplash({
  applicationId:
    "0f6a0fe151ba6978f73f32aa04bdf7b6ccfa41dc051883cf048fe7634e3b3942",
  secret: "439f443094d4ed97cf71444fb83e1eaa0e4c03a0cf3662f6622f44f32ef3399d",
  callbackUrl: "http://127.0.0.1"
});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
