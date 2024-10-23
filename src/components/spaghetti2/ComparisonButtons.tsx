import React, { useRef, useEffect } from "react";
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

  useEffect(() => {
    const initialIndex = buttonProps.findIndex(
      (b) => b.label === comparisonData.label
    );
    scrollToActiveButton(initialIndex);
  }, [buttonProps, comparisonData.label]);

  return (
    <div className="relative flex items-center justify-center h-full w-full">
      <div
        ref={scrollRef}
        className="scroll-container py-3 px-20 "
        style={{
          display: "flex",
          overflowX: "hidden",
          whiteSpace: "nowrap",
          position: "relative",
          marginRight: "10px",
          marginLeft: "10px",
          width: "180px",
        }}
      >
        {buttonProps.map((button, index) => (
          <Button
            key={index}
            data-index={index}
            className={comparisonData.label === button.label ? "active" : ""}
            onClick={() => {
              onButtonClick(button); // Update state when button is clicked
              scrollToActiveButton(index);
            }}
            style={{
              margin: "0 10px",
              minWidth: "150px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              padding: "10px",
              transform:
                comparisonData.label === button.label
                  ? "scale(1.2)"
                  : "scale(1)",
              boxShadow:
                comparisonData.label === button.label
                  ? "0px 4px 12px rgba(0, 0, 0, 0.3)"
                  : "none",
              backgroundColor:
                comparisonData.label === button.label ? "#13a89e" : "",
            }}
          >
            {button.label}
          </Button>
        ))}
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
          top: "50%",
          transform: "translateY(-50%)",
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
