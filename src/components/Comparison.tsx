"use client";

import React, { useState, useRef, useEffect } from "react";
import ReactCompareImage from "react-compare-image";
import { Button, Spin } from "antd";

export default function Comparison({
  buttonProps,
}: {
  buttonProps: Array<{
    label: string;
    image1: string;
    image2: string;
    faqs: Array<{ question: string; answer: string }>;
  }>;
}) {
  const [comparisonImage, setComparisonImage] = useState<string[]>([
    buttonProps[0]?.image1 || "",
    buttonProps[0]?.image2 || "",
  ]);
  const [faqText, setFaqText] = useState<
    Array<{ question: string; answer: string }>
  >(buttonProps[0]?.faqs || []);
  const [activeIndex, setActiveIndex] = useState(0); // Track the active button index
  const [isImageLoaded, setIsImageLoaded] = useState(false); // Track if the new image is loaded
  const [forceSpinVisible, setForceSpinVisible] = useState(true); // Keep spin visible until both images are fully loaded

  const scrollRef = useRef<HTMLDivElement>(null);

  // Function to introduce a small delay for image loading
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  // Preload images and force a delay to show skeleton loader
  const handleImageChange = async (image1: string, image2: string) => {
    setIsImageLoaded(false); // Show skeleton while loading new images
    setForceSpinVisible(true); // Keep the spin visible while images are loading

    const img1 = new Image();
    const img2 = new Image();

    // Once both images are loaded, update state and hide the skeleton loader
    img1.onload = () => {
      img2.onload = async () => {
        setComparisonImage([image1, image2]);

        await delay(100); // Ensure images are in place before hiding spin
        setIsImageLoaded(true);
        setForceSpinVisible(false); // Hide the spin only after images are rendered
      };
      img2.src = image2;
    };
    img1.src = image1;
  };

  const handleFaqChange = (
    newFaqs: Array<{ question: string; answer: string }>
  ) => {
    setFaqText(newFaqs);
  };

  const scrollToActiveButton = (index: number) => {
    const container = scrollRef.current;
    const buttons = container?.querySelectorAll("button");
    if (container && buttons) {
      const button = buttons[index];
      const containerCenter =
        container.getBoundingClientRect().left + container.offsetWidth / 2;
      const buttonCenter =
        button.getBoundingClientRect().left + button.offsetWidth / 2;
      const offset = buttonCenter - containerCenter;

      container.scrollBy({
        left: offset,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % buttonProps.length;
    setActiveIndex(nextIndex);
    scrollToActiveButton(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex =
      (activeIndex - 1 + buttonProps.length) % buttonProps.length;
    setActiveIndex(prevIndex);
    scrollToActiveButton(prevIndex);
  };

  useEffect(() => {
    if (buttonProps[activeIndex]) {
      handleImageChange(
        buttonProps[activeIndex].image1,
        buttonProps[activeIndex].image2
      );
      handleFaqChange(buttonProps[activeIndex].faqs);
    }
  }, [activeIndex, buttonProps]);

  return (
    <div className="container">
      <div className="flex items-center justify-between"
        >
        {/* Left Arrow */}
        <Button onClick={handlePrevious}>{"<"}</Button>

        {/* Scrollable Buttons */}
        <div
          ref={scrollRef}
          className="scroll-container flex px-[10px] relative overflow-hidden whitespace-nowrap w-[400px]"
          >
          {buttonProps.map((button, index) => (
            <Button
              key={index}
              data-index={index}
              className={(activeIndex === index ? "active" : "") + `mx-[10px] min-w-[150px] transform transition-transform ${activeIndex === index ? "mx-4 scale-125 shadow-lg bg-[#1890ff] text-white" : "scale-100"} ease-in-out shadow p-[10px]`}
              onClick={() => {
                setActiveIndex(index);
                scrollToActiveButton(index);
              }}>
              {button.label}
            </Button>
          ))}
        </div>

        {/* Right Arrow */}
        <Button onClick={handleNext}>{">"}</Button>
      </div>

      <div
        className="w-[800px] h-[500px] relative bg-[#f0f0f0] min-h-[500px]"
        >
        {/* Show loader overlay while images are loading */}
        {forceSpinVisible && (
          <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center bg-[#f0f0f0cc] z-[1]"
            >
            <Spin size="large" /> {/* Ant Design spinner as a loader */}
          </div>
        )}

        {/* Always render the ReactCompareImage component */}
        <div style={{ visibility: isImageLoaded ? "visible" : "hidden" }}>
          <ReactCompareImage
            leftImage={comparisonImage[0]}
            rightImage={comparisonImage[1]}
            sliderLineColor="#ffffff"
            handleSize={30}
          />
        </div>

        {/* FAQs Section */}
        <div>
          {faqText.map((faq, index) => (
            <div key={index}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
