"use client";

import React, { useState } from "react";
import { Divider } from "antd";
import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons";

export default function SideMenu({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-50 border-orange-600">
      <div
        className={`h-screen w-1/3 bg-[#f0f0f0]  fixed right-0 top-0 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <button
          className="absolute left-[-30px] top-1/2 transform -translate-y-1/2  bg-orange-600 text-white px-3 py-2 rounded-l-md"
          onClick={toggleSidebar}>
          {isOpen ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
        </button>
        <div className="mx-2 text-white">{children}</div>
        <Divider />
      </div>
    </div>
  );
}
