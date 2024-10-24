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

  useEffect(() => {
    const container = scrollRef.current;

    // Handle mouse wheel events for desktop
    const handleWheel = (e: WheelEvent) => {
      if (container) {
        const canScrollMore =
          container.scrollLeft > 0 ||
          container.scrollLeft + container.clientWidth < container.scrollWidth;

        if (canScrollMore) {
          e.preventDefault();
          container.scrollBy({
            left: e.deltaY,
          });
        }
      }
    };

    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center h-full max-w-[350px] sm:max-w-[410px]  border border-[#13a89e] rounded-[25px]">
      <Button
        onClick={handlePrevious}
        className="absolute left-0 z-20"
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

      <div
        ref={scrollRef}
        className="scroll-container py-1 no-scrollbar max-w-[350px] sm:max-w-[400px] z-10 rounded-[25px] bg-[#dcfffb] "
        style={{
          display: "flex",
          overflowX: "auto",
          overflowY: "hidden", // Hide vertical overflow
          whiteSpace: "nowrap",
          scrollBehavior: "smooth",
          position: "relative",
          scrollbarWidth: "none", // Hide scrollbar on Firefox
          msOverflowStyle: "none", // Hide scrollbar on IE/Edge
          WebkitOverflowScrolling: "touch", // Enable momentum scrolling on iOS
          touchAction: "pan-x", // Enable native touch panning in the x direction
        }}
      >
        {buttonProps.map((button, index) => (
          <Button
            key={index}
            data-index={index}
            className={`${
              comparisonData.label === button.label ? "active" : ""
            } rounded-[25px]`}
            onClick={() => onButtonClick(button)}
            style={{
              margin: "0 10px",
              minWidth: "150px",
              padding: "10px",
              boxShadow:
                comparisonData.label === button.label
                  ? "0px 4px 12px rgba(0, 0, 0, 0.6)"
                  : "none",
              color: comparisonData.label === button.label ? "black" : "white",
              backgroundColor:
                comparisonData.label === button.label ? "white" : "",
              border: "none",
            }}
          >
            {button.label}
          </Button>
        ))}
      </div>

      <Button
        onClick={handleNext}
        className="absolute right-0 z-20"
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
