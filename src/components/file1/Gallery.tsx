"use client";
import React from "react";
import { Image } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

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
      <div className="p-[20px] text-center">
        {
          <Image.PreviewGroup items={previewItems}>
            <Image src={currentGallery[0].src} alt={currentGallery[0].alt} />
          </Image.PreviewGroup>
        }
        <p>
          <InfoCircleOutlined /> See the full gallery of operation images via
          clicking on the image
        </p>
      </div>
    </div>
  );
}
