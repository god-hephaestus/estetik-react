import Contact from "@/components/spaghetti/Contact";
import Doctors from "@/components/spaghetti/Doctors";
import Hero from "@/components/spaghetti/Hero";
import Location from "@/components/spaghetti/Location";
import OperationForm from "@/components/spaghetti/OperationForm";
import ParentState from "@/components/spaghetti/ParentState";
import { Divider } from "antd";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "LP Title",
  description: "LP Description",
};

const buttonsData = [
  {
    label: "Breast",
    image1: "/BeforeAfter/breast.webp",
    image2: "/BeforeAfter/breast2.webp",
    faqs: [
      {
        question: "What is Hair Transplant?",
        answer:
          "Hair Transplant is a procedure to restore hair growth. Hair Transplant is a procedure to restore hair growth.",
      },
      {
        question: "How long does recovery take?",
        answer: "Recovery takes about 1-2 weeks.",
      },
    ],
    stateKey: "gallery1",
  },
  {
    label: "BBL",
    image1: "/BeforeAfter/bbl.webp",
    image2: "/BeforeAfter/bbl2.webp",
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
    stateKey: "gallery2",
  },
  {
    label: "Total Body",
    image1: "/BeforeAfter/totalbody.webp",
    image2: "/BeforeAfter/totalbody2.webp",
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
    stateKey: "gallery3",
  },
];
const GalleryImgsData = {
  gallery1: [
    {
      src: "/BeforeAfter/gallery/breast/Meme - 1.webp",
      alt: "Breast Surgery",
    },
  ],
  gallery2: [
    {
      src: "/BeforeAfter/gallery/bbl/bbl - 1.webp",
      alt: "BBL",
    },
  ],
  gallery3: [
    {
      src: "/BeforeAfter/gallery/total/total - 1.webp",
      alt: "Total Body",
    },
  ],
};
const testimonialsData = {
  gallery1: [
    {
      name: "John Doe",
      operation: "Hair Transplant",
      message: "Amazing results, highly recommend!",
      imageSrc: "hair2.webp",
    },
    {
      name: "Jane Smith",
      operation: "Hair Transplant",
      message: "Very professional and caring staff.",
      imageSrc: "hair2.webp",
    },
    {
      name: "John Doe",
      operation: "Hair Transplant",
      message: "Amazing results, highly recommend!",
      imageSrc: "hair2.webp",
    },
    {
      name: "Jane Smith",
      operation: "Hair Transplant",
      message: "Very professional and caring staff.",
      imageSrc: "hair2.webp",
    },
    {
      name: "John Doe",
      operation: "Hair Transplant",
      message: "Amazing results, highly recommend!",
      imageSrc: "hair2.webp",
    },
    {
      name: "Jane Smith",
      operation: "Hair Transplant",
      message: "Very professional and caring staff.",
      imageSrc: "hair2.webp",
    },
  ],
  gallery2: [
    {
      name: "Mark Lee",
      operation: "Gynecomastia",
      message: "The surgery was life-changing.",
      imageSrc: "hair2.webp",
    },
    {
      name: "Mark Lee",
      operation: "Gynecomastia",
      message: "The surgery was life-changing.",
      imageSrc: "hair2.webp",
    },
    {
      name: "Mark Lee",
      operation: "Gynecomastia",
      message: "The surgery was life-changing.",
      imageSrc: "hair2.webp",
    },
    {
      name: "Mark Lee",
      operation: "Gynecomastia",
      message: "The surgery was life-changing.",
      imageSrc: "hair2.webp",
    },
    {
      name: "Mark Lee",
      operation: "Gynecomastia",
      message: "The surgery was life-changing.",
      imageSrc: "hair2.webp",
    },
    {
      name: "Mark Lee",
      operation: "Gynecomastia",
      message: "The surgery was life-changing.",
      imageSrc: "hair2.webp",
    },
    {
      name: "Mark Lee",
      operation: "Gynecomastia",
      message: "The surgery was life-changing.",
      imageSrc: "hair2.webp",
    },
    {
      name: "Mark Lee",
      operation: "Gynecomastia",
      message: "The surgery was life-changing.",
      imageSrc: "hair2.webp",
    },
    {
      name: "Mark Lee",
      operation: "Gynecomastia",
      message: "The surgery was life-changing.",
      imageSrc: "hair2.webp",
    },
  ],
  gallery3: [
    {
      name: "Sarah Johnson",
      operation: "360 Body Lifting",
      message: "Fantastic experience!",
      imageSrc: "hair2.webp",
    },
    {
      name: "Sarah Johnson",
      operation: "360 Body Lifting",
      message: "Fantastic experience!",
      imageSrc: "hair2.webp",
    },
    {
      name: "Sarah Johnson",
      operation: "360 Body Lifting",
      message: "Fantastic experience!",
      imageSrc: "hair2.webp",
    },
    {
      name: "Sarah Johnson",
      operation: "360 Body Lifting",
      message: "Fantastic experience!",
      imageSrc: "hair2.webp",
    },
    {
      name: "Sarah Johnson",
      operation: "360 Body Lifting",
      message: "Fantastic experience!",
      imageSrc: "hair2.webp",
    },
    {
      name: "Sarah Johnson",
      operation: "360 Body Lifting",
      message: "Fantastic experience!",
      imageSrc: "hair2.webp",
    },
    {
      name: "Sarah Johnson",
      operation: "360 Body Lifting",
      message: "Fantastic experience!",
      imageSrc: "hair2.webp",
    },
    {
      name: "Sarah Johnson",
      operation: "360 Body Lifting",
      message: "Fantastic experience!",
      imageSrc: "hair2.webp",
    },
    {
      name: "Sarah Johnson",
      operation: "360 Body Lifting",
      message: "Fantastic experience!",
      imageSrc: "hair2.webp",
    },
  ],
};
const doctorsData = [
  {
    imageSrc: "/img/doctors/5.webp",
    doctorName: "Dr. Jane Smith",
    doctorText:
      "Dr. Jane Smith specializes in facial aesthetics and reconstructive surgery.",
  },
  {
    imageSrc: "/img/doctors/5.webp",
    doctorName: "Dr. Jane Smith",
    doctorText:
      "Dr. Jane Smith specializes in facial aesthetics and reconstructive surgery.",
  },
  {
    imageSrc: "/img/doctors/2.webp",
    doctorName: "Dr. John Doe",
    doctorText:
      "Dr. John Doe is an experienced surgeon with over 20 years of practice.",
  },
  {
    imageSrc: "/img/doctors/3.webp",
    doctorName: "Dr. Jane Smith",
    doctorText:
      "Dr. Jane Smith specializes in facial aesthetics and reconstructive surgery.",
  },
  {
    imageSrc: "/img/doctors/4.webp",
    doctorName: "Dr. Jane Smith",
    doctorText:
      "Dr. Jane Smith specializes in facial aesthetics and reconstructive surgery.",
  },
  {
    imageSrc: "/img/doctors/5.webp",
    doctorName: "Dr. Jane Smith",
    doctorText:
      "Dr. Jane Smith specializes in facial aesthetics and reconstructive surgery.",
  },
  {
    imageSrc: "/img/doctors/6.webp",
    doctorName: "Dr. Jane Smith",
    doctorText:
      "Dr. Jane Smith specializes in facial aesthetics and reconstructive surgery.",
  },
];
export default function ComparisonPage() {
  return (
    <div className="container mx-auto">
      <Hero></Hero>
      <ParentState
        buttonsData={buttonsData}
        GalleryImgsData={GalleryImgsData}
        testimonialsData={testimonialsData}></ParentState>
      <Divider style={{ fontWeight: "bold" }}>Doctors</Divider>
      <Doctors doctorDescription={doctorsData}></Doctors>
      <Divider style={{ fontWeight: "bold" }}>Location</Divider>
      <Location></Location>
      <Divider style={{ fontWeight: "bold" }}>Get in Contact</Divider>
      <Contact></Contact>
      <OperationForm></OperationForm>
    </div>
  );
}