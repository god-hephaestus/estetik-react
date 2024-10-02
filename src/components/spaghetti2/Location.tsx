import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  TikTokFilled,
  YoutubeFilled,
} from "@ant-design/icons";

export default function Location() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="flex w-full max-w-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10133147.836277347!2d29.356114206454567!3d42.49165901949489!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac64c07925733%3A0x96ea14ba8be2cdb6!2sEstetik%20International!5e0!3m2!1sen!2str!4v1726670444497!5m2!1sen!2str"
          loading="lazy"
          className="w-[90%] h-[250px] px-5"></iframe>
        <div className="flex flex-col lg:justify-center w-[10%] overflow-x-hidden">
          <a
            target="_blank"
            href="https://www.instagram.com/estetikinternational/"
            title="Instagram"
            rel="noopener noreferrer">
            <InstagramFilled style={{ fontSize: "40px", color: "#E1306C" }} />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/estetikinternational"
            title="Facebook"
            rel="noopener noreferrer">
            <FacebookFilled style={{ fontSize: "40px", color: "#1877F2" }} />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/@EstetikInternationalcomtr"
            title="YouTube"
            rel="noopener noreferrer">
            <YoutubeFilled style={{ fontSize: "40px", color: "#FF0000" }} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/5168206/"
            title="LinkedIn"
            rel="noopener noreferrer">
            <LinkedinFilled style={{ fontSize: "40px", color: "#0A66C2" }} />
          </a>
          <a
            target="_blank"
            href="https://www.tiktok.com/@estetik.international"
            title="TikTok"
            rel="noopener noreferrer">
            <TikTokFilled style={{ fontSize: "40px", color: "#010101" }} />
          </a>
        </div>
      </div>
      <video
        className="h-auto p-5 w-full rounded-[2rem] max-w-[400px]"
        src="/video/slider.mp4"
        controls
        poster="/img/dental2.png"></video>
    </div>
  );
}
