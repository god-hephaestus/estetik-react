import { PhoneOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function Contact() {
  return (
    <>
      <div className="flex md:space-x-1 lg:space-x-3 justify-center">
        <Button
          className="h-auto bg-green-500 px-2 py-0"
          target="_blank"
          href="https://wa.me/905498287202?text=YDG3400EE%20Hello%20Estetik%20International%20Health%20Group%20Team.%20Can%20I%20book%20a%20consultation%3F">
          WhatsApp
          <WhatsAppOutlined className="text-white text-4xl p-1" />
        </Button>
        <Button
          className="h-auto bg-orange-600 px-2 py-0"
          href="https://wa.me/905498287202?text=YDG3400EE%20Hello%20Estetik%20International%20Health%20Group%20Team.%20Can%20I%20book%20a%20consultation%3F">
          Call Us
          <PhoneOutlined className="text-white text-4xl p-1" />
        </Button>
      </div>
    </>
  );
}
