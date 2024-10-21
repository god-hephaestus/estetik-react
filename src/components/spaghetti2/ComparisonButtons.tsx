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
    <div className="relative flex items-center justify-center">
      <div
        ref={scrollRef}
        className="scroll-container relative flex overflow-hidden"
        style={{
          whiteSpace: "nowrap",
          margin: "25px 10px 0 10px",
          height: "50px",
          width: "500px",
          position: "relative",
        }}
      >
        <div className="flex justify-center items-center w-full bg-[#dcfffb] rounded-xl overflow-hidden">
          {buttonProps.map((button, index) => (
            <Button
              key={index}
              data-index={index}
              className={`${
                comparisonData.label === button.label ? "active" : ""
              }`}
              onClick={() => {
                onButtonClick(button);
                scrollToActiveButton(index);
              }}
              style={{
                borderRadius: "50px",
                height: "40px",
                margin: "0 10px",
                minWidth: "200px",
                transition: "transform 0.3s ease",
                padding: "10px",
                transform:
                  comparisonData.label === button.label
                    ? "scale(1)"
                    : "scale(0.9)",
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
        className="absolute left-[5%] z-20"
        style={{
          top: "32.5px",
          borderRadius: "50px",
          backgroundColor: "white",
          padding: "10px",
        }}
      >
        <LeftOutlined style={{ color: "#13a89e" }} />
      </Button>

      <Button
        onClick={handleNext}
        className="absolute right-[5%] z-20"
        style={{
          top: "32.5px",
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
