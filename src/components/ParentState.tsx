"use client";
import React, { useState } from "react";
import Comparison from "./Comparison";
import Gallery from "./Gallery";

export default function ParentState({
  buttonsData,
  GalleryImgsData,
}: {
  buttonsData: Array<{
    label: string;
    image1: string;
    image2: string;
    faqs: Array<{ question: string; answer: string }>;
    galleryKey: string;
  }>;
  GalleryImgsData: { [key: string]: Array<{ src: string; alt: string }> };
}) {
  const [comparisonData, setComparisonData] = useState(buttonsData[0]);
  const [galleryKey, setGalleryKey] = useState(comparisonData.galleryKey);

  // Function to update both comparison and gallery data
  const handleButtonClick = (newComparisonData: (typeof buttonsData)[0]) => {
    setComparisonData(newComparisonData); // Update comparison data
    setGalleryKey(newComparisonData.galleryKey); // Update gallery key
  };

  return (
    <>
      <Comparison
        buttonProps={buttonsData}
        comparisonData={comparisonData}
        onButtonClick={handleButtonClick}
      />
      <Gallery
        activeGalleryKey={galleryKey}
        GalleryImgsData={GalleryImgsData}
      />
    </>
  );
}