"use client";

export default function HeroDynamic({ heroBg }: { heroBg: string }) {
  return (
    <div className="relative h-full w-full flex-grow p-4">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={`/video/${heroBg}`}
        autoPlay
        muted
        loop></video>
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
