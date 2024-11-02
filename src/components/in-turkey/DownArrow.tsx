"use client";

import { ArrowDownOutlined } from "@ant-design/icons";

const handleScroll = () => {
  window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
};

export default function DownArrow() {
  return (
    <button
      className="arrow-bounce mx-auto flex items-center justify-center text-white"
      onClick={handleScroll}
    >
      <ArrowDownOutlined style={{ fontSize: "2rem" }} />
    </button>
  );
}
