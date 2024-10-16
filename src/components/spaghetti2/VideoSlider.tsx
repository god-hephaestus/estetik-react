"use client";

import { Carousel } from "antd";

export default function VideoSlider({
  videoDescription,
}: {
  videoDescription: string[];
}) {
  return (
    <Carousel arrows={true} infinite={true} className="ml-[20px] ">
      {videoDescription.map((videoSrc, index) => (
        <div
          key={index}
          className="flex items-center justify-center w-full md:h-[285px] lg:h-[340px] xl:h-[400px] 2xl:h-[450px] pb-5 bg-[#d0eeec] border-2 border-[#d0eeec] rounded-[25px]"
        >
          {videoSrc ? (
            <video
              src={"/video/" + videoSrc}
              className="object-contain w-auto h-[95%]"
              controls
            ></video>
          ) : (
            <div className="w-[90%] h-[90%] flex items-center justify-center">
              <p>No video available</p>
            </div>
          )}
        </div>
      ))}
    </Carousel>
  );
}
