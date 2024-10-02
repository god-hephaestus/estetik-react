"use client";

export default function HeroDynamic({ heroBg }: { heroBg: string }) {
  return (
    <div className="w-full h-[400px] py-4 px-12 ">
      <video
        className="object-contai rounded-3xl"
        src={`/video/${heroBg}`}
        controls
        // poster="{`/images/${posterImage}`}"
      />
    </div>
  );
}
