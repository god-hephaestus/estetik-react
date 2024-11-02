import { ArrowDownOutlined } from "@ant-design/icons";
import DownArrow from "./DownArrow";

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="w-full h-full object-cover block md:hidden"
        src="/video/cover/hospital-mobile.mp4"
        autoPlay
        muted
        loop
      ></video>
      <video
        className="w-full h-full object-cover hidden md:block"
        src="/video/cover/hospital-desktop.mp4"
        autoPlay
        muted
        loop
      ></video>

      <div className="absolute bottom-20 left-0 w-full text-center space-y-4">
        <h1
          className="text-white text-4xl text-center lg:block  "
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Estetik International <br /> <i>Discover The New You!</i>
        </h1>

        <DownArrow></DownArrow>
      </div>
    </div>
  );
}
