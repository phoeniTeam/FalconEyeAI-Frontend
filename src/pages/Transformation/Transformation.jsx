import React from "react";
import { useParams } from "react-router-dom";
import ObjectRemoval from "./ObjectRemoval";
import GenerativeFill from "./GenerativeFill";
import ImageRestore from "./ImageRestore";
import ObjectRecolor from "./ObjectRecolor";
import BackgroundRemoval from "./BackgroundRemoval";

function Transformation() {
  const { transformationType } = useParams();

  let ComponentToRender;

  switch (transformationType) {
    case "image-restore":
      ComponentToRender = ImageRestore;
      break;
    case "generative-fill":
      ComponentToRender = GenerativeFill;
      break;
    case "object-removal":
      ComponentToRender = ObjectRemoval;
      break;
    case "object-recolor":
      ComponentToRender = ObjectRecolor;
      break;
    case "background-removal":
      ComponentToRender = BackgroundRemoval;
      break;
  }

  return (
    <div className="flex-grow">
      <ComponentToRender />
    </div>
  );
}

export default Transformation;
