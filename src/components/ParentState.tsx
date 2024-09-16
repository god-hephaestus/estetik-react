"use client";
import React, { useState } from "react";
import Comparison from "./Comparison";
import Gallery from "./Gallery";

export default function ParentState({
  buttonProps,
}: {
  buttonProps: Array<{
    label: string;
    image1: string;
    image2: string;
    faqs: Array<{ question: string; answer: string }>;
  }>;
}) {
  const [comparisonImages, setComparisonImages] = useState<string[]>([
    buttonProps[0]?.image1 || "",
    buttonProps[0]?.image2 || "",
  ]);

  return (
    <div>
      <Comparison
        buttonProps={buttonProps}
        setComparisonImages={setComparisonImages}
      />
      <Gallery comparisonImages={comparisonImages} />
    </div>
  );
}
