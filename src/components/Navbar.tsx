import {
  MessageOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import Image from "next/image";
import ComparisonButtons from "./ComparisonButtons";

export default function Navbar({
  buttonProps,
  comparisonData,
  onButtonClick,
}: {
  buttonProps: Array<{
    label: string;
    image1: string;
    image2: string;
    faqs: Array<{ question: string; answer: string }>;
    stateKey: string;
  }>;
  comparisonData: {
    label: string;
    image1: string;
    image2: string;
    faqs: Array<{ question: string; answer: string }>;
    stateKey: string;
  };
  onButtonClick: (newComparisonData: {
    label: string;
    image1: string;
    image2: string;
    faqs: Array<{ question: string; answer: string }>;
    stateKey: string;
  }) => void;
}) {
  return (
    <div className="w-full bg-white flex flex-wrap lg:flex-row flex-col items-center py-0 lg:py-0 sticky top-0 z-[100] px-8 xl:px-[10%]">
      <div className="w-full flex justify-center lg:justify-start lg:py-1 order-2 lg:order-1 lg:w-[45%] mb-2 lg:my-0 ">
        <ComparisonButtons
          buttonProps={buttonProps}
          comparisonData={comparisonData}
          onButtonClick={onButtonClick}
        />
      </div>
      <div className="flex w-full lg:w-[55%] mt-3 lg:mt-0 items-center order-1 lg:order-2 justify-between">
        <div className="flex items-center justify-start ">
          <Image
            src="/img/estintlogo25.webp"
            alt="Logo"
            width={150}
            height={75}
          />
        </div>
        <div className="flex justify-end items-center gap-3 border-[#13a89e] p-1 border rounded-[25px] lg:border-0 xl:gap-4">
          <Button
            className="h-[90%] sm:h-[70%] bg-[#22c55e] p-[5px] lg:px-3 lg:py-3 rounded-[25px] flex items-center justify-center"
            target="_blank"
            href="https://wa.me/905498287202?text=RCT01%20Hello%20Estetik%20International%20Health%20Group%20Team.%20Can%20I%20book%20a%20consultation%3F"
          >
            <span className="flex items-center gap-2">
              <span className="hidden lg:flex">WhatsApp</span>
              <WhatsAppOutlined className="text-white text-2xl lg:text-3xl" />
            </span>
          </Button>
          <Button
            className="h-[90%] sm:h-[70%] bg-[#4060f8] p-[5px] lg:px-3 lg:py-3 rounded-[25px] flex items-center justify-center"
            target="_blank"
            href="https://bcrw.apple.com/urn:biz:968dfb5d-99a1-4978-a269-cb52d58c7c18"
          >
            <span className="flex items-center gap-2">
              <span className="hidden lg:flex">iMessage</span>
              <MessageOutlined className="text-white text-2xl lg:text-3xl" />
            </span>
          </Button>
          <Button
            className="h-[90%] sm:h-[70%] bg-[#ea580c] p-[5px] lg:px-3 lg:py-3 rounded-[25px] flex items-center justify-center"
            href="tel:+902169001899"
          >
            <span className="flex items-center gap-2">
              <span className="hidden lg:flex">Call Us</span>
              <PhoneOutlined className="text-white text-2xl lg:text-3xl" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
