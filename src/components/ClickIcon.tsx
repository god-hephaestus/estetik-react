import Image from "next/image";
import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import iconUrl from "/public/img/click-icon.png";

interface ClickIconProps extends Partial<CustomIconComponentProps> {
  wobble?: boolean;
}

export default function ClickIcon({ wobble, ...props }: ClickIconProps) {
  return (
    <span
      {...props}
      className={`relative inline-flex items-center justify-center w-[1em] h-[1em] leading-[1em] ${
        wobble ? "animate-wobble" : ""
      }`}
      style={{ animation: wobble ? "wobble 2s ease-in-out infinite" : "none" }}
    >
      <Image
        src={iconUrl}
        alt="Click Icon"
        className="absolute inset-0 object-contain"
        sizes="(max-width: 768px) 1em, 0px"
      />
      <style jsx>{`
        @keyframes wobble {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(30deg);
          }
          75% {
            transform: rotate(-30deg);
          }
        }
      `}</style>
    </span>
  );
}
