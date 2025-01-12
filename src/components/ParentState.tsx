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
import ClickIcon from "./ClickIcon";
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
  const [expandedState, setExpandedState] = useState<string | null>("Video");

  const handleButtonClick = (newComparisonData: ButtonData) => {
    setComparisonData(newComparisonData);
    setStateKey(newComparisonData.stateKey);
  };

  const faqItems = comparisonData.faqs.map((faq, index) => ({
    key: `${index + 1}`,
    label: faq.question,
    children: <p className="bg-[#d0eeec]">{faq.answer}</p>,
  }));

  const handleExpandClick = (component: string) => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      setExpandedState((prev) => (prev === component ? null : component));
    }
  };
  return (
    <div>
      <Navbar
        buttonProps={buttonsData}
        comparisonData={comparisonData}
        onButtonClick={handleButtonClick}
      />

      <div className="px-8 xl:px-[10%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-6">
        <div
          className={`relative md:hidden col-span-1 lg:col-span-7 flex flex-col h-full transition-all duration-500 ease-in-out transform ${
            expandedState === "Video" ? "" : "z-20"
          } ${expandedState === "Comparison" ? "mt-0" : "lg:mt-0"}
           lg:mt-0`}
        >
          <div
            className="absolute top-2 right-2 cursor-pointer z-[99] text-4xl md:hidden text-[#13a89e]"
            onClick={() => handleExpandClick("Video")}
          >
            <ClickIcon />
          </div>
          <VideoSliderMobile
            isExpanded={expandedState === "Video"}
            videoDescription={videoDescription}
          />
        </div>

        <div
          className={`relative col-span-1 lg:col-span-5 flex flex-col items-center h-full transition-all duration-500 ease-in-out
            ${expandedState === "Video" ? "z-30 mt-0" : ""}
            ${expandedState === "Comparison" ? "z-50 mt-0" : ""}
            ${
              expandedState !== "Video" && expandedState !== "Comparison"
                ? "z-30 -mt-36"
                : ""
            }
          `}
        >
          <div
            className={`absolute top-2 right-2 cursor-pointer z-[99] text-4xl md:hidden `}
            onClick={() => handleExpandClick("Comparison")}
          >
            <ClickIcon wobble />
          </div>
          <Comparison
            comparisonData={comparisonData}
            isExpanded={expandedState === "Comparison"}
          />
        </div>

        <div
          className={`relative hidden col-span-1 lg:col-span-7 md:flex flex-col h-full transition-all duration-500 ease-in-out transform lg:mt-0`}
        >
          <VideoSlider videoDescription={videoDescription} />
        </div>

        <div
          className={`relative col-span-1 lg:col-span-8 transition-all  duration-500 ease-in-out ${
            expandedState === "Gallery"
              ? "z-50 backdrop-blur-none bg-[#d0eeec] -mt-40"
              : "z-40 backdrop-blur bg-[#13a89e]/20 "
          } ${expandedState === "Comparison" ? "mt-0" : "-mt-24 lg:mt-0"} ${
            expandedState !== "Video" && expandedState !== "Comparison"
              ? ""
              : ""
          } flex flex-col rounded-[35px] lg:backdrop-blur-none lg:bg-[#d0eeec] `}
        >
          <div
            className="absolute top-2 right-2 cursor-pointer z-[99] text-4xl md:hidden text-[#13a89e]"
            onClick={() => handleExpandClick("Gallery")}
          >
            <ClickIcon />
          </div>

          <div
            className={`flex lg:mb-0 mb-2 flex-col lg:flex-row lg:h-[470px] 2xl:h-[490px] lg:max-h-[550px]  no-scrollbar transition-all duration-500 ease-in-out  ${
              expandedState === "Gallery" ? "max-h-[62vh] " : ""
            } ${
              expandedState === "Comparison"
                ? " max-h-[25vh] overflow-hidden"
                : ""
            } 
            ${expandedState === "Video" ? " max-h-[39vh]" : ""}
            ${
              expandedState !== "Video" &&
              expandedState !== "Comparison" &&
              expandedState !== "Gallery"
                ? "max-h-[55vh]"
                : ""
            }
            `}
          >
            <div className="lg:w-[50%] rounded-l-[25px] my-auto rounded-r-[25px] xl:rounded-r-none ">
              <Gallery
                activestateKey={stateKey}
                GalleryImgsData={GalleryImgsData}
              />
            </div>
            <div
              className={`my-auto lg:w-[50%] lg:h-[450px] justify-center overflow-scroll  no-scrollbar px-2 lg:pr-4 ${
                expandedState === "Gallery" ? "" : ""
              } lg:pl-0 lg:py-2  bg-[#d0eeec] rounded-r-[25px] rounded-l-[25px] xl:rounded-l-none border-2 border-[#d0eeec]`}
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

        <button
          onClick={() =>
            window.scrollBy({
              top: window.innerHeight,
              behavior: "smooth",
            })
          }
          className={` flex w-full justify-center md:hidden  ${
            expandedState === "Gallery" ? "" : ""
          }`}
        >
          <DoubleRightOutlined className="text-[#13a89e] rotate-90 text-4xl" />
        </button>

        <div className=" relative col-span-1 lg:col-span-4 flex flex-col lg:h-[450px] 2xl:h-[450px]  w-full z-10 border rounded-[25px] border-[#13a89e] lg:border-none">
          <div
            className="absolute top-2 right-2 cursor-pointer z-[99] text-4xl md:hidden text-[#13a89e] "
            onClick={() => handleExpandClick("Form")}
          >
            <ClickIcon />
          </div>
          <OperationForm isExpanded={expandedState === "Form"} />
        </div>

        <div
          className={`transition-all duration-500 ease-in-out relative col-span-1 lg:col-span-5 2xl:col-span-4 lg:mt-0 border-2 rounded-[25px] border-none lg:border-none z-20 
          ${expandedState === "Form" ? "mt-0" : ""}
          ${
            expandedState === "Doctors"
              ? "z-50 -mt-96"
              : "max-h-[20vh] lg:max-h-fit overflow-hidden"
          }
          ${expandedState === "Testimonials" ? "-mt-80" : ""}
          ${
            expandedState !== "Form" &&
            expandedState !== "Doctors" &&
            expandedState !== "Testimonials"
              ? "-mt-48"
              : ""
          }`}
        >
          <div
            className="absolute top-2 right-2 cursor-pointer z-[99] text-4xl md:hidden text-[#13a89e] "
            onClick={() => handleExpandClick("Doctors")}
          >
            <ClickIcon />
          </div>
          <Doctors
            doctorDescription={doctorsData}
            isExpanded={expandedState === "Doctors"}
          />
        </div>

        <div
          className={`relative col-span-1 lg:col-span-7 lg:mt-0 2xl:col-span-8 flex flex-col w-full transition-all duration-500 ease-in-out ${
            expandedState === "Testimonials" ? "z-50 -mt-60" : "z-30"
          }
          ${expandedState === "Form" ? "-mt-16" : ""}          
          ${expandedState === "Doctors" ? "" : " "}          
          ${
            expandedState !== "Form" &&
            expandedState !== "Doctors" &&
            expandedState !== "Testimonials"
              ? "-mt-32"
              : ""
          }

          `}
        >
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 w-full">
            <div
              className={`transition-all duration-500 ease-in-out relative lg:w-[64%] flex-grow`}
              style={
                expandedState === "Testimonials" &&
                typeof window !== "undefined" &&
                window.innerWidth <= 768
                  ? {}
                  : { zIndex: "20" }
              }
            >
              <div
                className="absolute top-2 right-2 cursor-pointer z-[99] text-4xl md:hidden text-[#13a89e]"
                onClick={() => handleExpandClick("Testimonials")}
              >
                <ClickIcon />
              </div>
              <Testimonials
                stateKey={stateKey}
                testimonialsData={testimonialsData}
                isExpanded={expandedState === "Testimonials"}
              />
            </div>

            <div
              className={`transition-all duration-500 ease-in-out relative lg:w-[36%] z-40 lg:mb-0 ${
                expandedState === "Testimonials" ? "" : "-mt-40 lg:mt-0"
              }`}
            >
              <Location />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
