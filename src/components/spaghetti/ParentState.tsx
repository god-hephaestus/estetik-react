"use client";
import React, { useState } from "react";
import Comparison from "./Comparison";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import HeroDynamic from "./HeroDynamic";
import { Divider } from "antd";
import { MinusOutlined } from "@ant-design/icons";
import Image from "next/image";

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
  const [comparisonData, setComparisonData] = useState(buttonsData[0]); // this is what we're gonna change based on the url
  const [stateKey, setstateKey] = useState(comparisonData.stateKey);
  const [heroBg, setHeroBg] = useState(heroBgData.hero1.src);

  // Function to update comparison, gallery, testimonials, and hero background based on stateKey
  const handleButtonClick = (newComparisonData: (typeof buttonsData)[0]) => {
    setComparisonData(newComparisonData);
    setstateKey(newComparisonData.stateKey);
    switch (newComparisonData.stateKey) {
      case "gallery1":
        setHeroBg(heroBgData.hero1.src);
        break;
      case "gallery2":
        setHeroBg(heroBgData.hero2.src);
        break;
      case "gallery3":
        setHeroBg(heroBgData.hero3.src);
        break;
      default:
        setHeroBg(heroBgData.hero1.src);
        break;
    }
  };

  return (
    <div>
      <HeroDynamic heroBg={heroBg} />
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="w-full md:w-2/3 flex flex-col items-center">
          <Image
            width={300}
            height={200}
            alt={"logo"}
            src={"/img/estintlogo25.webp"}
            title="Estetik International"
          />
          <Comparison
            buttonProps={buttonsData}
            comparisonData={comparisonData}
            onButtonClick={handleButtonClick}
          />
        </div>

        <div className="w-full md:w-1/3">
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

      <div className="mt-8">
        <Testimonials stateKey={stateKey} testimonialsData={testimonialsData} />
      </div>
    </div>
  );
}
