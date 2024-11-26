"use client";

import { Button } from "antd";
import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { FullscreenOutlined, FormOutlined } from "@ant-design/icons";
import OperationForm from "./OperationForm"; // Import the OperationForm component

export default function VideoSlider({
  videoDescription,
}: {
  videoDescription: string[];
}) {
  const containerClassNames = `relative flex items-center justify-center w-full h-auto lg:h-[260px] xl:h-[355px] 2xl:h-[430px] 
    border-[#c0a062]/20 lg:backdrop-blur-none bg-[#e4d4c2] lg:bg-[#e4d4c2] lg:border-2 lg:border-[#e4d4c2] rounded-[25px] overflow-hidden`;

  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false); // State for form modal
  const [activeVideoSrc, setActiveVideoSrc] = useState<string | null>(null);
  // const [currentIndex, setCurrentIndex] = useState<number>(0);

  const allVideosD = videoDescription.map(
    (src) => `/video/slider/desktop/${src}`
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
  //   const nextIndex = (currentIndex + 1) % allVideosD.length;
  //   setCurrentIndex(nextIndex);
  //   setActiveVideoSrc(allVideosD[nextIndex]);
  // };

  // const handlePreviousVideo = () => {
  //   const prevIndex =
  //     (currentIndex - 1 + allVideosD.length) % allVideosD.length;
  //   setCurrentIndex(prevIndex);
  //   setActiveVideoSrc(allVideosD[prevIndex]);
  // };

  return (
    <>
      {allVideosD.map((videoSrc, index) => (
        <div key={index} className={containerClassNames}>
          <video
            ref={(el) => {
              if (el) videoRefs.current[index] = el;
            }}
            src={videoSrc}
            className="object-cover w-full h-full"
            autoPlay
            muted
            loop
            onClick={(event) =>
              event.currentTarget.paused
                ? event.currentTarget.play()
                : event.currentTarget.pause()
            }
          ></video>
          <button
            onClick={() => openModal(videoSrc)}
            className="absolute bottom-4 right-4 bg-[#c0a062] bg-opacity-60 text-white p-2 rounded-full flex items-center justify-center"
          >
            <FullscreenOutlined className="text-2xl" />
          </button>
          <Button
            className="absolute bottom-4 left-4 h-[40px] rounded-[25px] z-[99] border-[#c0a062]"
            onClick={openFormModal}
          >
            Consultation
            <span className="rounded-full flex -mr-3 justify-center items-center w-8 h-8 bg-white">
              <FormOutlined className="text-[#c0a062] transform scale-[1.2]" />
            </span>
          </Button>
        </div>
      ))}

      {showModal &&
        createPortal(
          <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-[500ms] ease-in-out ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeModal}
          >
            <div
              className={`relative bg-black rounded-lg shadow-lg w-11/12 max-w-3xl transform transition-transform duration-[500ms] ease-in-out ${
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
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#c0a062] bg-opacity-70 text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl z-50 focus:outline-none"
              >
                <LeftOutlined />
              </button>

              <button
                onClick={handleNextVideo}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#c0a062] bg-opacity-70 text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl z-50 focus:outline-none"
              >
                <RightOutlined />
              </button> */}

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
