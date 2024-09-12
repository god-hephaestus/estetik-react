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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        {/* Left Arrow */}
        <Button onClick={handlePrevious}>{"<"}</Button>

        {/* Scrollable Buttons */}
        <div
          ref={scrollRef}
          className="scroll-container"
          style={{
            display: "flex",
            overflowX: "hidden",
            whiteSpace: "nowrap",
            padding: "10px 0",
            position: "relative",
            width: "400px", // Adjust the width to your preference
          }}>
          {buttonProps.map((button, index) => (
            <Button
              key={index}
              data-index={index}
              className={activeIndex === index ? "active" : ""}
              onClick={() => {
                setActiveIndex(index);
                scrollToActiveButton(index);
              }}
              style={{
                margin: "0 10px",
                minWidth: "150px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                padding: "10px",
                transform: activeIndex === index ? "scale(1.2)" : "scale(1)",
                boxShadow:
                  activeIndex === index
                    ? "0px 4px 12px rgba(0, 0, 0, 0.3)"
                    : "none",
                backgroundColor: activeIndex === index ? "#1890ff" : "",
                color: activeIndex === index ? "#fff" : "",
              }}>
              {button.label}
            </Button>
          ))}
        </div>

        {/* Right Arrow */}
        <Button onClick={handleNext}>{">"}</Button>
      </div>

      <div
        style={{
          width: "800px",
          height: "500px",
          position: "relative",
          background: "#f0f0f0", // This ensures the container always has a background
          minHeight: "500px", // Prevents container collapse
        }}>
        {/* Show loader overlay while images are loading */}
        {forceSpinVisible && (
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(240, 240, 240, 0.8)", // Slightly transparent overlay
              zIndex: 1,
            }}>
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
