"use client";

import { Carousel } from "antd";
import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import {
  FullscreenOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

export default function VideoSlider({
  videoDescription,
}: {
  videoDescription: string[];
}) {
  const containerClassNames = `relative flex items-center justify-center w-full h-auto lg:h-[260px] xl:h-[355px] 2xl:h-[430px] 
    border-[#13a89e]/20 lg:backdrop-blur-none bg-[#d0eeec] lg:bg-[#d0eeec] lg:border-2 lg:border-[#d0eeec] rounded-[25px] overflow-hidden`;

  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
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

  return (
    <>
      <Carousel arrows={true} infinite={true} className="w-full mx-auto">
        <div key={0} className={containerClassNames}>
          <video
            ref={(el) => {
              if (el) videoRefs.current[0] = el;
            }}
            src={allVideos[0]}
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
            onClick={() => openModal(allVideos[0], 0)}
            className="absolute bottom-4 left-4 bg-[#13a89e] bg-opacity-60 text-white p-2 rounded-full flex items-center justify-center"
          >
            <FullscreenOutlined className="text-xl" />
          </button>
        </div>
        {videoDescription.map((videoSrc, index) => (
          <div key={index + 1} className={containerClassNames}>
            <video
              ref={(el) => {
                if (el) videoRefs.current[index + 1] = el;
              }}
              src={allVideos[index + 1]}
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
              onClick={() => openModal(allVideos[index + 1], index + 1)}
              className="absolute bottom-4 left-4 bg-[#13a89e] bg-opacity-60 text-white p-2 rounded-full flex items-center justify-center"
            >
              <FullscreenOutlined className="text-xl" />
            </button>
          </div>
        ))}
      </Carousel>

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
    </>
  );
}
