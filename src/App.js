import React, { Fragment } from "react";

import ImageZoom from "./components/ImageZoom";
import ImageCompare from "./components/ImageCompare";

import "./App.css";

function App() {
  return (
    <Fragment>
      <ImageZoom />
      <ImageCompare />
    </Fragment>
  );
}

export default App;
