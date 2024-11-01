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

  const containerClassNames = `container relative rounded-3xl bg-[#d0eeec] h-auto lg:h-[260px] xl:h-[355px] 2xl:h-[430px] flex items-center`;

  useEffect(() => {
    const preloadImages = async () => {
      await Promise.all([
        new Promise((resolve) => {
          const img1 = new Image();
          img1.onload = resolve;
          img1.src = comparisonData.image1;
        }),
        new Promise((resolve) => {
          const img2 = new Image();
          img2.onload = resolve;
          img2.src = comparisonData.image2;
        }),
      ]);
      setIsImageLoaded(true);
    };

    preloadImages();
  }, [comparisonData]);

  return (
    <div className={containerClassNames}>
      <div className="flex items-center justify-center w-full">
        <div className="relative w-full xl:w-auto 2xl:w-auto lg:w-[390px] xl:h-[355px] 2xl:h-[430px] rounded-[25px] bg-[#fff] overflow-hidden aspect-video">
          {!isImageLoaded && (
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center bg-[rgba(240,240,240,0.8)] z-[1]">
              <Spin size="large" />
            </div>
          )}

          {isImageLoaded && (
            <div className="w-full h-full border-[#d0eeec] flex justify-center items-center rounded-[25px] border-2">
              <ReactCompareImage
                leftImage={comparisonData.image1}
                rightImage={comparisonData.image2}
                sliderLineColor="#ffffff"
                skeleton={<Spin size="large" />}
                hover={false}
                leftImageCss={{
                  objectFit: "contain",
                }}
                rightImageCss={{
                  objectFit: "contain",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
