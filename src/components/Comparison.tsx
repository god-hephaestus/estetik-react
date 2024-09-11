"use client";

import React, { useState } from "react";
import ReactCompareImage from "react-compare-image";
import { Button } from "antd";

export default function Comparison() {
  const [comparisonImage, setComparisonImage] = useState<Array<string>>([
    "/BeforeAfter/dental.webp",
    "/BeforeAfter/dental2.webp",
  ]);
  const [faqText, setFaqText] = useState<
    Array<{ question: string; answer: string }>
  >([]);

  const handleImageChange = (image1: string, image2: string) => {
    setComparisonImage([image1, image2]);
  };
  const handleFaqChange = (
    newFaqs: Array<{ question: string; answer: string }>
  ) => {
    setFaqText(newFaqs);
  };

  return (
    <div className="container">
      <Button
        onClick={() => {
          handleImageChange(
            "/BeforeAfter/hair.webp",
            "/BeforeAfter/hair2.webp"
          );
          handleFaqChange([
            {
              question: "What is Penile Surgeries?",
              answer:
                "Penile Surgeries is a comprehensive procedure designed to contour the body.",
            },
            {
              question: "How long does recovery take?",
              answer:
                "Recovery from Penile Surgeries can take several weeks to a few months, depending on individual factors.",
            },
          ]);
        }}>
        Hair Transplant
      </Button>
      <Button
        onClick={() => {
          handleImageChange(
            "/BeforeAfter/ginocomasti.webp",
            "/BeforeAfter/ginocomasti2.webp"
          );
          handleFaqChange([
            {
              question: "What is Penile Surgeries?",
              answer:
                "Penile Surgeries is a comprehensive procedure designed to contour the body.",
            },
            {
              question: "How long does recovery take?",
              answer:
                "Recovery from Penile Surgeries can take several weeks to a few months, depending on individual factors.",
            },
          ]);
        }}>
        Gynecomastia
      </Button>
      <Button
        onClick={() => {
          handleImageChange(
            "/BeforeAfter/sixpack.webp",
            "/BeforeAfter/sixpack2.webp"
          );
          handleFaqChange([
            {
              question: "What is Penile Surgeries?",
              answer:
                "Penile Surgeries is a comprehensive procedure designed to contour the body.",
            },
            {
              question: "How long does recovery take?",
              answer:
                "Recovery from Penile Surgeries can take several weeks to a few months, depending on individual factors.",
            },
          ]);
        }}>
        Six Pack
      </Button>
      <Button
        onClick={() => {
          handleImageChange(
            "/BeforeAfter/rhino.webp",
            "/BeforeAfter/rhino2.webp"
          );
          handleFaqChange([
            {
              question: "What is Penile Surgeries?",
              answer:
                "Penile Surgeries is a comprehensive procedure designed to contour the body.",
            },
            {
              question: "How long does recovery take?",
              answer:
                "Recovery from Penile Surgeries can take several weeks to a few months, depending on individual factors.",
            },
          ]);
        }}>
        Rhinoplasty
      </Button>
      <Button
        onClick={() => {
          handleImageChange(
            "/BeforeAfter/Dental.webp",
            "/BeforeAfter/Dental2.webp"
          );
          handleFaqChange([
            {
              question: "What is Penile Surgeries?",
              answer:
                "Penile Surgeries is a comprehensive procedure designed to contour the body.",
            },
            {
              question: "How long does recovery take?",
              answer:
                "Recovery from Penile Surgeries can take several weeks to a few months, depending on individual factors.",
            },
          ]);
        }}>
        Dental Aesthetics
      </Button>
      <Button
        onClick={() => {
          handleImageChange(
            "/BeforeAfter/otoplasti.webp",
            "/BeforeAfter/otoplasti2.webp"
          );
          handleFaqChange([
            {
              question: "What is Penile Surgeries?",
              answer:
                "Penile Surgeries is a comprehensive procedure designed to contour the body.",
            },
            {
              question: "How long does recovery take?",
              answer:
                "Recovery from Penile Surgeries can take several weeks to a few months, depending on individual factors.",
            },
          ]);
        }}>
        Otoplasty
      </Button>
      <Button
        onClick={() => {
          handleImageChange(
            "/BeforeAfter/penile.webp",
            "/BeforeAfter/penile2.webp"
          );
          handleFaqChange([
            {
              question: "What is Penile Surgeries?",
              answer:
                "Penile Surgeries is a comprehensive procedure designed to contour the body.",
            },
            {
              question: "How long does recovery take?",
              answer:
                "Recovery from Penile Surgeries can take several weeks to a few months, depending on individual factors.",
            },
          ]);
        }}>
        Penile Surgeries
      </Button>
      <Button
        onClick={() => {
          handleImageChange("/BeforeAfter/360.webp", "/BeforeAfter/3602.webp");
          handleFaqChange([
            {
              question: "What is 360 Body Lifting?",
              answer:
                "360 Body Lifting is a comprehensive procedure designed to contour the body.",
            },
            {
              question: "How long does recovery take?",
              answer:
                "Recovery from 360 Body Lifting can take several weeks to a few months, depending on individual factors.",
            },
          ]);
        }}>
        360 Body Lifting
      </Button>
      <div style={{ width: "800px", height: "500px" }}>
        <ReactCompareImage
          leftImage={comparisonImage[0]} // Dynamically set left image from state
          rightImage={comparisonImage[1]} // Dynamically set right image from state
          sliderLineColor="#ffffff" // Customize the slider color
          handleSize={30} // Customize the handle size
          skeleton
        />
        <div>
          {faqText.map((faq, index) => (
            <div key={index}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
