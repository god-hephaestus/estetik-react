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
import Location from "./Location";
import VideoSliderMobile from "./VideoSliderMobile";

interface FAQ {
  question: string;
  answer: string;
}

interface ButtonData {
  label: string;
  image1: string;
  image2: string;
  faqs: FAQ[];
  stateKey: string;
}

interface Testimonial {
  name: string;
  operation: string;
  message: string;
  genderFemale: boolean;
}

interface DoctorData {
  imageSrc: string;
  doctorName: string;
  doctorText: string;
  doctorArea: string;
}

interface GalleryImage {
  src: string;
  alt: string;
}

interface HeroBgData {
  src: string[];
  alt?: string;
}

interface ParentStateProps {
  activeState: string;
  testimonialsData: {
    [key: string]: Testimonial[];
  };
  buttonsData: ButtonData[];
  GalleryImgsData: {
    [key: string]: GalleryImage[];
  };
  heroBgData: {
    [key: string]: HeroBgData;
  };
  doctorsData: DoctorData[];
}

export default function ParentState({
  activeState,
  testimonialsData,
  buttonsData,
  GalleryImgsData,
  heroBgData,
  doctorsData,
}: ParentStateProps) {
  const initialComparisonData =
    buttonsData.find((item) => item.stateKey === activeState) || buttonsData[0];

  const [comparisonData, setComparisonData] = useState<ButtonData>(
    initialComparisonData
  );
  const [stateKey, setStateKey] = useState<string>(
    initialComparisonData.stateKey
  );
  const videoDescription: string[] = heroBgData[stateKey]?.src ?? [];

  const handleButtonClick = (newComparisonData: ButtonData) => {
    setComparisonData(newComparisonData);
    setStateKey(newComparisonData.stateKey);
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

      <div className="px-2 xl:px-[10%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div
          className={`relative md:hidden col-span-1 lg:col-span-7 flex flex-col h-full transition-all duration-500 ease-in-out transform 
           lg:mt-0`}
        >
          <VideoSliderMobile videoDescription={videoDescription} />
        </div>

        <div
          className={`relative col-span-1 lg:col-span-5 flex flex-col items-center h-full transition-all duration-500 ease-in-out
          `}
        >
          <Comparison comparisonData={comparisonData} />
        </div>

        <div
          className={`relative hidden col-span-1 lg:col-span-7 md:flex flex-col h-full transition-all duration-500 ease-in-out transform lg:mt-0`}
        >
          <VideoSlider videoDescription={videoDescription} />
        </div>

        <div
          className={`relative col-span-1 lg:col-span-8 transition-all  duration-500 ease-in-out  bg-[#d0eeec] flex flex-col rounded-[35px] `}
        >
          <div
            className={`flex lg:mb-0 mb-2 flex-col lg:flex-row lg:h-[470px] 2xl:h-[490px] lg:max-h-[550px]  no-scrollbar transition-all duration-500 ease-in-out  `}
          >
            <div className="lg:w-[50%] rounded-l-[25px] my-auto rounded-r-[25px] xl:rounded-r-none ">
              <h1 className="text-center text-[#13a89e] font-bold text-[32px] whitespace-nowrap">
                {stateKey === "gallery1"
                  ? "Meme Estetiği"
                  : stateKey === "gallery2"
                  ? "BBL"
                  : stateKey === "gallery3"
                  ? "Total Body"
                  : stateKey === "gallery4"
                  ? "Karın Germe"
                  : stateKey === "gallery5"
                  ? "Rinopilasti"
                  : "Estetik International"}
              </h1>
              <Gallery
                activestateKey={stateKey}
                GalleryImgsData={GalleryImgsData}
              />
            </div>
            <div
              className={`my-auto lg:w-[50%] lg:h-[450px] justify-center overflow-y-scroll px-2 lg:pr-4 lg:pl-0  bg-[#d0eeec] rounded-r-[25px] rounded-l-[25px] xl:rounded-l-none border-2 border-[#d0eeec]`}
            >
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

        <div className=" relative col-span-1 lg:col-span-4 flex flex-col lg:h-[450px] 2xl:h-[450px]  w-full z-10 border rounded-[25px] border-[#13a89e] lg:border-none">
          <OperationForm />
        </div>

        <div
          className={`transition-all duration-500 ease-in-out relative col-span-1 lg:col-span-5 2xl:col-span-4 lg:mt-0 border-2 rounded-[25px] border-none z-20 `}
        >
          <Doctors doctorDescription={doctorsData} />
        </div>

        <div
          className={`relative col-span-1 lg:col-span-7 lg:mt-0 2xl:col-span-8 flex flex-col w-full transition-all duration-500 ease-in-out`}
        >
          <div className="flex flex-col lg:flex-row gap-6 w-full">
            <div
              className={`transition-all duration-500 ease-in-out relative lg:w-[64%] flex-grow`}
            >
              <Testimonials
                stateKey={stateKey}
                testimonialsData={testimonialsData}
              />
            </div>

            <div
              className={`transition-all duration-500 ease-in-out relative lg:w-[36%] z-40 lg:mb-0 `}
            >
              <Location />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
