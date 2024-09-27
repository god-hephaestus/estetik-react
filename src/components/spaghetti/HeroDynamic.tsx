// HeroDynamic.tsx
"use client";

import { ArrowDownOutlined } from "@ant-design/icons";

export default function HeroDynamic({ heroBg }: { heroBg: string }) {
  return (
    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen h-screen">
      <video
        className="w-full h-full object-cover"
        src={`/video/${heroBg}`}
        autoPlay
        muted
        loop></video>
      <a
        className="absolute left-1/2 transform -translate-x-1/2 bottom-4 md:bottom-16 z-50"
        href="#compare">
        <ArrowDownOutlined
          className="arrow-bounce"
          style={{ color: "white", fontSize: "40px" }}
        />
      </a>
      <div className="absolute top-1/2 left-0 w-full h-1/2 flex flex-col justify-center items-center space-y-4 px-4 md:px-32">
        <h1
          className="text-white text-center"
          style={{
            textShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
            fontSize: "50px",
            lineHeight: "42px",
          }}>
          <b>Estetik International</b> <br /> <i>Discover The New You!</i>
        </h1>
      </div>
    </div>
  );
}
