"use client";

import { Carousel } from "antd";
import { SoundFilled, MutedFilled } from "@ant-design/icons";
import { useState, useRef } from "react";

export default function VideoSlider({
  videoDescription,
}: {
  videoDescription: string[];
}) {
  const containerClassNames = `relative flex items-center justify-center w-full h-auto lg:h-[260px] xl:h-[355px] 2xl:h-[430px] 
    border-[#13a89e]/20 lg:backdrop-blur-none bg-[#d0eeec] lg:bg-[#d0eeec] lg:border-2 lg:border-[#d0eeec] rounded-[25px] overflow-hidden`;

  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  // Toggle play/pause on video click
  const handleVideoClick = (event: React.MouseEvent<HTMLVideoElement>) => {
    const video = event.currentTarget;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  // Toggle mute/unmute for all videos
  const handleMuteToggle = () => {
    setIsMuted((prev) => !prev);
    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.muted = !isMuted;
        console.log(`Video ${index} muted status:`, video.muted);
      }
    });
  };

  return (
    <Carousel arrows={true} infinite={true} className="w-full mx-auto">
      <div key={1} className={containerClassNames}>
        <video
          ref={(el) => {
            if (el) videoRefs.current[0] = el;
          }}
          src={"/video/hero7.mp4"}
          className="object-cover w-full h-full"
          autoPlay
          muted={isMuted}
          loop
          onClick={handleVideoClick}
        ></video>
        <button
          onClick={handleMuteToggle}
          className="absolute bottom-4 right-4 bg-black bg-opacity-70 p-2 rounded-full"
          style={{ width: "40px", height: "40px" }}
        >
          {isMuted ? (
            <MutedFilled style={{ fontSize: "24px", color: "white" }} />
          ) : (
            <SoundFilled style={{ fontSize: "24px", color: "white" }} />
          )}
        </button>
      </div>
      {videoDescription.map((videoSrc, index) => (
        <div key={index + 1} className={containerClassNames}>
          <video
            ref={(el) => {
              if (el) videoRefs.current[index + 1] = el;
            }}
            src={"/video/" + videoSrc}
            className="object-cover w-full h-full"
            autoPlay
            muted={isMuted}
            loop
            onClick={handleVideoClick}
          ></video>
          <button
            onClick={handleMuteToggle}
            className="absolute bottom-4 right-4 bg-black bg-opacity-70 p-2 rounded-full"
            style={{ width: "40px", height: "40px" }}
          >
            {isMuted ? (
              <MutedFilled style={{ fontSize: "24px", color: "white" }} />
            ) : (
              <SoundFilled style={{ fontSize: "24px", color: "white" }} />
            )}
          </button>
        </div>
      ))}
    </Carousel>
  );
}
