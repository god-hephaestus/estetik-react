"use client";

import React, { useState } from "react";
import { Divider } from "antd";
import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons";

export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative z-50">
      {/* Sidebar */}
      <div
        className={`h-screen w-1/2 bg-black fixed right-0 top-0 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        {/* Button to toggle the sidebar */}
        <button
          className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 bg-orange-600 text-white px-3 py-2 rounded-l-md round"
          onClick={toggleSidebar}>
          {isOpen ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
        </button>

        {/* Sidebar content */}
        <div className="mx-2"></div>
        <Divider className="p-2" />
        <div className="mx-2"></div>
        <Divider className="p-2" />
        <div className="mx-2"></div>
        <Divider className="p-2" />
        <div className="mx-2"></div>
      </div>
    </div>
  );
}
