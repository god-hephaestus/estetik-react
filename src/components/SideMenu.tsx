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
        className={`h-full fixed right-0 top-0 xl:w-1/3 lg:w-2/5 md:w-1/2 sm:w-2/3 w-full bg-[#f0f0f0] transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <Button
          className="z-50 absolute left-[-30px] top-1/2 transform -translate-y-1/2 bg-orange-600 text-white py-6 px-3 rounded-r-md"
          onClick={toggleSidebar}>
          {isOpen ? (
            <DoubleRightOutlined className="text-xl" />
          ) : (
            <DoubleLeftOutlined className="text-xl" />
          )}
        </Button>
        <div className="overflow-y-scroll h-full">
          <div className="mx-2 text-white">{children}</div>
        </div>
      </div>
    </div>
  );
}
