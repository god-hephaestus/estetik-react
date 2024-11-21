"use client";

import { FormOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";
import { createPortal } from "react-dom";
import OperationForm from "./OperationForm";

export default function VideoSliderMobile({
  videoDescription,
}: {
  videoDescription: string[];
}) {
  const containerClassNames = `relative flex items-center justify-center w-full h-auto aspect-[9/16] 
    border-[#13a89e]/20 lg:backdrop-blur-none lg:bg-[#d0eeec] lg:border-2 bg-[#d0eeec] lg:border-[#d0eeec] rounded-[25px] overflow-hidden`;

  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [activeVideoSrc, setActiveVideoSrc] = useState<string | null>(null);
  // const [currentIndex, setCurrentIndex] = useState<number>(0);

  const allVideosM = videoDescription.map(
    (src) => `/video/slider/mobile/${src}`
  );

  const openModal = (videoSrc: string) => {
    setActiveVideoSrc(videoSrc);
    // setCurrentIndex(index);
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

  // const handleNextVideo = () => {
  //   const nextIndex = (currentIndex + 1) % allVideosM.length;
  //   setCurrentIndex(nextIndex);
  //   setActiveVideoSrc(allVideosM[nextIndex]);
  // };

  // const handlePreviousVideo = () => {
  //   const prevIndex =
  //     (currentIndex - 1 + allVideosM.length) % allVideosM.length;
  //   setCurrentIndex(prevIndex);
  //   setActiveVideoSrc(allVideosM[prevIndex]);
  // };

  const handleVideoClick = (index: number) => {
    openModal(allVideosM[index]);
  };

  return (
    <>
      {allVideosM.map((videoSrc, index) => (
        <div
          key={index}
          className={containerClassNames}
          onClick={() => handleVideoClick(index)}
        >
          <Button
            className="absolute bottom-2 h-[60px] rounded-[30px] z-[99] border-[#13a89e]"
            onClick={openFormModal}
          >
            <p className="text-2xl">Randevu Al</p>
            <span className="rounded-full flex -mr-3 justify-center items-center w-12 h-12 bg-white">
              <FormOutlined className="text-[#13a89e] transform scale-[1.6] " />
            </span>
          </Button>
          <video
            src={videoSrc}
            className="object-cover w-full h-full pointer-events-none aspect-[9/16]"
            autoPlay
            muted
            loop
          ></video>
        </div>
      ))}

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

              {/* <button
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
              </button> */}

              <div className="relative rounded-lg aspect-[9/16] w-full h-auto">
                <video
                  src={activeVideoSrc ?? ""}
                  className="w-full h-full object-cover"
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
              className="relative rounded-[25px] shadow-lg w-11/12 max-w-lg transform transition-transform duration-[300ms] scale-100"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeFormModal}
                className="absolute top-2 right-2 text-black text-2xl font-bold focus:outline-none"
              >
                &times;
              </button>
              <OperationForm />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
