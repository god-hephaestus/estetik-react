"use client";

export default function HeroDynamic({ heroBg }: { heroBg: string }) {
  return (
    <div className="w-full h-[350px] px-12 ">
      <video
        className="object-contain rounded-3xl"
        src={`/video/${heroBg}`}
        controls
        // poster="{`/images/${posterImage}`}"
      />
    </div>
  );
}
