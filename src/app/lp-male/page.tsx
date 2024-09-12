import Comparison from "@/components/Comparison";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LP Title",
  description: "LP Description",
};

// Define the buttons data here
const buttons = [
  {
    label: "Hair Transplant",
    image1: "/BeforeAfter/hair.webp",
    image2: "/BeforeAfter/hair2.webp",
    faqs: [
      {
        question: "What is Hair Transplant?",
        answer:
          "Hair Transplant is a condition involving enlarged breast tissue in men.",
      },
      {
        question: "How long does recovery take?",
        answer: "Recovery takes about 1-2 weeks.",
      },
    ],
  },
  {
    label: "Gynecomastia",
    image1: "/BeforeAfter/ginocomasti.webp",
    image2: "/BeforeAfter/ginocomasti2.webp",
    faqs: [
      {
        question: "What is Gynecomastia?",
        answer:
          "Gynecomastia is a condition involving enlarged breast tissue in men.",
      },
      {
        question: "How long does recovery take?",
        answer: "Recovery takes about 1-2 weeks.",
      },
    ],
  },
  {
    label: "Six Pack",
    image1: "/BeforeAfter/sixpack.webp",
    image2: "/BeforeAfter/sixpack2.webp",
    faqs: [
      {
        question: "What is Six Pack Surgery?",
        answer: "Six Pack Surgery helps sculpt the abdominal muscles.",
      },
      {
        question: "How long does recovery take?",
        answer: "Recovery can take 4 to 6 weeks.",
      },
    ],
  },
  {
    label: "Rhinoplasty",
    image1: "/BeforeAfter/rhino.webp",
    image2: "/BeforeAfter/rhino2.webp",
    faqs: [
      {
        question: "What is Rhinoplasty?",
        answer: "Rhinoplasty is a procedure to restore hair growth.",
      },
      {
        question: "How long does recovery take?",
        answer: "Recovery takes 2 to 3 weeks.",
      },
    ],
  },
  {
    label: "Dental Aesthetics",
    image1: "/BeforeAfter/dental.webp",
    image2: "/BeforeAfter/dental2.webp",
    faqs: [
      {
        question: "What is Dental?",
        answer:
          "Dental aesthetics involves procedures to enhance the appearance of teeth.",
      },
      {
        question: "How long does recovery take?",
        answer: "Recovery takes about 1-2 weeks.",
      },
    ],
  },
  {
    label: "Otoplasty",
    image1: "/BeforeAfter/otoplasti.webp",
    image2: "/BeforeAfter/otoplasti2.webp",
    faqs: [
      {
        question: "What is Otoplasty?",
        answer: "Otoplasty helps correct the shape or size of the ears.",
      },
      {
        question: "How long does recovery take?",
        answer: "Recovery can take 4 to 6 weeks.",
      },
    ],
  },
  {
    label: "Penile Surgeries",
    image1: "/BeforeAfter/penile.webp",
    image2: "/BeforeAfter/penile2.webp",
    faqs: [
      {
        question: "What are Penile Surgeries?",
        answer:
          "Penile surgeries involve procedures to enhance or restore penile function.",
      },
      {
        question: "How long does recovery take?",
        answer: "Recovery takes 2 to 3 weeks.",
      },
    ],
  },
  {
    label: "360 Body Lifting",
    image1: "/BeforeAfter/360.webp",
    image2: "/BeforeAfter/3602.webp",
    faqs: [
      {
        question: "What is 360 Body Lifting?",
        answer:
          "360 Body Lifting helps to remove excess skin and fat after major weight loss.",
      },
      {
        question: "How long does recovery take?",
        answer: "Recovery takes about 2-3 weeks.",
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Comparison buttonProps={buttons}></Comparison>
      </main>
    </div>
  );
}
