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

    if (scrollRef.current) {
      scrollToButton(nextIndex);
    }
  };

  const handlePrevious = () => {
    const currentIndex = buttonProps.findIndex(
      (b) => b.label === comparisonData.label
    );
    const prevIndex =
      (currentIndex - 1 + buttonProps.length) % buttonProps.length;
    onButtonClick(buttonProps[prevIndex]);

    if (scrollRef.current) {
      scrollToButton(prevIndex);
    }
  };

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

  const handleButtonClick = (button: ButtonProps, index: number) => {
    onButtonClick(button);
    scrollToButton(index);
  };

  useEffect(() => {
    const container = scrollRef.current;

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

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div className="relative flex items-center w-full justify-center lg:px-0 h-full max-w-[365px] sm:max-w-[410px] border border-transparent rounded-[25px]">
      <Button
        onClick={handlePrevious}
        className="absolute left-1 lg:left-3 z-20 border-transparent bg-[#ffffff]/70 border-2"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          borderRadius: "50px",
          padding: "8px",
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
        }}
      >
        <RightOutlined style={{ color: "black" }} />
      </Button>
    </div>
  );
}