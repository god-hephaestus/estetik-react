"use client";

import React, { useState, useRef, useEffect } from "react";
import ReactCompareImage from "react-compare-image";
import { Button } from "antd";

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
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleImageChange = (image1: string, image2: string) => {
    setComparisonImage([image1, image2]);
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
    // Automatically trigger the active button's action
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

      <div style={{ width: "800px", height: "500px" }}>
        <ReactCompareImage
          leftImage={comparisonImage[0]}
          rightImage={comparisonImage[1]}
          sliderLineColor="#ffffff"
          handleSize={30}
        />
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
