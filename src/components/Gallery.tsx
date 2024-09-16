"use client";
import React from "react";
import { Divider, Image } from "antd";

export default function Gallery({
  activeGalleryKey,
  GallerySrcArr,
}: {
  activeGalleryKey: string;
  GallerySrcArr: { [key: string]: Array<{ src: string; alt: string }> };
}) {
  const currentGallery = GallerySrcArr[activeGalleryKey] || [];

  const previewItems = currentGallery.map((image) => ({
    src: image.src,
    alt: image.alt,
  }));

  return (
    <>
      <Divider> Gallery</Divider>
      {currentGallery.length > 0 ? (
        <Image.PreviewGroup items={previewItems}>
          <Image
            width={200}
            src={currentGallery[0].src}
            alt={currentGallery[0].alt}
          />
        </Image.PreviewGroup>
      ) : (
        <p>No images available for this gallery.</p>
      )}
    </>
  );
}
