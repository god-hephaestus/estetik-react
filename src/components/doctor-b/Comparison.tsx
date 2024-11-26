import React from "react";
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
  const containerClassNames = `container relative rounded-3xl bg-[#e4d4c2] h-auto lg:h-[260px] xl:h-[355px] 2xl:h-[430px] flex items-center`;

  return (
    <div className={containerClassNames}>
      <div className="flex items-center justify-center w-full">
        <div className="relative w-full xl:w-auto 2xl:w-auto lg:w-[390px] xl:h-[355px] 2xl:h-[430px] rounded-[25px] bg-[#fff] overflow-hidden aspect-video">
          <div className="w-full h-full border-[#e4d4c2] flex justify-center items-center rounded-[25px] border-2">
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
        </div>
      </div>
    </div>
  );
}
