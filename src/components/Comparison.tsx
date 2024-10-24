"use client";

import React, { useState, useEffect } from "react";
import ReactCompareImage from "react-compare-image";
import { Spin } from "antd";

export default function Comparison({
  comparisonData,
}: {
  comparisonData: {
    label: string;
    image1: string;
    image2: string;
    faqs: Array<{ question: string; answer: string }>;
    stateKey: string;
  };
}) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageChange = (image1: string, image2: string) => {
    setIsImageLoaded(false);

    const img1 = new Image();
    const img2 = new Image();

    img1.onload = () => {
      img2.onload = () => {
        setIsImageLoaded(true);
      };
      img2.src = image2;
    };
    img1.src = image1;
  };

  useEffect(() => {
    handleImageChange(comparisonData.image1, comparisonData.image2);
  }, [comparisonData]);

  return (
    <div className="container relative rounded-3xl shadow-md bg-[#d0eeec]  h-auto lg:h-[260px] xl:h-[355px] 2xl:h-[380px] ">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <div
          className="relative w-full  lg:w-[390px] xl:w-[520px] 2xl:w-[640px]"
          style={{
            aspectRatio: "16/9",
            backgroundColor: "#f0f0f0",
            overflow: "hidden",
          }}
        >
          {!isImageLoaded && (
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(240, 240, 240, 0.8)",
                zIndex: 1,
              }}
            >
              <Spin size="large" />
            </div>
          )}

          {isImageLoaded && (
            <div className="w-full h-full border-[#13a89e] border-2">
              <ReactCompareImage
                leftImage={comparisonData.image1}
                rightImage={comparisonData.image2}
                sliderLineColor="#ffffff"
                skeleton={<Spin size="large" />}
                hover={false}
                leftImageCss={{
                  objectFit: "contain", // This ensures the image fits perfectly within the container
                }}
                rightImageCss={{
                  objectFit: "contain", // This ensures the image fits perfectly within the container
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
