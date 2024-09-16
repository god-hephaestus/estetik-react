"use client";

import React, { useState, useRef, useEffect } from "react";
import ReactCompareImage from "react-compare-image";
import { Button, Spin, Divider } from "antd";
import { RightOutlined, LeftOutlined, MinusOutlined } from "@ant-design/icons";

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

  const scrollRef = useRef<HTMLDivElement>(null);

  // Preload images and show the spinner while loading
  const handleImageChange = (image1: string, image2: string) => {
    setIsImageLoaded(false); // Show spinner while loading new images

    const img1 = new Image();
    const img2 = new Image();

    // Once both images are loaded, update state and hide the spinner
    img1.onload = () => {
      img2.onload = () => {
        setComparisonImage([image1, image2]);
        setIsImageLoaded(true); // Hide the spinner after images load
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
          justifyContent: "center",
        }}>
        <Button onClick={handlePrevious}>
          <LeftOutlined />
        </Button>

        <div
          ref={scrollRef}
          className="scroll-container"
          style={{
            display: "flex",
            overflowX: "hidden",
            whiteSpace: "nowrap",
            padding: "10px 10px",
            position: "relative",
            marginRight: "10px",
            marginLeft: "10px",
            width: "400px",
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
                backgroundColor: activeIndex === index ? "#13a89e" : "",
              }}>
              {button.label}
            </Button>
          ))}
        </div>

        <Button onClick={handleNext}>
          <RightOutlined />
        </Button>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <div
          className="relative w-full"
          style={{
            width: "100%",
            maxWidth: "800px",
            aspectRatio: "16/9",
            backgroundColor: "#f0f0f0",
            overflow: "hidden",
          }}>
          {!isImageLoaded && (
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
                background: "rgba(240, 240, 240, 0.8)",
                zIndex: 1,
              }}>
              <Spin size="large" />
            </div>
          )}

          {isImageLoaded && (
            <div className="w-full h-full">
              <ReactCompareImage
                leftImage={comparisonImage[0]}
                rightImage={comparisonImage[1]}
                sliderLineColor="#ffffff"
                handleSize={30}
              />
            </div>
          )}
        </div>
      </div>

      <Divider>Frequently Asked Questions</Divider>

      <div className="px-5">
        {faqText.map((faq, index) => (
          <div key={index}>
            <h3 className="text-black font-bold py-1">
              <MinusOutlined /> {faq.question}
            </h3>
            <p className="text-black">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
