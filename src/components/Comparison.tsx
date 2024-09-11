"use client";

import React, { useState } from "react";
import ReactCompareImage from "react-compare-image";
import { Button } from "antd";

export default function Comparison() {
  const [comparisonImage, setComparisonImage] = useState<Array<string>>([
    "/BeforeAfter/dental.webp",
    "/BeforeAfter/dental2.webp",
  ]);

  const handleImageChange = (image1: string, image2: string) => {
    setComparisonImage([image1, image2]);
  };

  return (
    <div className="container">
      <Button
        onClick={() =>
          handleImageChange(
            "/BeforeAfter/ginocomasti.webp",
            "/BeforeAfter/ginocomasti2.webp"
          )
        }>
        Gynecomastia
      </Button>
      <Button
        onClick={() =>
          handleImageChange(
            "/BeforeAfter/ginocomasti.webp",
            "/BeforeAfter/ginocomasti2.webp"
          )
        }>
        Gynecomastia
      </Button>
      <Button
        onClick={() =>
          handleImageChange(
            "/BeforeAfter/ginocomasti.webp",
            "/BeforeAfter/ginocomasti2.webp"
          )
        }>
        Gynecomastia
      </Button>
      <Button
        onClick={() =>
          handleImageChange(
            "/BeforeAfter/ginocomasti.webp",
            "/BeforeAfter/ginocomasti2.webp"
          )
        }>
        Gynecomastia
      </Button>
      <Button
        onClick={() =>
          handleImageChange(
            "/BeforeAfter/ginocomasti.webp",
            "/BeforeAfter/ginocomasti2.webp"
          )
        }>
        Gynecomastia
      </Button>
      <div style={{ width: "800px", height: "500px" }}>
        <ReactCompareImage
          leftImage={comparisonImage[0]} // Dynamically set left image from state
          rightImage={comparisonImage[1]} // Dynamically set right image from state
          sliderLineColor="#ffffff" // Customize the slider color
          handleSize={30} // Customize the handle size
          skeleton
        />
      </div>
    </div>
  );
}
