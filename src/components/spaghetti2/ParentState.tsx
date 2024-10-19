"use client";
import React, { useState } from "react";
import Comparison from "./Comparison";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import { Collapse } from "antd";
import { DownCircleOutlined } from "@ant-design/icons";
import OperationForm from "../OperationForm";
import Doctors from "./Doctors";
import Location from "./Location";
import VideoSlider from "./VideoSlider";
import VideoLibrary from "./VideoLibrary";

export default function ParentState({
  testimonialsData,
  buttonsData,
  GalleryImgsData,
  heroBgData,
  doctorsData,
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
  heroBgData: { [key: string]: { src: string[]; alt?: string } };
  doctorsData: Array<{
    imageSrc: string;
    doctorName: string;
    doctorText: string;
    doctorArea: string;
  }>;
}) {
  const [comparisonData, setComparisonData] = useState(buttonsData[0]); // Set initial comparison data
  const [stateKey, setstateKey] = useState(comparisonData.stateKey); // Set initial state key

  const videoDescription: string[] = heroBgData[stateKey]?.src ?? [];

  // Function to update comparison, gallery, testimonials, and hero background based on stateKey
  const handleButtonClick = (newComparisonData: (typeof buttonsData)[0]) => {
    setComparisonData(newComparisonData); // Update comparison data
    setstateKey(newComparisonData.stateKey); // Update state key
  };

  const faqItems = comparisonData.faqs.map((faq, index) => ({
    key: `${index + 1}`,
    label: faq.question,
    children: <p className="bg-[#d0eeec]">{faq.answer}</p>,
  }));

  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between items-stretch ">
        <div className="w-full md:w-2/5 flex flex-col items-center mb-8 mt-4 md:mb-0 md:mt-0  h-full">
          <Comparison
            buttonProps={buttonsData}
            comparisonData={comparisonData}
            onButtonClick={handleButtonClick}
          />
        </div>
        <div className="w-full md:w-2/5 flex-grow flex flex-col mb-8 md:mb-0 h-full my-auto">
          <VideoSlider videoDescription={videoDescription} />
        </div>
        <div className=" w-full md:w-1/5">
          <VideoLibrary />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between mt-10 items-stretch ">
        <div className="w-full md:w-[70%] flex flex-col rounded-[25px] border-2 bg-[#d0eeec] border-[#d0eeec] mb-12 md:mb-0">
          <div className="flex flex-1 flex-col md:flex-row ">
            <div className="md:w-[57%] rounded-l-[25px] rounded-r-[25px] md:rounded-r-none border-2 border-[#d0eeec]">
              <Gallery
                activestateKey={stateKey}
                GalleryImgsData={GalleryImgsData}
              />
            </div>
            <div className="md:w-[43%] pt-[20px] bg-[#d0eeec] rounded-r-[25px] rounded-l-[25px] md:rounded-l-none border-2 border-[#d0eeec] ">
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
                defaultActiveKey="1"
                bordered={false}
                accordion
                items={faqItems}
                className="rounded-[25px] border-2 border-[#abd7d4] bg-[#d0eeec]"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-[30%] flex flex-col">
          <OperationForm />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row md:justify-between mt-10 gap-[20px]">
        <div className="w-full lg:w-2/5">
          <Doctors doctorDescription={doctorsData} />
        </div>
        <div className="w-full lg:w-2/5 flex-grow flex">
          <Testimonials
            stateKey={stateKey}
            testimonialsData={testimonialsData}
          />
        </div>
        <div className=" mx-12 lg:mx-0 lg:w-1/5 overflow-x-hidden">
          <Location />
        </div>
      </div>
    </div>
  );
}
