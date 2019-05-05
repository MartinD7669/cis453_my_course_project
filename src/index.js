import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./index.css";
import WebFont from "webfontloader";
 
WebFont.load({
  google: {
    families: ['Libre Baskerville', 'serif','Cinzel']
  }
});

ReactDOM.render(
  <Main/>, 
  document.getElementById("root")
);