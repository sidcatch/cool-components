import React, { Fragment, useState } from "react";

import ImageZoom from "./components/ImageZoom";
import ImageCompare from "./components/ImageCompare";

import "./App.css";

function App() {
  const [showImageComparer, setImageComparer] = useState(true);

  return (
    <Fragment>
      <p className="hey">Hey</p>
      <ImageZoom />
      <p className="hey">Hey</p>
      <button
        onClick={() => {
          setImageComparer(!showImageComparer);
        }}
      >
        Image Comparer
      </button>
      {showImageComparer && <ImageCompare />}

      <p className="hey">Hey</p>
    </Fragment>
  );
}

export default App;
