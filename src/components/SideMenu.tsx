"use client";

import React, { useState } from "react";
import { Button } from "antd";
import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons";

export default function SideMenu({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-50 h-screen">
      <div
        className={`h-full fixed right-0 top-0 xl:w-1/3 lg:w-2/5 md:w-3/4 sm:w-5/6 bg-[#f0f0f0] transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <Button
          className="z-50 absolute left-[-50px] top-1/2 transform -translate-y-1/2 bg-orange-600 text-white p-6 rounded-r-md"
          onClick={toggleSidebar}>
          {isOpen ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
        </Button>
        <div className="overflow-y-scroll h-full">
          <div className="mx-2 text-white">{children}</div>
        </div>
      </div>
    </div>
  );
}
