import {
  MessageOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import Image from "next/image";
import ComparisonButtons from "./ComparisonButtons"; // Import the ComparisonButtons component

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
    <div className="w-full bg-white flex flex-wrap items-center py-4 sticky top-0 z-50">
      <div className="w-full lg:w-auto flex lg:flex-1 justify-between lg:justify-start">
        <div className="flex justify-center lg:justify-start">
          <Image
            src="/img/estintlogo25.webp"
            alt="Logo"
            width={160}
            height={80}
          />
        </div>
        <div className="flex justify-end gap-6 lg:hidden">
          <Button
            className="h-[90%] sm:h-[70%] bg-[#25D366] px-2 py-1 rounded-[25px] flex items-center justify-center"
            target="_blank"
            href="https://wa.me/905498287202?text=YDG3400EE%20Hello%20Estetik%20International%20Health%20Group%20Team.%20Can%20I%20book%20a%20consultation%3F"
          >
            <span className="flex items-center gap-2">
              <span className="hidden lg:flex">WhatsApp</span>
              <WhatsAppOutlined className="text-white text-2xl sm:text-3xl md:text-4xl" />
            </span>
          </Button>
          <Button
            className="h-[90%] sm:h-[70%] bg-[#424864] px-2 py-1 rounded-[25px] flex items-center justify-center"
            target="_blank"
            href="https://wa.me/905498287202?text=YDG3400EE%20Hello%20Estetik%20International%20Health%20Group%20Team.%20Can%20I%20book%20a%20consultation%3F"
          >
            <span className="flex items-center gap-2">
              <span className="hidden lg:flex">iMessage</span>
              <MessageOutlined className="text-white text-2xl sm:text-3xl md:text-4xl" />
            </span>
          </Button>
          <Button
            className="h-[90%] sm:h-[70%] bg-orange-600 px-2 py-1 rounded-[25px] flex items-center justify-center"
            href="https://wa.me/905498287202?text=YDG3400EE%20Hello%20Estetik%20International%20Health%20Group%20Team.%20Can%20I%20book%20a%20consultation%3F"
          >
            <span className="flex items-center gap-2">
              <span className="hidden lg:flex">Call Us</span>
              <PhoneOutlined className="text-white text-2xl sm:text-3xl md:text-4xl" />
            </span>
          </Button>
        </div>
      </div>

      <div className="w-full flex justify-center py-1 lg:w-auto lg:flex-1">
        <ComparisonButtons
          buttonProps={buttonProps}
          comparisonData={comparisonData}
          onButtonClick={onButtonClick}
        />
      </div>

      <div className="hidden lg:flex lg:flex-1 justify-end items-center gap-6">
        <Button
          className="h-[90%] sm:h-[70%] bg-[#25D366] px-2 py-1 rounded-[25px] flex items-center justify-center"
          target="_blank"
          href="https://wa.me/905498287202?text=YDG3400EE%20Hello%20Estetik%20International%20Health%20Group%20Team.%20Can%20I%20book%20a%20consultation%3F"
        >
          <span className="flex items-center gap-2">
            <span className="hidden lg:flex">WhatsApp</span>
            <WhatsAppOutlined className="text-white text-2xl sm:text-3xl md:text-4xl" />
          </span>
        </Button>
        <Button
          className="h-[90%] sm:h-[70%] bg-[#424864] px-2 py-1 rounded-[25px] flex items-center justify-center"
          target="_blank"
          href="https://wa.me/905498287202?text=YDG3400EE%20Hello%20Estetik%20International%20Health%20Group%20Team.%20Can%20I%20book%20a%20consultation%3F"
        >
          <span className="flex items-center gap-2">
            <span className="hidden lg:flex">iMessage</span>
            <MessageOutlined className="text-white text-2xl sm:text-3xl md:text-4xl" />
          </span>
        </Button>
        <Button
          className="h-[90%] sm:h-[70%] bg-orange-600 px-2 py-1 rounded-[25px] flex items-center justify-center"
          href="https://wa.me/905498287202?text=YDG3400EE%20Hello%20Estetik%20International%20Health%20Group%20Team.%20Can%20I%20book%20a%20consultation%3F"
        >
          <span className="flex items-center gap-2">
            <span className="hidden lg:flex">Call Us</span>
            <PhoneOutlined className="text-white text-2xl sm:text-3xl md:text-4xl" />
          </span>
        </Button>
      </div>
    </div>
  );
}
