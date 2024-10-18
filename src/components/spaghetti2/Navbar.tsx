import {
  MessageOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full h-[10%] bg-white flex flex-row sticky top-0 z-50 mb-2 lg:mb-0">
      <div className="hidden md:flex justify-start">
        <Image
          src="/img/estintlogo25.webp"
          alt="Logo"
          width={160}
          height={80}
          className="h-auto ml-4 md:ml-8 lg:ml-32"
        />
      </div>

      <div className="flex-grow"></div>

      <div className="flex flex-row justify-end items-center gap-6 lg:gap-8 mr-4 lg:mr-32">
        <Button
          className="h-[90%] sm:h-[70%] bg-[#25D366] px-2 py-1 sm:py-0 rounded-[25px]"
          target="_blank"
          href="https://wa.me/905498287202?text=YDG3400EE%20Hello%20Estetik%20International%20Health%20Group%20Team.%20Can%20I%20book%20a%20consultation%3F"
        >
          WhatsApp
          <WhatsAppOutlined className="text-white text-2xl sm:text-3xl md:text-4xl p-1" />
        </Button>
        <Button
          className="h-[90%] sm:h-[70%] bg-[#424864] px-2 py-1 sm:py-0 rounded-[25px]"
          target="_blank"
          href="https://wa.me/905498287202?text=YDG3400EE%20Hello%20Estetik%20International%20Health%20Group%20Team.%20Can%20I%20book%20a%20consultation%3F"
        >
          iMessage
          <MessageOutlined className="text-white text-2xl sm:text-3xl md:text-4xl p-1" />
        </Button>
        <Button
          className="h-[90%] sm:h-[70%] bg-orange-600 px-2 py-1 sm:py-0 rounded-[25px]"
          href="https://wa.me/905498287202?text=YDG3400EE%20Hello%20Estetik%20International%20Health%20Group%20Team.%20Can%20I%20book%20a%20consultation%3F"
        >
          Call Us
          <PhoneOutlined className="text-white text-2xl sm:text-3xl md:text-4xl p-1" />
        </Button>
      </div>
    </div>
  );
}
