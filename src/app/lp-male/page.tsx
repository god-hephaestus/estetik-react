import Contact from "@/components/Contact";
import Doctors from "@/components/Doctors";
import Location from "@/components/Location";
import ParentState from "@/components/ParentState";
import SideMenu from "@/components/SideMenu";
import Testimonials from "@/components/Testimonials";
import { Divider } from "antd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LP Title",
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
    {
      src: "/BeforeAfter/gallery/hair/Hair transplant.webp",
      alt: "Hair Transplant",
    },
    {
      src: "/BeforeAfter/gallery/hair/Hair transplant 2.webp",
      alt: "Hair Transplant",
    },
    {
      src: "/BeforeAfter/gallery/hair/Hair transplant 3.webp",
      alt: "Hair Transplant",
    },
    {
      src: "/BeforeAfter/gallery/hair/Hair transplant 4.webp",
      alt: "Hair Transplant",
    },
    {
      src: "/BeforeAfter/gallery/hair/Hair transplant 5.webp",
      alt: "Hair Transplant",
    },
    {
      src: "/BeforeAfter/gallery/hair/Hair transplant 6.webp",
      alt: "Hair Transplant",
    },
    {
      src: "/BeforeAfter/gallery/hair/Hair transplant 7.webp",
      alt: "Hair Transplant",
    },
  ],
  gallery2: [
    {
      src: "/BeforeAfter/gallery/gynecomastia/Gynecomastia.webp",
      alt: "Gynecomastia",
    },
    {
      src: "/BeforeAfter/gallery/gynecomastia/Gynecomastia 2.webp",
      alt: "Gynecomastia",
    },
    {
      src: "/BeforeAfter/gallery/gynecomastia/Gynecomastia 4.webp",
      alt: "Gynecomastia",
    },
    {
      src: "/BeforeAfter/gallery/gynecomastia/Gynecomastia 5.webp",
      alt: "Gynecomastia",
    },
    {
      src: "/BeforeAfter/gallery/gynecomastia/Gynecomastia 6.webp",
      alt: "Gynecomastia",
    },
  ],
  gallery3: [
    {
      src: "/BeforeAfter/gallery/360/360 body lifting 1.webp",
      alt: "360 Body Lifting",
    },
    {
      src: "/BeforeAfter/gallery/360/360 body lifting 2.webp",
      alt: "360 Body Lifting",
    },
  ],
  gallery4: [
    { src: "/BeforeAfter/gallery/sixpack/Six Pack 1.webp", alt: "Six Pack" },
    { src: "/BeforeAfter/gallery/sixpack/Six Pack 2.webp", alt: "Six Pack" },
    { src: "/BeforeAfter/gallery/sixpack/Six Pack 3.webp", alt: "Six Pack" },
    { src: "/BeforeAfter/gallery/sixpack/Six Pack 4.webp", alt: "Six Pack" },
  ],
  gallery5: [
    {
      src: "/BeforeAfter/gallery/rhinoplasty/Rhinoplasty 1.webp",
      alt: "Rhinoplasty",
    },
    {
      src: "/BeforeAfter/gallery/rhinoplasty/Rhinoplasty 2.webp",
      alt: "Rhinoplasty",
    },
    {
      src: "/BeforeAfter/gallery/rhinoplasty/Rhinoplasty 3.webp",
      alt: "Rhinoplasty",
    },
    {
      src: "/BeforeAfter/gallery/rhinoplasty/Rhinoplasty 5.webp",
      alt: "Rhinoplasty",
    },
  ],
  gallery6: [
    {
      src: "/BeforeAfter/gallery/dental/Dental 1.webp",
      alt: "Dental Aesthetics",
    },
    {
      src: "/BeforeAfter/gallery/dental/Dental 2.webp",
      alt: "Dental Aesthetics",
    },
    {
      src: "/BeforeAfter/gallery/dental/Dental 3.webp",
      alt: "Dental Aesthetics",
    },
    {
      src: "/BeforeAfter/gallery/dental/Dental 4.webp",
      alt: "Dental Aesthetics",
    },
  ],
  gallery7: [
    { src: "/BeforeAfter/gallery/otoplasty/Otoplasty.webp", alt: "Otoplasty" },
    {
      src: "/BeforeAfter/gallery/otoplasty/Otoplasty 2.webp",
      alt: "Otoplasty",
    },
    {
      src: "/BeforeAfter/gallery/otoplasty/Otoplasty 3.webp",
      alt: "Otoplasty",
    },
    {
      src: "/BeforeAfter/gallery/otoplasty/Otoplasty 4.webp",
      alt: "Otoplasty",
    },
    {
      src: "/BeforeAfter/gallery/otoplasty/Otoplasty 5.webp",
      alt: "Otoplasty",
    },
    {
      src: "/BeforeAfter/gallery/otoplasty/Otoplasty 6.webp",
      alt: "Otoplasty",
    },
    {
      src: "/BeforeAfter/gallery/otoplasty/Otoplasty 7.webp",
      alt: "Otoplasty",
    },
  ],
  gallery8: [
    { src: "/BeforeAfter/gallery/penile/Penile.webp", alt: "Penile Surgeries" },
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
export default function ComparisonPage() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-3/5 h-screen flex flex-col justify-center items-center font-sans px-32 z-10 space-y-4">
        <h1 className="text-white text-4xl text-center">
          Estetik International <br /> Blending Art and Plastic Surgery
        </h1>
        <p className="text-white text-lg text-center">
          Estetik International Istanbul - Leading Aesthetic Surgery Health
          Group of Turkey
        </p>
      </div>
      <video
        className="absolute top-0 left-0 w-screen h-screen object-cover"
        src="/video/slider.mp4"
        autoPlay
        muted
        loop></video>
      <div className="relative z-10">
        <SideMenu>
          <ParentState
            buttonsData={buttonsData}
            GalleryImgsData={GalleryImgsData}></ParentState>
          <Divider>Testimonials</Divider>
          <Testimonials testimonialsData={testimonialsData}></Testimonials>
          <Divider>Doctors</Divider>
          <Doctors doctorDescription={doctorsData}></Doctors>
          <Divider>Location</Divider>
          <Location></Location>
          <Divider>Get in Contact</Divider>
          <Contact></Contact>
        </SideMenu>
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="w-full max-w-3xl px-4"></div>
      </div>
    </div>
  );
}
