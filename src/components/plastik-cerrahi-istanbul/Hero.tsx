import Image from "next/image";
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
          className="text-white text-4xl lg:text-5xl text-center "
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          }}
        >
          Estetik International <br /> <i>Discover The New You!</i>
        </h1>

        <Image
          src={"/img/banner-stars.webp"}
          alt="ratings"
          width={400}
          height={100}
          className="mx-auto"
        ></Image>

        <DownArrow></DownArrow>
      </div>
    </div>
  );
}
