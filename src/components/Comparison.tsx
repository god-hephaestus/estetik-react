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

  useEffect(() => {
    const container = scrollRef.current;

    const handleScroll = () => {
      if (container) {
        const buttons = Array.from(container.querySelectorAll("button"));
        const containerCenter =
          container.getBoundingClientRect().left + container.offsetWidth / 2;

        let closestIndex = 0;
        let closestDistance = Infinity;

        buttons.forEach((button, index) => {
          const buttonCenter =
            button.getBoundingClientRect().left + button.offsetWidth / 2;
          const distance = Math.abs(buttonCenter - containerCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });

        setActiveIndex(closestIndex); // Set the closest button to active
      }
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);

      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

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
        ref={scrollRef}
        className="scroll-container"
        style={{
          display: "flex",
          overflowX: "auto",
          whiteSpace: "nowrap",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          padding: "10px 0",
          position: "relative",
        }}>
        <div style={{ width: 400 }}>
          <div
            className="center-indicator"
            style={{
              position: "fixed",
              top: "10px", // Add some padding so the centerline stays within the scrollable area
              bottom: "10px", // Make sure the centerline only spans the height of the scroll area
              left: "50%",
              width: "2px",
              backgroundColor: "#1890ff",
              transform: "translateX(-50%)",
              zIndex: 1,
            }}></div>
          {buttonProps.map((button, index) => (
            <Button
              key={index}
              data-index={index}
              className={activeIndex === index ? "active" : ""}
              onClick={() => {
                handleImageChange(button.image1, button.image2);
                handleFaqChange(button.faqs);
              }}
              style={{
                scrollSnapAlign: "center",
                margin: "0 10px",
                minWidth: "150px", // Adjust button size
                transition: "transform 0.3s ease, box-shadow 0.3s ease", // Add smooth transition for animations
                padding: "10px",
                transform: activeIndex === index ? "scale(1.2)" : "scale(1)", // Scale up the active button
                boxShadow:
                  activeIndex === index
                    ? "0px 4px 12px rgba(0, 0, 0, 0.3)"
                    : "none", // Add shadow to active button
                backgroundColor: activeIndex === index ? "#1890ff" : "", // Change the background color of the active button
                color: activeIndex === index ? "#fff" : "", // Ensure text color matches background
              }}>
              {button.label}
            </Button>
          ))}
        </div>
      </div>
      <div style={{ width: "800px", height: "500px" }}>
        <ReactCompareImage
          leftImage={comparisonImage[0]} // Dynamically set left image from state
          rightImage={comparisonImage[1]} // Dynamically set right image from state
          sliderLineColor="#ffffff" // Customize the slider color
          handleSize={30} // Customize the handle size
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
