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
    <>
      <div className="p-2 text-center">
        {currentGallery.length > 0 ? (
          <Image.PreviewGroup items={previewItems}>
            <Image
              width={320}
              src={currentGallery[0].src}
              alt={currentGallery[0].alt}
            />
          </Image.PreviewGroup>
        ) : (
          <p className="text-black">No images available for this gallery.</p>
        )}
      </div>
    </>
  );
}
