import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  TikTokFilled,
  YoutubeFilled,
} from "@ant-design/icons";
export default function Location() {
  return (
    <div className="object-contain h-full lg:h-[280px] xl:h-[250px] z-40 flex flex-col ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10133147.836277347!2d29.356114206454567!3d42.49165901949489!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac64c07925733%3A0x96ea14ba8be2cdb6!2sEstetik%20International!5e0!3m2!1sen!2str!4v1726670444497!5m2!1sen!2str"
        loading="lazy"
        className="h-[180px] lg:h-[80%] w-full rounded-[25px] border-2 border-[#13a89e] lg:border-none z-40 mx-auto"
      ></iframe>
      <div className="flex flex-row justify-around w-full bg-white border border-[#13a89e] rounded-[25px] mt-4 lg:mt-auto">
        <a
          target="_blank"
          href="https://www.instagram.com/estetikinternational/"
          title="Instagram"
          rel="noopener noreferrer"
        >
          <InstagramFilled className="text-4xl  text-[#7ac8c3]" />
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/estetikinternational"
          title="Facebook"
          rel="noopener noreferrer"
        >
          <FacebookFilled className="text-4xl text-[#7ac8c3]" />
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/@EstetikInternationalcomtr"
          title="YouTube"
          rel="noopener noreferrer"
        >
          <YoutubeFilled className="text-4xl text-[#7ac8c3]" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/company/5168206/"
          title="LinkedIn"
          rel="noopener noreferrer"
        >
          <LinkedinFilled className="text-4xl text-[#7ac8c3]" />
        </a>
        <a
          target="_blank"
          href="https://www.tiktok.com/@estetik.international"
          title="TikTok"
          rel="noopener noreferrer"
        >
          <TikTokFilled className="text-4xl text-[#7ac8c3]" />
        </a>
      </div>
    </div>
  );
}
