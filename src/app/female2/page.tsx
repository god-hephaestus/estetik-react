import Contact from "@/components/spaghetti/Contact";
import Doctors from "@/components/spaghetti/Doctors";
import Location from "@/components/spaghetti/Location";
import OperationForm from "@/components/spaghetti/OperationForm";
import ParentState from "@/components/spaghetti/ParentState";
import { Divider } from "antd";
import { Metadata } from "next";

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
        question: "How do I know which breast surgery is right for me?",
        answer:
          "Our surgeons, led by Dr. Bulent Cihantimur, offer personalized consultations to recommend the most suitable procedure based on your individual needs and goals.",
      },
      {
        question: "What is the recovery time after breast surgery?",
        answer:
          "Recovery varies, but most patients can resume light activities within 1-2 weeks, with full recovery taking 4-6 weeks depending on the procedure. We provide clear aftercare instructions for a smooth recovery.",
      },
      {
        question: "Will there be visible scars after surgery?",
        answer:
          "Some scarring is expected, but our advanced techniques minimize and place them in less visible areas. Over time, scars fade, and we offer treatments to support optimal healing.",
      },
      {
        question: "Can breast surgery affect breastfeeding?",
        answer:
          "Breast implants usually don't interfere with breastfeeding, while lifts or reductions may have an impact based on the amount of tissue adjusted, so it's best to discuss with your surgeon.",
      },
      {
        question: "How long do the results last?",
        answer:
          "Breast surgery results can be long-lasting, though factors like aging or weight changes can affect them. Following your surgeon's advice and maintaining a healthy lifestyle helps prolong the results.",
      },
      {
        question: "How soon can I return to normal activities after surgery?",
        answer:
          "You can usually resume light activities within 1-2 weeks, but avoid strenuous exercise or heavy lifting for about 4-6 weeks. Your surgeon will guide you through your personalized recovery plan.",
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
        question:
          "What is a Brazilian Butt Lift, and how does it differ from butt implants?",
        answer:
          "A BBL uses your own fat for natural-looking butt enhancement, while implants are synthetic.",
      },
      {
        question:
          "How long will it take to recover after a BBL, and when can I sit or sleep comfortably again?",
        answer:
          "Recovery takes 2-4 weeks, and special precautions for sitting or sleeping are necessary during this time.",
      },
      {
        question:
          "Are there any risks associated with a BBL, and how can I ensure a safe and successful outcome?",
        answer:
          "Risks are minimized when performed by a skilled surgeon. Following aftercare instructions is crucial for safety.",
      },
      {
        question:
          "Can I combine a BBL with other surgeries like liposuction or a tummy tuck to improve my overall body shape?",
        answer:
          "Yes, many patients combine BBL with other procedures for more comprehensive body contouring.",
      },
      {
        question:
          "What can I do to maintain my BBL results, and will I need follow-up treatments in the future?",
        answer:
          "Maintain a stable weight and follow a healthy lifestyle to keep your BBL results long-lasting. Follow-up treatments are not usually necessary.",
      },
      {
        question: "How long will it take to see the final results of my BBL?",
        answer:
          "While you will notice an immediate change in shape, the final results typically become visible after 3-6 months, once the swelling subsides and your body adjusts to the fat transfer",
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
        question: "What is the recovery time for total body reshaping?",
        answer:
          "Recovery can take several weeks, with most patients returning to light activities within 2-3 weeks, while full recovery and the final results may take a few months.",
      },
      {
        question:
          "Will I experience significant weight loss from total body reshaping?",
        answer:
          "Total body reshaping is more about contouring and improving your body’s shape rather than weight loss. It’s best suited for patients who have already reached their target weight.",
      },
      {
        question: "How long will the results of total body reshaping last?",
        answer:
          "The results can be long-lasting as long as you maintain a stable weight and healthy lifestyle. However, natural aging may still affect your body’s appearance over time.",
      },
      {
        question:
          "What exactly is total body reshaping, and how can it help me achieve my desired body shape?",
        answer:
          "Total body reshaping combines multiple procedures to contour and improve your body's proportions, targeting stubborn fat, loose skin, or muscle tone.",
      },
      {
        question:
          "Will the results of total body reshaping be permanent, or will I need touch-ups in the future?",
        answer:
          "Results are long-lasting if you maintain a stable weight, but natural aging may still affect the body over time.",
      },
      {
        question:
          "How can I maintain my results after total body reshaping, and what lifestyle changes will I need to make?",
        answer:
          "To maintain your results, it's essential to follow a balanced diet, engage in regular exercise, and avoid significant weight fluctuations, which can affect the long-term outcome of your body reshaping procedures.",
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
const HeroBgData = {
  gallery1: {
    src: "Breast.mp4",
    alt: "Main Video",
  },
  gallery2: {
    src: "slider.mp4",
    alt: "BBL Video",
  },
  gallery3: {
    src: "total Body.mp4",
    alt: "Total Body Video",
  },
};

export default function ComparisonPage() {
  return (
    <div className="container mx-auto">
      <ParentState
        buttonsData={buttonsData}
        GalleryImgsData={GalleryImgsData}
        testimonialsData={testimonialsData}
        heroBgData={HeroBgData}></ParentState>
      <div className="flex md:flex-row flex-col">
        <div className="w-full md:w-1/2">
          <Divider
            style={{
              fontWeight: "bold",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}>
            Doctors
          </Divider>
          <Doctors doctorDescription={doctorsData}></Doctors>
        </div>
        <div className="w-full md:w-1/2 ">
          <Divider
            style={{
              fontWeight: "bold",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}>
            Get in Contact
          </Divider>
          <Contact></Contact>
          <OperationForm></OperationForm>
        </div>
      </div>

      <Divider
        style={{
          fontWeight: "bold",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}>
        Location
      </Divider>
      <Location></Location>
    </div>
  );
}
