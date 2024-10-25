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
  const [comparisonData, setComparisonData] = useState(buttonsData[0]);
  const [stateKey, setstateKey] = useState(comparisonData.stateKey);

  const videoDescription: string[] = heroBgData[stateKey]?.src ?? [];

  const handleButtonClick = (newComparisonData: (typeof buttonsData)[0]) => {
    setComparisonData(newComparisonData);
    setstateKey(newComparisonData.stateKey);
  };

  const faqItems = comparisonData.faqs.map((faq, index) => ({
    key: `${index + 1}`,
    label: faq.question,
    children: <p className="bg-[#d0eeec]">{faq.answer}</p>,
  }));

  // State for component expansion
  const [isComparisonExpanded, setIsComparisonExpanded] = useState(false);
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);
  const [isGalleryExpanded, setIsGalleryExpanded] = useState(false);
  const [isFormExpanded, setIsFormExpanded] = useState(false);
  const [isDoctorsExpanded, setIsDoctorsExpanded] = useState(false);
  const [isTestimonialsExpanded, setIsTestimonialsExpanded] = useState(false);
  const [isLocationExpanded, setIsLocationExpanded] = useState(false);

  // Handle click event on components
  const handleComparisonClick = () => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      console.log("handleComparisonClick triggered");
      setIsComparisonExpanded((prev) => !prev);
    }
  };

  const handleVideoClick = () => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      console.log("handleVideoClick triggered ");
      console.log(isVideoExpanded);
      setIsVideoExpanded((prev) => !prev);
    }
  };

  const handleGalleryClick = () => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      console.log("handleGalleryClick triggered");
      setIsGalleryExpanded((prev) => !prev);
    }
  };

  const handleFormClick = () => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      console.log("handleFormClick triggered");
      setIsFormExpanded((prev) => !prev);
    }
  };

  const handleDoctorsClick = () => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      console.log("handleDoctorsClick triggered");
      setIsDoctorsExpanded((prev) => !prev);
    }
  };

  const handleTestimonialsClick = () => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      console.log("handleTestimonialsClick triggered");
      setIsTestimonialsExpanded((prev) => !prev);
    }
  };

  const handleLocationClick = () => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      console.log("handleLocationClick triggered");
      setIsLocationExpanded((prev) => !prev);
    }
  };

  return (
    <div>
      <Navbar
        buttonProps={buttonsData}
        comparisonData={comparisonData}
        onButtonClick={handleButtonClick}
      />

      <div className="px-4 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div
          onClick={handleComparisonClick}
          className="col-span-1 lg:col-span-5 flex flex-col items-center h-full"
        >
          <Comparison comparisonData={comparisonData} />
        </div>

        <div
          onClick={handleVideoClick}
          className={`col-span-1 lg:col-span-7 flex flex-col h-full ${
            isVideoExpanded ? "z-50" : "z-30"
          } ${isComparisonExpanded ? "mt-0" : "-mt-24 lg:mt-0"} lg:mt-0`}
        >
          <VideoSlider
            isExpanded={isVideoExpanded}
            videoDescription={videoDescription}
          />
        </div>

        <div
          onClick={handleGalleryClick}
          className={`col-span-1 lg:col-span-8 ${
            isGalleryExpanded
              ? " z-50 backdrop-blur-none bg-[#d0eeec]"
              : "z-40  backdrop-blur bg-[#13a89e]/20"
          } ${
            isVideoExpanded ? "mt-0" : "-mt-24 lg:mt-0"
          } flex flex-col rounded-[25px] lg:backdrop-blur-none  lg:bg-[#d0eeec] shadow-md`}
        >
          <div
            className={`flex lg:mb-0 mb-2 flex-col lg:flex-row lg:h-auto ${
              isGalleryExpanded ? "" : "overflow-hidden h-[440px] "
            } `}
          >
            <div className="lg:w-[45%] rounded-l-[25px] rounded-r-[25px] xl:rounded-r-none border-2 border-[#d0eeec]">
              <Gallery
                activestateKey={stateKey}
                GalleryImgsData={GalleryImgsData}
              />
            </div>
            <div className="lg:w-[55%] lg:pt-[20px] lg:pr-4 px-2 lg:pl-0 bg-[#d0eeec] rounded-r-[25px] rounded-l-[25px] xl:rounded-l-none border-2 border-[#d0eeec]">
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

        <div
          onClick={handleFormClick}
          style={
            isFormExpanded &&
            typeof window !== "undefined" &&
            window.innerWidth <= 768
              ? { zIndex: 50, height: "80vh" }
              : {}
          }
          className="col-span-1 lg:col-span-4 flex flex-col w-full z-10 border rounded-[25px] border-[#13a89e] lg:border-none"
        >
          <OperationForm isExpanded={isFormExpanded} />
        </div>

        <div
          onClick={handleDoctorsClick}
          className={`col-span-1 lg:col-span-4 lg:mt-0  border-2 rounded-[25px] border-[#13a89e] lg:border-none z-20 ${
            isDoctorsExpanded && "z-50"
          } ${isFormExpanded || "-mt-64"} `}
          style={
            isDoctorsExpanded &&
            typeof window !== "undefined" &&
            window.innerWidth <= 768
              ? { height: "70vh" }
              : {}
          }
        >
          <Doctors
            doctorDescription={doctorsData}
            isExpanded={isDoctorsExpanded}
          />
        </div>

        <div
          onClick={handleTestimonialsClick}
          className={`col-span-1 lg:col-span-5 flex-grow flex ${
            isTestimonialsExpanded && "z-50"
          } ${isDoctorsExpanded || "-mt-80 lg:mt-0"}  `}
          style={
            isTestimonialsExpanded &&
            typeof window !== "undefined" &&
            window.innerWidth <= 768
              ? {}
              : { zIndex: "20" }
          }
        >
          <Testimonials
            stateKey={stateKey}
            testimonialsData={testimonialsData}
            isExpanded={isTestimonialsExpanded}
          />
        </div>
        <div
          className={`col-span-1 lg:col-span-3 z-40 ${
            isTestimonialsExpanded || "-mt-40 lg:mt-0"
          } `}
        >
          <Location />
        </div>
      </div>
    </div>
  );
}
