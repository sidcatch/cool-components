import React, { Fragment, useRef, useState } from "react";

import sceneryImg from "../images/beautiful-scenery.jpg";

import ImageCompareStyles from "./ImageCompare.module.css";
let imageWidth = 466;
let imageHeight = 368;

function ImageCompare() {
  const imageRef = useRef(null);

  return (
    <Fragment>
      <div className="img-comp-container">
        <div className="img-comp-img">
          <img src="img_snow.jpg" width="300" height="200"></img>
        </div>
        <div className="img-comp-slider"></div>
        <div className="img-comp-img img-comp-overlay">
          <img src="img_forest.jpg" width="300" height="200"></img>
        </div>
      </div>
    </Fragment>
  );
}

export default ImageCompare;
