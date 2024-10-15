"use client";
import React, { useState } from "react";
import Comparison from "./Comparison";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import HeroDynamic from "./HeroDynamic";
import { Collapse, CollapseProps, Divider } from "antd";
import { DownCircleOutlined, MinusOutlined } from "@ant-design/icons";
import OperationForm from "../OperationForm";

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
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "This is panel header 1",
      children: <p className="bg-[#d0eeec]">{text}</p>,
    },
    {
      key: "2",
      label: "This is panel header 2",
      children: <p className="bg-[#d0eeec]">{text}</p>,
    },
    {
      key: "3",
      label: "This is panel header 3",
      children: <p className="bg-[#d0eeec]">{text}</p>,
    },
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between ">
        <div className="w-full md:w-2/5  flex flex-col items-center">
          <Comparison
            buttonProps={buttonsData}
            comparisonData={comparisonData}
            onButtonClick={handleButtonClick}
          />
        </div>
        <div className="w-full md:w-3/5 flex flex-col items-center">
          <HeroDynamic
            heroBg={heroBgData[stateKey]?.src || heroBgData.hero1.src}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between mt-10 items-stretch">
  <div className="w-full md:w-[70%] flex flex-col rounded-[25px] border-2 bg-[#d0eeec] border-[#d0eeec]">
    <div className="flex flex-1">
      <div className="md:w-[57%] rounded-l-[25px] border-2 border-[#d0eeec]">
        <Gallery
          activestateKey={stateKey}
          GalleryImgsData={GalleryImgsData}
        />
      </div>
      <div className="md:w-[43%] pt-[20px] bg-[#d0eeec] rounded-r-[25px] border-2 border-[#d0eeec]">
        <Collapse
          expandIcon={({ isActive }) => (
            <DownCircleOutlined
              style={{
                color: "#13a89e",
                fontSize: "25px",
                border: 0,
              }}
              rotate={isActive ? 180 : 0}
            />
          )}
          expandIconPosition="end"
          bordered={false}
          accordion
          items={items}
          className="rounded-[25px] border-2 border-[#abd7d4] bg-[#d0eeec]"
        />
      </div>
    </div>
  </div>
  <div className="w-full md:w-[30%] flex flex-col">
    <OperationForm  />
  </div>
</div>

      <div className="w-full md:w-2/5 ">
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
      <div className="mt-8">
        <Testimonials stateKey={stateKey} testimonialsData={testimonialsData} />
      </div>
    </div>
  );
}
