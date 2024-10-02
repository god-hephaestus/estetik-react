import Contact from "@/components/spaghetti2/Contact";
import Doctors from "@/components/spaghetti2/Doctors";
import Location from "@/components/spaghetti2/Location";
import OperationForm from "@/components/spaghetti2/OperationForm";
import ParentState from "@/components/spaghetti2/ParentState";
import VideoLibrary from "@/components/spaghetti2/VideoLibrary";
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
    {
      src: "/BeforeAfter/gallery/breast/Meme - 2.webp",
      alt: "Breast Surgery",
    },
    {
      src: "/BeforeAfter/gallery/breast/Meme - 3.webp",
      alt: "Breast Surgery",
    },
    {
      src: "/BeforeAfter/gallery/breast/Meme - 4.webp",
      alt: "Breast Surgery",
    },
    {
      src: "/BeforeAfter/gallery/breast/Meme - 5.webp",
      alt: "Breast Surgery",
    },
  ],
  gallery2: [
    {
      src: "/BeforeAfter/gallery/bbl/Bbl - 1.webp",
      alt: "BBL",
    },
    {
      src: "/BeforeAfter/gallery/bbl/Bbl - 2.webp",
      alt: "BBL",
    },
    {
      src: "/BeforeAfter/gallery/bbl/Bbl - 3.webp",
      alt: "BBL",
    },
    {
      src: "/BeforeAfter/gallery/bbl/Bbl - 4.webp",
      alt: "BBL",
    },
    {
      src: "/BeforeAfter/gallery/bbl/Bbl - 6.webp",
      alt: "BBL",
    },
  ],
  gallery3: [
    {
      src: "/BeforeAfter/gallery/total/Total - 1.webp",
      alt: "Total Body",
    },
    {
      src: "/BeforeAfter/gallery/total/Total - 2.webp",
      alt: "Total Body",
    },
    {
      src: "/BeforeAfter/gallery/total/Total - 3.webp",
      alt: "Total Body",
    },
    {
      src: "/BeforeAfter/gallery/total/Total - 4.webp",
      alt: "Total Body",
    },
    {
      src: "/BeforeAfter/gallery/total/Total - 5.webp",
      alt: "Total Body",
    },
    {
      src: "/BeforeAfter/gallery/total/Total - 6.webp",
      alt: "Total Body",
    },
  ],
};
const testimonialsData = {
  gallery1: [
    {
      name: "Yekaterina K.",
      operation: "Breast Augmentation",
      message:
        "My breast augmentation went perfectly! The staff were incredibly professional and friendly, making the whole experience comfortable from start to finish.",
      imageSrc: "women/testimonialImage1.webp",
    },
    {
      name: "Olha B.",
      operation: "Mammoplasty",
      message:
        "I had mammoplasty and couldn’t be happier with the results. The care I received was top-notch!",
      imageSrc: "women/testimonialImage2.webp",
    },
    {
      name: "Irina S.",
      operation: "Breast Lift",
      message:
        "I did a breast lift, and the entire process was smooth. The care was amazing, and I felt well supported.",
      imageSrc: "women/testimonialImage3.webp",
    },
    {
      name: "Maria J.",
      operation: "Breast Reduction",
      message:
        "I had a breast reduction, and the results were beyond my expectations. The doctors were exceptionally skilled.",
      imageSrc: "women/testimonialImage4.webp",
    },
    {
      name: "Begüm K.",
      operation: "Breast Augmentation",
      message:
        "I had breast augmentation and am thrilled with the results. The staff was caring and professional. Special thanks to Tahir and Sabir for their support.",
      imageSrc: "women/testimonialImage5.webp",
    },
    {
      name: "Katrina S.",
      operation: "Breast Augmentation",
      message:
        "I had breast augmentation and the surgery was quick with a smooth recovery. After 10 days, the pain was almost gone, and now, three months later, I love the results!",
      imageSrc: "women/testimonialImage6.webp",
    },
    {
      name: "Elena J.",
      operation: "Breast Augmentation",
      message:
        "My breast augmentation was a great value for the service I received. The process from consultation to recovery was smooth, and the room and food services were excellent!",
      imageSrc: "women/testimonialImage7.webp",
    },
    {
      name: "Natasha D.",
      operation: "Breast Augmentation",
      message:
        "After my breast augmentation, I felt well cared for, especially during the consultation and aftercare. Great experience!",
      imageSrc: "women/testimonialImage8.webp",
    },
    {
      name: "Cathy K.",
      operation: "Breast Lift and Thread Lift",
      message:
        "I had a breast lift and facial thread lift. The results are great, with smooth healing and minimal scarring. The staff was supportive and professional. Highly recommend Estetik International.",
      imageSrc: "women/testimonialImage9.webp",
    },
    {
      name: "Sena U.",
      operation: "Breast Implants",
      message:
        "The best doctors in Turkey are here. The surgery was very simple, and the recovery time was shorter than expected. Thank you so much!",
      imageSrc: "women/testimonialImage10.webp",
    },
  ],
  gallery2: [
    {
      name: "Gabriella T.",
      operation: "BBL",
      message:
        "I had a Brazilian Butt Lift (BBL) and am very happy with the results. The team, especially Dr. Bülent, and Tahir made the entire process smooth and comfortable.",
      imageSrc: "women/testimonialImage1.webp",
    },
    {
      name: "Victoria L.",
      operation: "BBL",
      message:
        "Despite my concerns, Estetik International provided the best care for my BBL. The team was positive and professional.",
      imageSrc: "women/testimonialImage2.webp",
    },
    {
      name: "Kvitalina R.",
      operation: "BBL",
      message:
        "I had a BBL and breast augmentation with Dr. Omer, and the results are beyond my expectations! I love my new shape.",
      imageSrc: "women/testimonialImage3.webp",
    },
    {
      name: "Nurgül Z.",
      operation: "BBL and Liposuction",
      message:
        "BBL and liposuction with Dr. Kunter gave me my dream body! The results look so natural, and the clinic’s team was supportive from start to finish. Highly recommend!",
      imageSrc: "women/testimonialImage4.webp",
    },
    {
      name: "Ariana P.",
      operation: "BBL and Breast Augmentation",
      message:
        "Dr. B performed my BBL and breast surgery, and I couldn’t be more thrilled! Entire experience was smooth and professional!",
      imageSrc: "women/testimonialImage5.webp",
    },
    {
      name: "Natalya A.",
      operation: "BBL",
      message:
        "I had a full body lift at Estetik International. Dr. Yavuz and the team were incredibly professional, and the results are stunning. Special thanks to Sabir for his amazing support!",
      imageSrc: "women/testimonialImage6.webp",
    },
    {
      name: "Jennifer T.",
      operation: "BBL",
      message:
        "I had a BBL two months ago and am thrilled with the results. Big thanks to Estetik International team for their work and to Berk for organizing everything. I highly recommend this clinic and can’t wait for my tummy tuck next year!",
      imageSrc: "women/testimonialImage7.webp",
    },
    {
      name: "Elif D.",
      operation: "BBL and Liposuction",
      message:
        "The clinic you want to return to! Everything is at the highest level. An attentive doctors with a sincere kind smile, professionals in their field.",
      imageSrc: "women/testimonialImage8.webp",
    },
    {
      name: "Yevgeniya S.",
      operation: "BBL and Breast Augmentation",
      message:
        "I had a BBL and breast augmentation with Dr. Omer, and the results are amazing! Tahir ensured everything was smooth and professional.",
      imageSrc: "women/testimonialImage9.webp",
    },
    {
      name: "Anastasia P.",
      operation: "BBL and Liposuction",
      message:
        "BBL and liposuction with Dr. Kunter gave me natural results. Tahir and Sabir provided great support throughout the process.",
      imageSrc: "women/testimonialImage10.webp",
    },
  ],
  gallery3: [
    {
      name: "Daniela A.",
      operation: "Total Body Reshaping and Spider Web Aesthetic",
      message:
        "Thanks to Dr. B and team for transforming my body! The Spider Web & Total Body results are stunning. Amazing clinic and staff. Highly recommend to my friends!",
      imageSrc: "women/testimonialImage1.webp",
    },
    {
      name: "Dilek S.",
      operation: "Total Body Reshaping",
      message:
        "I had an incredible experience with Dr. Bülent and his team. The surgery was smooth, the staff was supportive, and the hospital felt like a five-star hotel. I’m beyond happy with the results!",
      imageSrc: "women/testimonialImage2.webp",
    },
    {
      name: "Emily S.",
      operation: "Total Body Reshaping",
      message:
        "I had a full body contouring, and the results were amazing! The team was supportive, and my recovery was faster than expected.",
      imageSrc: "women/testimonialImage3.webp",
    },
    {
      name: "Esther D.",
      operation: "Total Body Reshaping",
      message:
        "Everything was done 100%. I felt save and the nurses and team were wonderful. Dr. Bulent was my Chirurg, he did an amazing job. I am very glad and happy.",
      imageSrc: "women/testimonialImage4.webp",
    },
    {
      name: "Hilal Ş.",
      operation: "Total Body Reshaping",
      message:
        "Thank you Dr. B, I'm very satisfied about my surgry, you are not only great Doctor but also great human",
      imageSrc: "women/testimonialImage5.webp",
    },
    {
      name: "Sophia R.",
      operation: "Total Body Reshaping",
      message:
        "I’m beyond happy with my Total Body Reshaping treatment! Hospital's team is exceptional, and the results are flawless.",
      imageSrc: "women/testimonialImage6.webp",
    },
    {
      name: "Zeynep D.",
      operation: "Total Body Reshaping",
      message:
        "Top professionalism in here. Every single player from the Staff is with great heart. Rooms are single and equiped with best tools to deliver the job. Recommend to whoever not decided yet",
      imageSrc: "women/testimonialImage7.webp",
    },
    {
      name: "Maria T.",
      operation: "Total Body Reshaping",
      message:
        "I did body contouring, and the results are stunning. The staff made me feel at ease, and everything went smoothly.",
      imageSrc: "women/testimonialImage8.webp",
    },
    {
      name: "Francesca J.",
      operation: "Total Body Reshaping",
      message:
        "I’m very happy with the service at Estetik International. The clinic is excellent, and all my aesthetic procedures were successful. Thank you!",
      imageSrc: "women/testimonialImage9.webp",
    },
    {
      name: "Isabel R.",
      operation: "Total Body Reshaping",
      message:
        "I was very happy with my surgery at Estetik. The doctor and staff were great, and Tahir and Eyub provided excellent support throughout. The nurses were also very attentive. Thank you to the whole team!",
      imageSrc: "women/testimonialImage10.webp",
    },
  ],
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
    <div className="overflow-x-hidden">
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
        <VideoLibrary></VideoLibrary>
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
    </div>
  );
}
