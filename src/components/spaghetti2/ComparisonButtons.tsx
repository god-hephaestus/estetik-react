import React, { useRef } from "react";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export default function ComparisonButtons({
  buttonProps,
  comparisonData,
  onButtonClick,
}: {
  buttonProps: Array<{
    label: string;
    image1: string;
    image2: string;
    faqs: Array<{ question: string; answer: string }>;
    stateKey: string;
  }>;
  comparisonData: {
    label: string;
    image1: string;
    image2: string;
    faqs: Array<{ question: string; answer: string }>;
    stateKey: string;
  };
  onButtonClick: (newComparisonData: {
    label: string;
    image1: string;
    image2: string;
    faqs: Array<{ question: string; answer: string }>;
    stateKey: string;
  }) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

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
    const nextIndex =
      (buttonProps.findIndex((b) => b.label === comparisonData.label) + 1) %
      buttonProps.length;
    onButtonClick(buttonProps[nextIndex]);
    scrollToActiveButton(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex =
      (buttonProps.findIndex((b) => b.label === comparisonData.label) -
        1 +
        buttonProps.length) %
      buttonProps.length;
    onButtonClick(buttonProps[prevIndex]);
    scrollToActiveButton(prevIndex);
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <div ref={scrollRef} className=" flex items-center justify-center h-full">
        <div className="flex justify-center items-center w-screen lg:w-full  rounded-xl overflow-hidden">
          {buttonProps.map((button, index) => (
            <Button
              key={index}
              data-index={index}
              className={`${
                comparisonData.label === button.label ? "active" : ""
              } lg:mx-[10px] mx-2 py-2 px-8 lg:px-18`}
              onClick={() => {
                onButtonClick(button);
                scrollToActiveButton(index);
              }}
              style={{
                borderRadius: "50px",
                height: "100%",
                transform:
                  comparisonData.label === button.label
                    ? "scale(1)"
                    : "scale(0.9)",
                transition: "transform 0.3s ease",
                zIndex: 10,
              }}
            >
              {button.label}
            </Button>
          ))}
        </div>
      </div>

      <Button
        onClick={handlePrevious}
        className="absolute left-[30%] z-20"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          borderRadius: "50px",
          backgroundColor: "white",
          padding: "10px",
        }}
      >
        <LeftOutlined style={{ color: "#13a89e" }} />
      </Button>

      <Button
        onClick={handleNext}
        className="absolute right-[30%] z-20"
        style={{
          top: "50%", // Center the navigation buttons vertically
          transform: "translateY(-50%)", // Ensure proper centering
          borderRadius: "50px",
          backgroundColor: "white",
          padding: "10px",
        }}
      >
        <RightOutlined style={{ color: "#13a89e" }} />
      </Button>
    </div>
  );
}
