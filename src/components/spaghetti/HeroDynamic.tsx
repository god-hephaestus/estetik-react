"use client";

import { ArrowDownOutlined } from "@ant-design/icons";

export default function HeroDynamic({ heroBg }: { heroBg: string }) {
  return (
    <div
      className="relative w-screen h-screen"
      style={{
        marginLeft: "calc(50% - 50vw)", // full width regardless of the container via this
        marginRight: "calc(50% - 50vw)", // full width regardless of the container via this
      }}>
      <video
        className="w-full h-full object-cover"
        src={"/video/" + heroBg}
        autoPlay
        muted
        loop></video>
      <a className="absolute left-[50%] bottom-16 z-50" href="#compare">
        <ArrowDownOutlined
          style={{ color: "white", fontSize: "40px" }}></ArrowDownOutlined>
      </a>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center space-y-4 px-32">
        <h1
          className="text-white text-center lg:block decoration-double"
          style={{
            textShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
            fontSize: "50px",
            lineHeight: "42px",
          }}>
          <b>Estetik International</b> <br /> <i>Discover The New You!</i>
        </h1>
        <p
          className="text-white text-lg text-center lg:block decoration-double"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}></p>
      </div>
    </div>
  );
}
