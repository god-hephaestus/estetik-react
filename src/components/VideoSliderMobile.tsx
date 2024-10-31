"use client";

import { FormOutlined } from "@ant-design/icons";
import { Button, Carousel } from "antd";

export default function VideoSliderMobile({
  videoDescription,
  isExpanded,
}: {
  videoDescription: string[];
  isExpanded: boolean;
}) {
  const containerClassNames = `flex items-center justify-center w-full h-auto lg:h-[260px] xl:h-[355px] 2xl:h-[430px] 
  border-[#13a89e]/20  lg:backdrop-blur-none lg:bg-[#d0eeec] lg:border-2  ${
    isExpanded
      ? "backdrop-blur-none bg-[#d0eeec]"
      : "backdrop-blur bg-[#13a89e]/20"
  } lg:border-[#d0eeec] rounded-[25px] overflow-hidden `;
  return (
    <Carousel arrows={true} infinite={true} className="w-full mx-auto">
      <div key={1} className={containerClassNames}>
        <Button className="absolute bottom-2 h-[40px] rounded-[25px] z-[99] border-[#13a89e]">
          Consultation
          <span className="rounded-full flex -mr-3 justify-center items-center w-8 h-8 bg-white ">
            <FormOutlined className="text-[#13a89e] transform scale-[1.2]" />
          </span>
        </Button>
        <video
          src={"/video/hero7.mp4"}
          className="object-cover w-full h-full"
          autoPlay
          muted
        ></video>
      </div>
      {videoDescription.map((videoSrc, index) => (
        <div key={index + 1} className={containerClassNames}>
          <video
            src={"/video/" + videoSrc}
            className="object-cover w-full h-full"
          ></video>
        </div>
      ))}
    </Carousel>
  );
}
