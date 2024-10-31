"use client";
import React from "react";
import { Image } from "antd";

export default function Gallery({
  activestateKey,
  GalleryImgsData,
}: {
  activestateKey: string;
  GalleryImgsData: { [key: string]: Array<{ src: string; alt: string }> };
}) {
  const currentGallery = GalleryImgsData[activestateKey] || [];

  const previewItems = currentGallery.map((image) => ({
    src: image.src,
    alt: image.alt,
  }));

  return (
    <div className="w-full h-full">
      <div className="p-[10px] lg:p-[20px] text-center ">
        {
          <Image.PreviewGroup items={previewItems}>
            <Image
              className=" rounded-[25px] border-5 border-[#d0eeec]"
              src={"/BeforeAfter/gallery/cover/" + activestateKey + ".webp"}
              alt={currentGallery[0].alt}
            />
          </Image.PreviewGroup>
        }
      </div>
    </div>
  );
}
