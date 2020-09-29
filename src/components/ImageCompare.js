import React, { Fragment, useRef, useState, useEffect } from "react";

import cx from "classnames";
import imageCompareStyles from "./ImageCompare.module.css";

import forestImg from "../images/img_forest.jpg";
import snowImg from "../images/img_snow.jpg";

let imageWidth = 300;
let imageHeight = 200;
let sliderWidth = 40;
let sliderHeight = sliderWidth;

//let sliderClicked = false;
function ImageCompare() {
  const overlayRef = useRef(null);

  const sliderClicked = useRef(false);

  const [overlayWidth, setOverlayWidth] = useState(imageWidth / 2);

  useEffect(() => {
    const slideMove = (e) => {
      //console.log("move");
      var pos;

      if (!sliderClicked.current) return;
      /*get the cursor's x position:*/
      pos = getCursorPos(e);
      /*prevent the slider from being positioned outside the image:*/
      let overlayWidth = pos;
      if (overlayWidth < 0) overlayWidth = 0;
      if (overlayWidth > imageWidth) overlayWidth = imageWidth;
      /*execute a function that will resize the overlay image according to the cursor:*/

      setOverlayWidth(overlayWidth);
    };

    window.addEventListener("mouseup", slideFinish);
    window.addEventListener("mousemove", slideMove);
    return () => {
      window.removeEventListener("mouseup", slideFinish);
      window.removeEventListener("mousemove", slideMove);
    };
  }, []);

  const slideReady = (e) => {
    e.preventDefault();

    //setSliderState((p) => ({ ...p, sliderClicked: true }));
    sliderClicked.current = true;
  };
  const slideFinish = (e) => {
    e.preventDefault();

    //setSliderState((p) => ({ ...p, sliderClicked: false }));
    sliderClicked.current = false;
  };

  function getCursorPos(e) {
    var a,
      x = 0;
    //e = e || window.event;
    /*get the x positions of the image:*/
    a = overlayRef.current.getBoundingClientRect();
    /*calculate the cursor's x coordinate, relative to the image:*/
    x = e.pageX - a.left;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    return x;
  }
  return (
    <Fragment>
      <div
        className={imageCompareStyles.container}
        style={{ height: imageHeight }}
      >
        <div className={imageCompareStyles.image}>
          <img
            src={snowImg}
            width={imageWidth}
            height={imageHeight}
            alt=""
          ></img>
        </div>
        <div
          className={imageCompareStyles.slider}
          style={{
            width: sliderWidth,
            height: sliderHeight,
            top: `${imageHeight / 2 - sliderHeight / 2}px`,
            left: `${overlayWidth - sliderWidth / 2}px`,
          }}
          onMouseDown={slideReady}
        ></div>
        <div
          className={cx(imageCompareStyles.image, imageCompareStyles.overlay)}
          style={{ width: overlayWidth }}
          ref={overlayRef}
        >
          <img
            src={forestImg}
            width={imageWidth}
            height={imageHeight}
            alt=""
          ></img>
        </div>
      </div>
    </Fragment>
  );
}

export default ImageCompare;
