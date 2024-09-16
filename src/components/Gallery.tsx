"use client";
import React from "react";
import { Image } from "antd";

export default function Gallery({
  activeGalleryKey,
  GallerySrcArr,
}: {
  activeGalleryKey: string;
  GallerySrcArr: { [key: string]: Array<{ src: string; alt: string }> };
}) {
  const currentGallery = GallerySrcArr[activeGalleryKey] || [];

  return (
    <div>
      {currentGallery.length > 0 ? (
        currentGallery.map((image, index) => (
          <Image key={index} width={200} src={image.src} alt={image.alt} />
        ))
      ) : (
        <p>No images available for this gallery.</p> // Fallback for empty or incorrect gallery keys
      )}
    </div>
  );
}
