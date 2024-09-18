"use client";
import React, { useState } from "react";
import Comparison from "./Comparison";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";

export default function ParentState({
  testimonialsData,
  buttonsData,
  GalleryImgsData,
}: {
  testimonialsData: {
    [key: string]: Array<{
      name: string;
      operation: string;
      message: string;
      imageSrc: string;
    }>;
  };
  buttonsData: Array<{
    label: string;
    image1: string;
    image2: string;
    faqs: Array<{ question: string; answer: string }>;
    stateKey: string;
  }>;
  GalleryImgsData: { [key: string]: Array<{ src: string; alt: string }> };
}) {
  const [comparisonData, setComparisonData] = useState(buttonsData[0]); // this is what we're gonna change based on the url
  const [stateKey, setstateKey] = useState(comparisonData.stateKey);

  // Function to update comparison, gallery, and testimonials based on stateKey
  const handleButtonClick = (newComparisonData: (typeof buttonsData)[0]) => {
    setComparisonData(newComparisonData); // Update comparison data
    setstateKey(newComparisonData.stateKey); // Update gallery key for both Gallery and Testimonials
  };

  return (
    <>
      <Comparison
        buttonProps={buttonsData}
        comparisonData={comparisonData}
        onButtonClick={handleButtonClick}
      />
      <Gallery activestateKey={stateKey} GalleryImgsData={GalleryImgsData} />
      <Testimonials stateKey={stateKey} testimonialsData={testimonialsData} />
    </>
  );
}
