import {
  DoubleRightOutlined,
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  TikTokFilled,
  YoutubeFilled,
} from "@ant-design/icons";

export default function Location() {
  return (
    <div className="object-contain h-full lg:mt-0 z-40">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10133147.836277347!2d29.356114206454567!3d42.49165901949489!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac64c07925733%3A0x96ea14ba8be2cdb6!2sEstetik%20International!5e0!3m2!1sen!2str!4v1726670444497!5m2!1sen!2str"
        loading="lazy"
        className="h-[180px] lg:h-[80%] w-full rounded-[25px] border-2 border-[#13a89e] lg:border-none z-40 mx-auto"
      ></iframe>
      <div className="flex flex-row justify-around w-full items-end bg-[#D0EEEC] border border-[#13a89e]  rounded-[25px] mt-4">
        <a
          target="_blank"
          href="https://www.instagram.com/estetikinternational/"
          title="Instagram"
          rel="noopener noreferrer"
        >
          <InstagramFilled style={{ fontSize: "40px", color: "#7ac8c3" }} />
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/estetikinternational"
          title="Facebook"
          rel="noopener noreferrer"
        >
          <FacebookFilled style={{ fontSize: "40px", color: "#7ac8c3" }} />
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/@EstetikInternationalcomtr"
          title="YouTube"
          rel="noopener noreferrer"
        >
          <YoutubeFilled style={{ fontSize: "40px", color: "#7ac8c3" }} />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/company/5168206/"
          title="LinkedIn"
          rel="noopener noreferrer"
        >
          <LinkedinFilled style={{ fontSize: "40px", color: "#7ac8c3" }} />
        </a>
        <a
          target="_blank"
          href="https://www.tiktok.com/@estetik.international"
          title="TikTok"
          rel="noopener noreferrer"
        >
          <TikTokFilled style={{ fontSize: "40px", color: "#7ac8c3" }} />
        </a>
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex w-full justify-center pt-4"
      >
        <DoubleRightOutlined className="lg:hidden text-[#13a89e] -rotate-90 text-4xl" />
      </button>
    </div>
  );
}
