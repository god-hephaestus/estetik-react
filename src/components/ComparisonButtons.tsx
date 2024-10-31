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

  const handleScroll = (scrollAmount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    const currentIndex = buttonProps.findIndex(
      (b) => b.label === comparisonData.label
    );
    const nextIndex = (currentIndex + 1) % buttonProps.length;
    onButtonClick(buttonProps[nextIndex]);

    if (scrollRef.current) {
      const buttonWidth =
        scrollRef.current?.firstElementChild?.clientWidth || 0;
      handleScroll(buttonWidth);
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
      const buttonWidth =
        scrollRef.current?.firstElementChild?.clientWidth || 0;
      handleScroll(-buttonWidth);
    }
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
            onClick={() => onButtonClick(button)}
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
