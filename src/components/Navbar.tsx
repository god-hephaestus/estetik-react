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
    <div className="w-full bg-white flex flex-wrap lg:flex-row flex-col items-center py-0 sticky top-0 z-[100] px-4 xl:px-[5%]">
      <div className="w-full flex justify-center lg:justify-start lg:py-1 lg:w-[45%]">
        <ComparisonButtons
          buttonProps={buttonProps}
          comparisonData={comparisonData}
          onButtonClick={onButtonClick}
        />
      </div>
      <div className="flex w-full lg:w-[55%] items-center justify-between lg:justify-center">
        <div className="flex items-center justify-start h-full">
          <Image
            src="/img/estintlogo25.webp"
            alt="Logo"
            width={120}
            height={60}
          />
        </div>
        <div className="flex flex-1 justify-end items-center gap-2 xl:gap-4">
          <Button
            className="h-[90%] sm:h-[70%] bg-[#25D366] px-2 py-2 lg:py-1 rounded-[25px] flex items-center justify-center"
            target="_blank"
            href="https://wa.me/905498287202?text=YDG3400EE%20Hello%20Estetik%20International%20Health%20Group%20Team.%20Can%20I%20book%20a%20consultation%3F"
          >
            <span className="flex items-center gap-2">
              <span className="hidden lg:flex">WhatsApp</span>
              <WhatsAppOutlined className="text-white text-3xl" />
            </span>
          </Button>
          <Button
            className="h-[90%] sm:h-[70%] bg-[#424864] px-2 py-2 lg:py-1 rounded-[25px] flex items-center justify-center"
            target="_blank"
            href="https://wa.me/905498287202?text=YDG3400EE%20Hello%20Estetik%20International%20Health%20Group%20Team.%20Can%20I%20book%20a%20consultation%3F"
          >
            <span className="flex items-center gap-2">
              <span className="hidden lg:flex">iMessage</span>
              <MessageOutlined className="text-white text-3xl" />
            </span>
          </Button>
          <Button
            className="h-[90%] sm:h-[70%] bg-orange-600 px-2 py-2 lg:py-1 rounded-[25px] flex items-center justify-center"
            href="https://wa.me/905498287202?text=YDG3400EE%20Hello%20Estetik%20International%20Health%20Group%20Team.%20Can%20I%20book%20a%20consultation%3F"
          >
            <span className="flex items-center gap-2">
              <span className="hidden lg:flex">Call Us</span>
              <PhoneOutlined className="text-white text-3xl" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
