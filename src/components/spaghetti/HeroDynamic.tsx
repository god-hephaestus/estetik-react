"use client";

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
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center space-y-4 px-32">
        <h1
          className="text-white text-4xl text-center lg:block decoration-double"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
          Estetik International <br /> Blending Art and Plastic Surgery
        </h1>
        <p
          className="text-white text-lg text-center lg:block decoration-double"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
          Discover The New You!
        </p>
      </div>
    </div>
  );
}
