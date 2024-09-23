"use client";
import React, { useState } from "react";
import Comparison from "./Comparison";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import { Divider } from "antd";
import { MinusOutlined } from "@ant-design/icons";

export default function ParentState({
  testimonialsData,
  buttonsData,
  GalleryImgsData,
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
}) {
  const [comparisonData, setComparisonData] = useState(buttonsData[0]); // this is what we're gonna change based on the url
  const [stateKey, setstateKey] = useState(comparisonData.stateKey);

  // Function to update comparison, gallery, and testimonials based on stateKey
  const handleButtonClick = (newComparisonData: (typeof buttonsData)[0]) => {
    setComparisonData(newComparisonData); // Update comparison data
    setstateKey(newComparisonData.stateKey); // Update gallery key for both Gallery and Testimonials
  };

  return (
    <>
      <div>
        <div className="flex justify-center">
          <div className="">
            <Comparison
              buttonProps={buttonsData}
              comparisonData={comparisonData}
              onButtonClick={handleButtonClick}
            />
          </div>
          <div className=""></div>

          <div className="">
            <Divider
              style={{ fontWeight: "bold", paddingLeft: "20px" }}
              orientation="right"
              orientationMargin={30}>
              Frequently Asked Questions
            </Divider>

            <div className="px-5">
              {comparisonData.faqs.map((faq, index) => (
                <div key={index}>
                  <h3 className="text-black font-bold py-1">
                    <MinusOutlined /> {faq.question}
                  </h3>
                  <p className="text-black">{faq.answer}</p>
                </div>
              ))}
            </div>
            <Gallery
              activestateKey={stateKey}
              GalleryImgsData={GalleryImgsData}
            />
          </div>
        </div>
        <div className="">
          <Testimonials
            stateKey={stateKey}
            testimonialsData={testimonialsData}
          />
        </div>
        <div></div>
      </div>
    </>
  );
}
