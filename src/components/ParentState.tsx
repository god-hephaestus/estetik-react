"use client";
import React, { useState } from "react";
import Comparison from "./Comparison";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import { Collapse } from "antd";
import { DownCircleOutlined } from "@ant-design/icons";
import OperationForm from "./OperationForm";
import Doctors from "./Doctors";
import Navbar from "./Navbar";
import VideoSlider from "./VideoSlider";

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
      <Navbar
        buttonProps={buttonsData}
        comparisonData={comparisonData}
        onButtonClick={handleButtonClick}
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="col-span-1 lg:col-span-2 flex flex-col items-center lg:mb-0 lg:mt-0 h-full">
          <Comparison comparisonData={comparisonData} />
        </div>

        <div className="col-span-1 lg:col-span-2 flex flex-col h-full">
          <VideoSlider videoDescription={videoDescription} />
        </div>

        <div className="col-span-1 lg:col-span-1 lg:row-span-2 flex flex-col">
          <OperationForm />
        </div>

        <div className="col-span-1 lg:col-span-2 lg:row-span-2 flex flex-col rounded-[25px] border-2 bg-[#d0eeec] border-[#d0eeec] shadow-md mb-0 md:mb-0">
          <div className="flex flex-col xl:flex-row">
            <div className="xl:w-[57%] rounded-l-[25px] rounded-r-[25px] xl:rounded-r-none border-2 border-[#d0eeec]">
              <Gallery
                activestateKey={stateKey}
                GalleryImgsData={GalleryImgsData}
              />
            </div>
            <div className="xl:w-[43%] pt-[20px] bg-[#d0eeec] rounded-r-[25px] rounded-l-[25px] xl:rounded-l-none border-2 border-[#d0eeec]">
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

        <div className="col-span-1 lg:col-span-2">
          <Doctors doctorDescription={doctorsData} />
        </div>

        <div className="col-span-1 lg:col-span-3 flex-grow flex">
          <Testimonials
            stateKey={stateKey}
            testimonialsData={testimonialsData}
          />
        </div>
      </div>
    </div>
  );
}
