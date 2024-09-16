"use client";
import React from "react";
import { Image, Button } from "antd";
import { useState } from "react";

// Define the type for the keys of GallerySrcArr
const GallerySrcArr = {
  gallery1: [
    {
      src: "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
      alt: "Gallery 1 Image 1",
    },
    {
      src: "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
      alt: "Gallery 1 Image 2",
    },
    {
      src: "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
      alt: "Gallery 1 Image 3",
    },
  ],
  gallery2: [
    {
      src: "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
      alt: "Gallery 2 Image 1",
    },
    {
      src: "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
      alt: "Gallery 2 Image 2",
    },
    {
      src: "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
      alt: "Gallery 2 Image 3",
    },
  ],
  gallery3: [
    {
      src: "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
      alt: "Gallery 3 Image 1",
    },
    {
      src: "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
      alt: "Gallery 3 Image 2",
    },
    {
      src: "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
      alt: "Gallery 3 Image 3",
    },
  ],
};

// Define the type for gallery keys
type GalleryKey = keyof typeof GallerySrcArr;

export default function Gallery() {
  const [imageGallery, setImageGallery] = useState<GalleryKey>("gallery1");

  // Use GalleryKey to index GallerySrcArr
  let currentGallery = GallerySrcArr[imageGallery];

  return (
    <div>
      <Button onClick={() => setImageGallery("gallery1")}>Gallery 1</Button>
      <Button onClick={() => setImageGallery("gallery2")}>Gallery 2</Button>
      <Button onClick={() => setImageGallery("gallery3")}>Gallery 3</Button>

      <Image.PreviewGroup items={currentGallery}>
        <Image
          width={200}
          src={
            "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
          }
          alt={"Static Image"}
        />
      </Image.PreviewGroup>
    </div>
  );
}
