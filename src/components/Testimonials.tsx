"use client";

import { Avatar, Typography } from "antd";
import React from "react";
const { Title } = Typography;

export default function Testimonials({
  imageSrc,
  textProps,
}: {
  imageSrc: string;
  textProps: { name: string; operation: string; message: string };
}) {
  return (
    <div
      className="shadow-lg p-5 bg-white relative"
      style={{ minHeight: "200px" }}>
      <div className="mb-10">
        <p>{textProps.message}</p>
      </div>

      <div className="absolute bottom-0 left-0 flex items-center p-5">
        <Avatar
          size={50}
          src={imageSrc}
          alt={"text"}
          draggable={false}
          shape="circle"
          className="mr-3"
        />

        <div>
          <Title level={4} className="m-0">
            {textProps.name}
          </Title>
          <p className="text-gray-500">{textProps.operation}</p>
        </div>
      </div>
    </div>
  );
}
