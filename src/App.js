import React, { Fragment } from "react";

import ImageZoom from "./components/ImageZoom";
import ImageCompare from "./components/ImageCompare";
import ImageFlip from "./components/ImageFlip";
import Carousel from "./components/Carousel";

import "./App.css";

import sceneryImg from "./images/beautiful-scenery.jpg";

import valkyriImg from "./images/valkyrie.png";
import valkyriPencilImg from "./images/valkyrie-pencile.png";

import img1 from "./images/paint-one.png";
import img2 from "./images/paint-two.png";
import img3 from "./images/paint-three.png";
const sliderImages = [img1, img2, img3];

function App() {
  return (
    <Fragment>
      <h1 className="mainHeading">React - playing with images</h1>
      <div className="imageZoomContainer">
        <h2 className="sectionHeading">Image Zoom</h2>
        <ImageZoom
          image={sceneryImg}
          imageWidth={466}
          imageHeight={368}
          lensWidth={200}
          lensHeight={200}
          resultWidth={400}
          resultHeight={400}
        />
      </div>

      <h2 className="sectionHeading">Image Compare</h2>
      <ImageCompare
        image1={valkyriImg}
        image2={valkyriPencilImg}
        imageWidth={450}
        imageHeight={253}
        sliderHeight={40}
      />

      <h2 className="sectionHeading">Image Slider</h2>
      <Carousel
        images={sliderImages}
        carouselWidth={450}
        carouselWidthUnit="px"
      />
      <h2 className="sectionHeading">Image Flip</h2>
      <ImageFlip />
    </Fragment>
  );
}

export default App;
