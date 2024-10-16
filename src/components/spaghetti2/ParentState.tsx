"use client";
import React, { useState } from "react";
import Comparison from "./Comparison";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import HeroDynamic from "./HeroDynamic";
import { Collapse, Divider } from "antd";
import { DownCircleOutlined, MinusOutlined } from "@ant-design/icons";
import OperationForm from "../OperationForm";
import Doctors from "./Doctors";
import Contact from "./Contact";
import Location from "./Location";

export default function ParentState({
  testimonialsData,
  buttonsData,
  GalleryImgsData,
  heroBgData,
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
  heroBgData: { [key: string]: { src: string; alt: string } };
}) {
  const [comparisonData, setComparisonData] = useState(buttonsData[0]); // Set initial comparison data
  const [stateKey, setstateKey] = useState(comparisonData.stateKey); // Set initial state key

  // Function to update comparison, gallery, testimonials, and hero background based on stateKey
  const handleButtonClick = (newComparisonData: (typeof buttonsData)[0]) => {
    setComparisonData(newComparisonData); // Update comparison data
    setstateKey(newComparisonData.stateKey); // Update state key
  };

  // Dynamically generate Collapse items based on the FAQ data
  const faqItems = comparisonData.faqs.map((faq, index) => ({
    key: `${index + 1}`,
    label: faq.question, // The question becomes the label of the collapse
    children: <p className="bg-[#d0eeec]">{faq.answer}</p>, // The answer becomes the content
  }));
  const doctorsData = [
    {
      imageSrc: "/img/doctors/bulentcihantimur.webp",
      doctorName: "Bülent Cihantimur MD",
      doctorText:
        "Dr. Bülent Cihantimur, with 30+ years of experience, is known for his innovative techniques and founding Estetik International.",
      doctorArea: "Aesthetic, Plastic and Reconstructive Surgeon",
    },
    {
      imageSrc: "/img/doctors/cenksen.webp",
      doctorName: "Prof. Dr. Cenk Şen",
      doctorText:
        "Dr. Cenk Şen, with 30+ years of experience, specializes in rhinoplasty and facial aesthetics, known for his precision and natural results.",
      doctorArea: "Aesthetic, Plastic and Reconstructive Surgeon",
    },
    {
      imageSrc: "/img/doctors/fevzikuntererten.webp",
      doctorName: "Fevzi Kunter Erten MD",
      doctorText:
        "Dr. Fevzi Kunter Erten is a specialist in plastic surgery with expertise in face lifting, rhinoplasty, and mammoplasty.",
      doctorArea: "Aesthetic, Plastic, and Reconstructive Surgeon",
    },
    {
      imageSrc: "/img/doctors/murattezcan.webp",
      doctorName: "Murat Tezcan, MD",
      doctorText:
        "With 25+ years of experience, Dr. Murat Tezcan specializes in breast surgery, liposuction, and Mommy Makeovers.",
      doctorArea: "Aesthetic, Plastic, and Reconstructive Surgeon",
    },
    {
      imageSrc: "/img/doctors/omerbuhsem.webp",
      doctorName: "Ömer Buhşem, MD",
      doctorText:
        "Dr. Ömer Buhşem has 20+ years of experience and specializes in rhinoplasty, filler injections, and breast augmentation.",
      doctorArea: "Aesthetic, Plastic, and Reconstructive Surgeon",
    },
    {
      imageSrc: "/img/doctors/seziceylan.webp",
      doctorName: "Sezi Ceylan, MD",
      doctorText:
        "With 10+ years of experience, Dr. Sezi Ceylan specializes in various reconstructive and aesthetic surgeries.",
      doctorArea: "Aesthetic, Plastic and Reconstructive Surgeon",
    },
    {
      imageSrc: "/img/doctors/ismailmuratonyedi.webp",
      doctorName: "İsmail Murat Onyedi, MD",
      doctorText:
        "With 15+ years of experience, Dr. İsmail Murat Onyedi specializes in aesthetic and reconstructive surgeries.",
      doctorArea: "Aesthetic, Plastic and Reconstructive Surgeon",
    },
    {
      imageSrc: "/img/doctors/cagataygungorsun.webp",
      doctorName: "Çağatay Güngörsün, MD",
      doctorText:
        "Dr. Çağatay Güngörsün has 15+ years of experience, specializing in anti-aging treatments like French Thread Lift and Spider Web technique.",
      doctorArea: "Medical Aesthetic Physician",
    },
    {
      imageSrc: "/img/doctors/ginamoret.webp",
      doctorName: "Gina Moret, MD",
      doctorText:
        "Dr. Gina Moret has over 15 years of experience in aesthetic medicine, specializing in facial harmonization, fillers, and regenerative treatments.",
      doctorArea: "Medical Aesthetic Physician",
    },
    {
      imageSrc: "/img/doctors/metintekcan.webp",
      doctorName: "Metin Tekcan, MD",
      doctorText:
        "Dr. Metin Tekcan, with 20 years of experience, is known for his expertise in GETAT and cupping treatments.",
      doctorArea: "Medical Aesthetic Physician",
    },
    {
      imageSrc: "/img/doctors/aysunuysalsoylu.webp",
      doctorName: "Aysun Uysal Soylu, MD",
      doctorText:
        "With 10+ years of experience, Dr. Aysun Uysal specializes in medical aesthetics, including Botox, fillers, and lifting procedures.",
      doctorArea: "Medical Aesthetic Physician",
    },
    {
      imageSrc: "/img/doctors/aliekberyurekli.webp",
      doctorName: "Ali Ekber Yürekli, MD",
      doctorText:
        "Dr. Ali Ekber Yürekli has 15+ years of experience in hair transplants, specializing in Organic Hair Transplant, FUE, and DHI techniques, helping patients regain healthy, youthful hair.",
      doctorArea: "Hair Transplant Specialist",
    },
    {
      imageSrc: "/img/doctors/irfantarhan.webp",
      doctorName: "İrfan Tarhan, MD",
      doctorText:
        "With 25+ years of experience, Dr. İrfan Tarhan specializes in women’s health, focusing on genital beautification and reproductive-assisted therapy.",
      doctorArea: "Gynecology and Obstetrics Specialist",
    },
    {
      imageSrc: "/img/doctors/barisnuhoglu.webp",
      doctorName: "Prof. Dr. Barış Nuhoğlu",
      doctorText:
        "With over 30+ years of experience, Dr. Barış Nuhoğlu specializes in penis-related medical and aesthetic procedures.",
      doctorArea: "Urology Specialist",
    },
    {
      imageSrc: "/img/doctors/kubrademir.webp",
      doctorName: "Dt. Kübra Demir",
      doctorText:
        "Dt. Kübra Demir, with 5+ years of experience, specializes in restoring smiles through teeth whitening, dental implants, and Hollywood Smile makeovers.",
      doctorArea: "Dentist",
    },
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between ">
        <div className="w-full md:w-2/5  flex flex-col items-center">
          <Comparison
            buttonProps={buttonsData}
            comparisonData={comparisonData}
            onButtonClick={handleButtonClick}
          />
        </div>
        <div className="w-full md:w-3/5 flex flex-col items-center">
          <HeroDynamic
            heroBg={heroBgData[stateKey]?.src || heroBgData.hero1.src}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between mt-10 items-stretch">
        <div className="w-full md:w-[70%] flex flex-col rounded-[25px] border-2 bg-[#d0eeec] border-[#d0eeec]">
          <div className="flex flex-1">
            <div className="md:w-[57%] rounded-l-[25px] border-2 border-[#d0eeec]">
              <Gallery
                activestateKey={stateKey}
                GalleryImgsData={GalleryImgsData}
              />
            </div>
            <div className="md:w-[43%] pt-[20px] bg-[#d0eeec] rounded-r-[25px] border-2 border-[#d0eeec]">
              {/* Pass dynamic FAQ items to Collapse */}
              <Collapse
                expandIcon={({ isActive }) => (
                  <DownCircleOutlined
                    style={{
                      color: "#13a89e",
                      fontSize: "25px",
                      border: 0,
                    }}
                    rotate={isActive ? 180 : 0}
                  />
                )}
                expandIconPosition="end"
                bordered={false}
                accordion
                items={faqItems} // Use dynamic faqItems
                className="rounded-[25px] border-2 border-[#abd7d4] bg-[#d0eeec]"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-[30%] flex flex-col">
          <OperationForm />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between mt-10 gap-[20px]">
        <div className="w-full md:w-2/5 ">
          <Doctors doctorDescription={doctorsData}></Doctors>
        </div>
        <div className="w-full md:w-2/5 flex-grow flex">
          <Testimonials stateKey={stateKey} testimonialsData={testimonialsData} />
        </div>
        <div className="w-1/5 overflow-x-hidden" >
        <Location/>
        </div>
      </div>


    </div>
  );
}
