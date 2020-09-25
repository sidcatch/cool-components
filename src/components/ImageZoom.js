import React, { Fragment, useRef, useState } from "react";

import sceneryImg from "../images/beautiful-scenery.jpg";

import imageZoomStyles from "./ImageZoom.module.css";
let imageWidth = 466;
let imageHeight = 368;
let lensWidth = 200;
let lensHeight = 200;
let resultWidth = 400;
let resultHeight = 400;

function ImageZoom() {
  const imageRef = useRef(null);

  const [lensPos, setLensPos] = useState({ lensPosX: 0, lensPosY: 0 });
  const { lensPosX, lensPosY } = lensPos;

  let resultToLensWidthRatio = resultWidth / lensWidth;
  let resultToLensHeightRatio = resultHeight / lensHeight;

  const moveLens = (e) => {
    e.preventDefault();
    let pos = getCursorPos(e);
    //console.log(`${pos.x}, ${pos.y}`);

    let lensPosX = pos.x - lensWidth / 2;
    let lensPosY = pos.y - lensHeight / 2;

    let lensMaxX = imageWidth - lensWidth;
    let lensMinX = 0;
    let lensMaxY = imageHeight - lensHeight;
    let lensMinY = 0;

    if (lensPosX > lensMaxX) lensPosX = lensMaxX;
    if (lensPosX < lensMinX) lensPosX = lensMinX;
    if (lensPosY > lensMaxY) lensPosY = lensMaxY;
    if (lensPosY < lensMinY) lensPosY = lensMinY;

    setLensPos({ lensPosX, lensPosY });
  };

  const getCursorPos = (e) => {
    let a,
      x = 0,
      y = 0;
    //e = e || window.event;
    /*get the x and y positions of the image:*/
    a = imageRef.current.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  };
  return (
    <Fragment>
      <div className={imageZoomStyles.container}>
        <div
          className={imageZoomStyles.lens}
          style={{
            width: lensWidth,
            height: lensHeight,
            border: "1px solid #d4d4d4",
            left: lensPosX,
            top: lensPosY,
          }}
          onMouseMove={moveLens}
        ></div>
        <img
          className={imageZoomStyles.image}
          src={sceneryImg}
          width={imageWidth}
          height={imageHeight}
          alt=""
          ref={imageRef}
          onMouseMove={moveLens}
        ></img>
      </div>
      <div
        className={imageZoomStyles.result}
        style={{
          width: resultWidth,
          height: resultHeight,
          backgroundImage: `url(${sceneryImg})`,
          backgroundSize: `${imageWidth * resultToLensWidthRatio}px ${
            imageHeight * resultToLensHeightRatio
          }px`,
          backgroundPosition: `-${lensPosX * resultToLensWidthRatio}px -${
            lensPosY * resultToLensHeightRatio
          }px`,
        }}
      ></div>
    </Fragment>
  );
}

export default ImageZoom;
