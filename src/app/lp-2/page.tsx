import Contact from "@/components/Contact";
import Doctors from "@/components/Doctors";
import OperationForm from "@/components/OperationForm";
import Location from "@/components/Location";
import ParentState from "@/components/ParentState";
import Testimonials from "@/components/Testimonials";
import { Divider } from "antd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LP 2",
  description: "LP Description",
};

const buttonsData = [
  {
    label: "Hair Transplant",
    image1: "/BeforeAfter/hair.webp",
    image2: "/BeforeAfter/hair2.webp",
    faqs: [
      {
        question: "What is Hair Transplant?",
        answer: "Hair Transplant is a procedure to restore hair growth.",
      },
      {
        question: "How long does recovery take?",
        answer: "Recovery takes about 1-2 weeks.",
      },
    ],
    galleryKey: "gallery1",
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
    galleryKey: "gallery2",
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
    galleryKey: "gallery3",
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
    galleryKey: "gallery4",
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
    galleryKey: "gallery5",
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
    galleryKey: "gallery6",
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
    galleryKey: "gallery7",
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
    galleryKey: "gallery8",
  },
];
const GalleryImgsData = {
  gallery1: [
    { src: "/BeforeAfter/hair.webp", alt: "Hair Transplant" },
    { src: "/BeforeAfter/hair2.webp", alt: "Hair Transplant" },
  ],
  gallery2: [
    { src: "/BeforeAfter/ginocomasti.webp", alt: "Gynecomastia" },
    { src: "/BeforeAfter/ginocomasti2.webp", alt: "Gynecomastia" },
  ],
  gallery3: [
    { src: "/BeforeAfter/360.webp", alt: "360 Body Lifting" },
    { src: "/BeforeAfter/3602.webp", alt: "360 Body Lifting" },
  ],
  gallery4: [
    { src: "/BeforeAfter/360.webp", alt: "360 Body Lifting" },
    { src: "/BeforeAfter/3602.webp", alt: "360 Body Lifting" },
  ],
  gallery5: [
    { src: "/BeforeAfter/360.webp", alt: "360 Body Lifting" },
    { src: "/BeforeAfter/3602.webp", alt: "360 Body Lifting" },
  ],
  gallery6: [
    { src: "/BeforeAfter/360.webp", alt: "360 Body Lifting" },
    { src: "/BeforeAfter/3602.webp", alt: "360 Body Lifting" },
  ],
  gallery7: [
    { src: "/BeforeAfter/360.webp", alt: "360 Body Lifting" },
    { src: "/BeforeAfter/3602.webp", alt: "360 Body Lifting" },
  ],
  gallery8: [
    { src: "/BeforeAfter/360.webp", alt: "360 Body Lifting" },
    { src: "/BeforeAfter/3602.webp", alt: "360 Body Lifting" },
  ],
};
const testimonialsData = [
  {
    imageSrc: "rhino.webp",
    textProps: {
      name: "John Doe",
      operation: "Hair Transplant",
      message: "Great experience with Estetik International!",
    },
  },
  {
    imageSrc: "hair.webp",
    textProps: {
      name: "John Doe",
      operation: "Hair Transplant",
      message: "Great experience with Estetik International!",
    },
  },
  {
    imageSrc: "hair2.webp",
    textProps: {
      name: "John Doe",
      operation: "Hair Transplant",
      message: "Great experience with Estetik International!",
    },
  },
  {
    imageSrc: "dental2.webp",
    textProps: {
      name: "John Doe",
      operation: "Hair Transplant",
      message: "Great experience with Estetik International!",
    },
  },
];
const doctorsData = [
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
export default function Page() {
  return (
    <>
      <OperationForm></OperationForm>
      <ParentState
        buttonsData={buttonsData}
        GalleryImgsData={GalleryImgsData}
      />
      <Divider>Testimonials</Divider>
      <Testimonials testimonialsData={testimonialsData}></Testimonials>
      <Divider>Doctors</Divider>
      <Doctors doctorDescription={doctorsData}></Doctors>
      <Divider>Location</Divider>
      <Location></Location>
      <Divider>Get in Contact</Divider>
      <Contact></Contact>
    </>
  );
}
