import React from "react";

import imageFlipStyles from "./ImageFlip.module.css";

import creditCardBackImg from "../images/credit-card-back.png";
import creditCardFrontImg from "../images/credit-card-front.png";

let imageWidth = 416;
let imageHeight = 261;

function ImageFlip() {
  return (
    <div
      className={imageFlipStyles.container}
      style={{ width: imageWidth, height: imageHeight }}
    >
      <div className={imageFlipStyles.inner}>
        <div className={imageFlipStyles.front}>
          <img
            src={creditCardFrontImg}
            alt=""
            style={{ width: imageWidth, height: imageHeight }}
          ></img>
        </div>
        <div className={imageFlipStyles.back}>
          <img
            src={creditCardBackImg}
            alt=""
            style={{ width: imageWidth, height: imageHeight }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default ImageFlip;
