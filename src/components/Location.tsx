import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  TikTokFilled,
  YoutubeFilled,
} from "@ant-design/icons";

export default function Location() {
  return (
    <div>
      <div className="w-full flex">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96261.059544503!2d28.856770992279056!3d41.065536419891714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac64c07925733%3A0x96ea14ba8be2cdb6!2sEstetik%20International!5e0!3m2!1sen!2str!4v1718963674578!5m2!1sen!2str"
          loading="lazy"
          className="w-[90%] h-auto px-5 rounded-[2rem]"></iframe>
        <div className="flex flex-col lg:justify-center w-[10%]">
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
        className="h-auto p-5 w-full rounded-[2rem]"
        src="/video/slider.mp4"
        controls
        poster="/img/dental2.png"></video>
    </div>
  );
}
