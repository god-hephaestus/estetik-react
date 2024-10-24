"use client";
import React, { useState } from "react";
import Comparison from "./Comparison";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import { Collapse } from "antd";
import { DoubleRightOutlined, DownCircleOutlined } from "@ant-design/icons";
import OperationForm from "./OperationForm";
import Doctors from "./Doctors";
import Navbar from "./Navbar";
import VideoSlider from "./VideoSlider";
import Location from "./Location";

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

      <div className=" px-4 mx-auto  grid grid-cols-1 grid-rows-1 lg:grid-rows-1 lg:grid-cols-12 gap-6">
        <div className="col-span-1 row-span-1 lg:col-span-5 flex flex-col items-center  lg:mb-0 lg:mt-0 h-full">
          <Comparison comparisonData={comparisonData} />
        </div>

        <div className="col-span-1 row-span-1 lg:col-span-7 flex flex-col h-full z-30 -mt-24 lg:mt-0">
          <VideoSlider videoDescription={videoDescription} />
        </div>

        <div className="col-span-1 row-span-1 lg:col-span-8 -mt-24 lg:mt-0 z-40 flex flex-col rounded-[25px] backdrop-blur lg:backdrop-blur-none bg-[#13a89e]/20 lg:bg-[#d0eeec] shadow-md  ">
          <div className="flex flex-col lg:flex-row h-[440px] lg:h-auto overflow-hidden ">
            <div className="lg:w-[45%] rounded-l-[25px] rounded-r-[25px] xl:rounded-r-none border-2 border-[#d0eeec]">
              <Gallery
                activestateKey={stateKey}
                GalleryImgsData={GalleryImgsData}
              />
            </div>
            <div className="lg:w-[55%] lg:pt-[20px] lg:pr-4 bg-[#d0eeec] rounded-r-[25px] rounded-l-[25px] xl:rounded-l-none border-2 border-[#d0eeec]">
              <Collapse
                expandIcon={({ isActive }) => (
                  <DownCircleOutlined
                    style={{
                      color: "white",
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
        <button
          onClick={() =>
            window.scrollBy({
              top: window.innerHeight,
              behavior: "smooth",
            })
          }
          className="flex w-full justify-center lg:hidden -my-4"
        >
          <DoubleRightOutlined className="text-[#13a89e] rotate-90 text-4xl" />
        </button>
        <div className="col-span-1 row-span-1 lg:col-span-4 flex flex-col w-full z-10 border rounded-[25px] border-[#13a89e] lg:border-none">
          <OperationForm />
        </div>

        <div className="col-span-1 lg:col-span-4 lg:mt-0 -mt-64 z-20 border-2 rounded-[25px] border-[#13a89e] lg:border-none">
          <Doctors doctorDescription={doctorsData} />
        </div>

        <div className="col-span-1 lg:col-span-5 flex-grow flex z-30 ">
          <Testimonials
            stateKey={stateKey}
            testimonialsData={testimonialsData}
          />
        </div>
        <div className="col-span-1 lg:col-span-3 z-40">
          <Location />
        </div>
      </div>
    </div>
  );
}
