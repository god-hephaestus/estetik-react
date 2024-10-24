"use client";

import { Carousel } from "antd";

export default function VideoSlider({
  videoDescription,
}: {
  videoDescription: string[];
}) {
  return (
    <Carousel arrows={true} infinite={true} className="w-full mx-auto">
      {videoDescription.map((videoSrc, index) => (
        <div
          key={index}
          className="flex items-center justify-center w-full h-auto lg:h-[260px] xl:h-[355px] 2xl:h-[380px] bg-[#d0eeec] border-2 border-[#d0eeec] rounded-[25px] overflow-hidden"
        >
          <video
            src={"/video/" + videoSrc}
            className="object-cover w-full h-full"
            controls
          ></video>
        </div>
      ))}
    </Carousel>
  );
}
