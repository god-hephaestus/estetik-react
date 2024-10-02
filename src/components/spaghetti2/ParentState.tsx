"use client";
import React, { useState } from "react";
import Comparison from "./Comparison";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import HeroDynamic from "./HeroDynamic";
import { Divider } from "antd";
import { MinusOutlined } from "@ant-design/icons";
import StepsComp from "./StepsComp";

export default function ParentState({
  testimonialsData,
  buttonsData,
  GalleryImgsData,
  heroBgData,
}: {
  testimonialsData: {
    [key: string]: Array<{
      name: string;
      operation: string;
      message: string;
      imageSrc: string;
    }>;
  };
  buttonsData: Array<{
    label: string;
    image1: string;
    image2: string;
    faqs: Array<{ question: string; answer: string }>;
    stateKey: string;
  }>;
  GalleryImgsData: { [key: string]: Array<{ src: string; alt: string }> };
  heroBgData: { [key: string]: { src: string; alt: string } };
}) {
  const [comparisonData, setComparisonData] = useState(buttonsData[0]); // Set initial comparison data
  const [stateKey, setstateKey] = useState(comparisonData.stateKey); // Set initial state key

  // Function to update comparison, gallery, testimonials, and hero background based on stateKey
  const handleButtonClick = (newComparisonData: (typeof buttonsData)[0]) => {
    setComparisonData(newComparisonData); // Update comparison data
    setstateKey(newComparisonData.stateKey); // Update state key
  };

  return (
    <div className="">
      <HeroDynamic heroBg={heroBgData[stateKey]?.src || heroBgData.hero1.src} />
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <Comparison
            buttonProps={buttonsData}
            comparisonData={comparisonData}
            onButtonClick={handleButtonClick}
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <StepsComp />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="w-full md:w-1/2">
          <Gallery
            activestateKey={stateKey}
            GalleryImgsData={GalleryImgsData}
          />
        </div>
        <div className="w-full md:w-1/2 ">
          <Divider
            style={{ fontWeight: "bold", paddingLeft: "20px" }}
            orientation="right"
            orientationMargin={30}>
            Frequently Asked Questions
          </Divider>

          <div className="px-5 h-[350px] overflow-y-auto">
            {comparisonData.faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="text-black font-bold py-1 ">
                  <MinusOutlined /> {faq.question}
                </h3>
                <p className="text-black ">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Testimonials stateKey={stateKey} testimonialsData={testimonialsData} />
      </div>
    </div>
  );
}
