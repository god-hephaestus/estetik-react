"use client";

import { FormOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Carousel } from "antd";
import { useState } from "react";
import { createPortal } from "react-dom";
import OperationForm from "./OperationForm";

export default function VideoSliderMobile({
  videoDescription,
  isExpanded,
}: {
  videoDescription: string[];
  isExpanded: boolean;
}) {
  const containerClassNames = `relative flex items-center justify-center w-full h-auto lg:h-[260px] xl:h-[355px] 2xl:h-[430px] 
    border-[#13a89e]/20 lg:backdrop-blur-none lg:bg-[#d0eeec] lg:border-2 ${
      isExpanded
        ? "backdrop-blur-none bg-[#d0eeec]"
        : "backdrop-blur bg-[#13a89e]/20"
    } lg:border-[#d0eeec] rounded-[25px] overflow-hidden`;

  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [activeVideoSrc, setActiveVideoSrc] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const allVideos = [
    "/video/hero7.mp4",
    ...videoDescription.map((src) => `/video/${src}`),
  ];

  const openModal = (videoSrc: string, index: number) => {
    setActiveVideoSrc(videoSrc);
    setCurrentIndex(index);
    setShowModal(true);
    setTimeout(() => setIsOpen(true), 50);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setShowModal(false), 300);
    setTimeout(() => setActiveVideoSrc(null), 300);
  };

  const openFormModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowFormModal(true);
  };

  const closeFormModal = () => {
    setShowFormModal(false);
  };

  const handleNextVideo = () => {
    const nextIndex = (currentIndex + 1) % allVideos.length;
    setCurrentIndex(nextIndex);
    setActiveVideoSrc(allVideos[nextIndex]);
  };

  const handlePreviousVideo = () => {
    const prevIndex = (currentIndex - 1 + allVideos.length) % allVideos.length;
    setCurrentIndex(prevIndex);
    setActiveVideoSrc(allVideos[prevIndex]);
  };

  const handleVideoClick = (index: number) => {
    openModal(allVideos[index], index);
  };

  return (
    <>
      <Carousel arrows={true} infinite={true} className="w-full mx-auto">
        <div
          key={0}
          className={containerClassNames}
          onClick={() => handleVideoClick(0)}
        >
          <Button
            className="absolute bottom-2 h-[40px] rounded-[25px] z-[99] border-[#13a89e]"
            onClick={openFormModal}
          >
            Consultation
            <span className="rounded-full flex -mr-3 justify-center items-center w-8 h-8 bg-white">
              <FormOutlined className="text-[#13a89e] transform scale-[1.2]" />
            </span>
          </Button>
          <video
            src={allVideos[0]}
            className="object-cover w-full h-full pointer-events-none"
            autoPlay
            muted
            loop
          ></video>
        </div>
        {videoDescription.map((videoSrc, index) => (
          <div
            key={index + 1}
            className={containerClassNames}
            onClick={() => handleVideoClick(index + 1)}
          >
            <video
              src={allVideos[index + 1]}
              className="object-cover w-full h-full pointer-events-none"
              autoPlay
              muted
              loop
            ></video>
          </div>
        ))}
      </Carousel>

      {showModal &&
        createPortal(
          <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-[300ms] ease-in-out ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeModal}
          >
            <div
              className={`relative bg-black rounded-lg shadow-lg w-11/12 max-w-3xl transform transition-transform duration-[300ms] ease-in-out ${
                isOpen ? "scale-100" : "scale-75"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white text-2xl font-bold focus:outline-none"
              >
                &times;
              </button>

              <button
                onClick={handlePreviousVideo}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#13a89e] bg-opacity-70 text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl z-50 focus:outline-none"
              >
                <LeftOutlined />
              </button>

              <button
                onClick={handleNextVideo}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#13a89e] bg-opacity-70 text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl z-50 focus:outline-none"
              >
                <RightOutlined />
              </button>

              <div className="relative overflow-hidden pt-[56.25%] rounded-lg">
                <video
                  src={activeVideoSrc ?? ""}
                  className="absolute top-0 left-0 w-full h-full"
                  controls
                  autoPlay
                ></video>
              </div>
            </div>
          </div>,
          document.body
        )}

      {showFormModal &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-[300ms] ease-in-out"
            onClick={closeFormModal}
          >
            <div
              className="relative  rounded-[25px]  shadow-lg w-11/12 max-w-lg transform transition-transform duration-[300ms] scale-100"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeFormModal}
                className="absolute top-2 right-2 text-black text-2xl font-bold focus:outline-none"
              >
                &times;
              </button>
              <OperationForm isExpanded />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
