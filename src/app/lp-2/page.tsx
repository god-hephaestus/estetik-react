import { Metadata } from "next";
import Doctors from "@/components/spaghetti/Doctors";

export const metadata: Metadata = {
  title: "LP 2",
  description: "LP Description",
};

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
export default function Page() {
  return (
    <>
      <Doctors doctorDescription={doctorsData}></Doctors>
    </>
  );
}
