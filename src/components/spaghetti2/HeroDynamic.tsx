"use client";

import { Carousel } from "antd";

interface VideoProps {
  videoDescription: string[]; // Correctly typed as string[]
}

export default function HeroDynamic({ videoDescription }: VideoProps) {
  return (
    <Carousel arrows={true} infinite={true} autoplay className=" h-[350px] ">
      {videoDescription.map((videoSrc, index) => (
        <div
          key={index}
          className="flex items-center justify-center w-full h-full bg-[#d0eeec] border-2 border-[#d0eeec] rounded-[25px]"
        >
          {videoSrc ? (
            <video
              src={"/video/" + videoSrc}
              className="object-contain w-[80%] h-[80%]" 
              controls
            ></video>
          ) : (
            <div className="w-[80%] h-[80%] flex items-center justify-center">
              <p>No video available</p>
            </div>
          )}
        </div>
      ))}
    </Carousel>
  );
  
}
