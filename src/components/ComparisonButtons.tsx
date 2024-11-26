import React, { useRef, useEffect } from "react";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

interface ButtonProps {
  label: string;
  image1: string;
  image2: string;
  faqs: Array<{ question: string; answer: string }>;
  stateKey: string;
}

interface ComparisonData {
  label: string;
  image1: string;
  image2: string;
  faqs: Array<{ question: string; answer: string }>;
  stateKey: string;
}

interface ComparisonButtonsProps {
  buttonProps: ButtonProps[];
  comparisonData: ComparisonData;
  onButtonClick: (newComparisonData: ComparisonData) => void;
}

export default function ComparisonButtons({
  buttonProps,
  comparisonData,
  onButtonClick,
}: ComparisonButtonsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToButton = (index: number) => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      const buttonElement = scrollRef.current.children[
        index
      ] as HTMLButtonElement;

      if (buttonElement) {
        const buttonWidth = buttonElement.offsetWidth;
        const buttonLeftOffset = buttonElement.offsetLeft;

        // Center the button within the visible container
        const scrollPosition =
          buttonLeftOffset - containerWidth / 2 + buttonWidth / 2;

        scrollRef.current.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    const activeIndex = buttonProps.findIndex(
      (b) => b.label === comparisonData.label
    );
    if (activeIndex >= 0) {
      scrollToButton(activeIndex);
    }
  }, [comparisonData, buttonProps]);

  const handleNext = () => {
    const currentIndex = buttonProps.findIndex(
      (b) => b.label === comparisonData.label
    );
    const nextIndex = (currentIndex + 1) % buttonProps.length;
    onButtonClick(buttonProps[nextIndex]);
  };

  const handlePrevious = () => {
    const currentIndex = buttonProps.findIndex(
      (b) => b.label === comparisonData.label
    );
    const prevIndex =
      (currentIndex - 1 + buttonProps.length) % buttonProps.length;
    onButtonClick(buttonProps[prevIndex]);
  };

  const handleButtonClick = (button: ButtonProps, index: number) => {
    onButtonClick(button);
    scrollToButton(index);
  };

  return (
    <div className="relative flex items-center w-full justify-center lg:px-0 h-full max-w-[365px] sm:max-w-[410px] border border-transparent rounded-[25px]">
      <style>
        {`
          @keyframes ripple-effect {
             0% {
              box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.6);
            }
            100% {
              box-shadow: 0 0 25px 15px rgba(255, 255, 255, 0);
            }
          }
        `}
      </style>

      <Button
        onClick={handlePrevious}
        className="absolute left-1 lg:left-3 z-20 border-transparent bg-[#ffffff]/70 border-2"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          borderRadius: "50px",
          padding: "8px",
          animation: "ripple-effect 3s infinite",
          willChange: "box-shadow",
        }}
      >
        <LeftOutlined style={{ color: "black" }} />
      </Button>

      <div
        ref={scrollRef}
        className="scroll-container py-1 no-scrollbar max-w-max md:max-w-[400px] z-10 rounded-[25px] bg-[#dcfffb]"
        style={{
          display: "flex",
          overflowX: "auto",
          overflowY: "hidden",
          whiteSpace: "nowrap",
          scrollBehavior: "smooth",
          position: "relative",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
          touchAction: "pan-x",
        }}
      >
        {buttonProps.map((button, index) => (
          <Button
            key={index}
            data-index={index}
            className={`${
              comparisonData.label === button.label ? "active" : ""
            } rounded-[25px]`}
            onClick={() => handleButtonClick(button, index)}
            style={{
              margin: "3px 10px",
              minWidth: "175px",
              padding: "18px",
              boxShadow:
                comparisonData.label === button.label
                  ? "0px 4px 12px rgba(19, 168, 158, 0.6)"
                  : "none",
              borderColor:
                comparisonData.label === button.label ? "#13a89e" : "",
              color: comparisonData.label === button.label ? "black" : "white",
              backgroundColor:
                comparisonData.label === button.label ? "white" : "#13a89e",
            }}
          >
            {button.label}
          </Button>
        ))}
      </div>

      <Button
        onClick={handleNext}
        className="absolute right-1 lg:right-3 z-20 border-transparent bg-[#ffffff]/70 border-2"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          borderRadius: "50px",
          backgroundColor: "white",
          padding: "8px",
          animation: "ripple-effect 3s infinite",
          willChange: "box-shadow",
        }}
      >
        <RightOutlined style={{ color: "black" }} />
      </Button>
    </div>
  );
}
