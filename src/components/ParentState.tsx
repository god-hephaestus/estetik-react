"use client";
import React, { useEffect, useState } from "react";
import Comparison from "./Comparison";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import { Collapse } from "antd";
import {
  DoubleRightOutlined,
  DownCircleOutlined,
  DownSquareTwoTone,
  UpSquareTwoTone,
} from "@ant-design/icons";
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

  const [expandedState, setExpandedState] = useState<string | null>(null);
  const [imageOverlay, setImageOverlay] = useState("normal");

  const handleButtonClick = (newComparisonData: (typeof buttonsData)[0]) => {
    setComparisonData(newComparisonData);
    setstateKey(newComparisonData.stateKey);
  };

  const faqItems = comparisonData.faqs.map((faq, index) => ({
    key: `${index + 1}`,
    label: faq.question,
    children: <p className="bg-[#d0eeec]">{faq.answer}</p>,
  }));

  // Unified handle function for expanded states
  const handleExpandClick = (component: string) => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      setExpandedState((prev) => (prev === component ? null : component));
    }
  };

  useEffect(() => {
    const startTransitionTimer = setTimeout(() => {
      setImageOverlay("startedTransition");
    }, 2000);

    const endTransitionTimer = setTimeout(() => {
      setImageOverlay("endedTransition");
    }, 3000);

    return () => {
      clearTimeout(startTransitionTimer);
      clearTimeout(endTransitionTimer);
    };
  }, []);

  // UseEffect for Testimonials transition logic
  useEffect(() => {
    if (expandedState === "Testimonials") {
    }
  }, [expandedState]);

  return (
    <div>
      <Navbar
        buttonProps={buttonsData}
        comparisonData={comparisonData}
        onButtonClick={handleButtonClick}
      />

      <div className="px-4 xl:px-[5%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div
          onClick={() => handleExpandClick("Comparison")}
          className="col-span-1 lg:col-span-5 flex flex-col items-center h-full"
        >
          <Comparison comparisonData={comparisonData} />
        </div>

        <div
          className={`relative col-span-1 lg:col-span-7 flex flex-col h-full ${
            expandedState === "Video" ? "z-50" : "z-30"
          } ${
            expandedState === "Comparison" ? "mt-0" : "-mt-24 lg:mt-0"
          } lg:mt-0`}
        >
          <div
            className="absolute top-2 left-2 cursor-pointer z-[99] text-4xl lg:hidden text-[#13a89e] rounded-full"
            onClick={() => handleExpandClick("Video")}
          >
            {expandedState === "Video" ? (
              <UpSquareTwoTone twoToneColor={"#13a89e"} />
            ) : (
              <DownSquareTwoTone twoToneColor={"#13a89e"} />
            )}
          </div>
          <VideoSlider
            isExpanded={expandedState === "Video"}
            videoDescription={videoDescription}
          />
        </div>

        <div
          className={`relative col-span-1 lg:col-span-8 ${
            expandedState === "Gallery"
              ? "z-50 backdrop-blur-none bg-[#d0eeec]"
              : "z-40 backdrop-blur bg-[#13a89e]/20"
          } ${
            imageOverlay === "startedTransition"
              ? "overlay-transition"
              : imageOverlay === "endedTransition"
              ? "overlay-active"
              : ""
          } ${
            expandedState === "Video" ? "mt-0" : "-mt-24 lg:mt-0"
          } flex flex-col rounded-[25px] lg:backdrop-blur-none lg:bg-[#d0eeec] shadow-md`}
        >
          <div
            className="absolute top-2 left-2 cursor-pointer z-[99] text-3xl lg:hidden text-[#13a89e] rounded-full"
            onClick={() => handleExpandClick("Gallery")}
          >
            {expandedState === "Gallery" ? (
              <UpSquareTwoTone twoToneColor={"#13a89e"} />
            ) : (
              <DownSquareTwoTone twoToneColor={"#13a89e"} />
            )}
          </div>

          <div
            className={`flex lg:mb-0 mb-2 flex-col lg:flex-row lg:h-full ${
              expandedState === "Gallery" ? "" : "overflow-hidden h-[440px]"
            }`}
          >
            <div className="lg:w-[45%] rounded-l-[25px] my-auto rounded-r-[25px] xl:rounded-r-none border-2 border-[#d0eeec]">
              <Gallery
                activestateKey={stateKey}
                GalleryImgsData={GalleryImgsData}
              />
            </div>
            <div className="my-auto lg:w-[55%] lg:pt-[20px] lg:pr-4 px-2 lg:pl-0 bg-[#d0eeec] rounded-r-[25px] rounded-l-[25px] xl:rounded-l-none border-2 border-[#d0eeec]">
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
          onClick={() => handleExpandClick("Form")}
          style={
            expandedState === "Form" &&
            typeof window !== "undefined" &&
            window.innerWidth <= 768
              ? { zIndex: 50, height: "80vh" }
              : {}
          }
          className="col-span-1 lg:col-span-4 flex flex-col w-full z-10 border rounded-[25px] border-[#13a89e] lg:border-none"
        >
          <OperationForm isExpanded={expandedState === "Form"} />
        </div>

        <div
          onClick={() => handleExpandClick("Doctors")}
          className={`col-span-1 lg:col-span-4 lg:mt-0 border-2 rounded-[25px] border-none lg:border-none z-20 ${
            expandedState === "Doctors" ? "z-50" : ""
          } ${expandedState === "Form" ? "" : "-mt-64"} `}
          style={
            expandedState === "Doctors" &&
            typeof window !== "undefined" &&
            window.innerWidth <= 768
              ? { height: "70vh" }
              : {}
          }
        >
          <Doctors
            doctorDescription={doctorsData}
            isExpanded={expandedState === "Doctors"}
          />
        </div>

        <div
          onClick={() => handleExpandClick("Testimonials")}
          className={`col-span-1 lg:col-span-5 flex-grow flex ${
            expandedState === "Testimonials" ? "z-50" : ""
          } ${expandedState === "Doctors" ? "" : "-mt-80 lg:mt-0"}`}
          style={
            expandedState === "Testimonials" &&
            typeof window !== "undefined" &&
            window.innerWidth <= 768
              ? {}
              : { zIndex: "20" }
          }
        >
          <Testimonials
            stateKey={stateKey}
            testimonialsData={testimonialsData}
            isExpanded={expandedState === "Testimonials"}
          />
        </div>

        <div
          className={`col-span-1 lg:col-span-3 z-40 ${
            expandedState === "Testimonials" ? "" : "-mt-40 lg:mt-0"
          }`}
        >
          <Location />
        </div>
      </div>
    </div>
  );
}
