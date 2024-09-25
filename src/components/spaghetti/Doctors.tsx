"use client";

import React from "react";
import { Carousel, Typography } from "antd";
import Image from "next/image";
import { MedicineBoxOutlined } from "@ant-design/icons";

const { Title } = Typography;

interface Doctor {
  imageSrc: string;
  doctorName: string;
  doctorArea: string;
  doctorText: string;
}

interface DoctorsProps {
  doctorDescription: Doctor[];
}

export default function Doctors({ doctorDescription }: DoctorsProps) {
  return (
    <Carousel arrows={true} infinite={true}>
      {doctorDescription.map((doctor, index) => (
        <div
          key={index}
          className="flex items-center h-[300px] gap-[20px] mx-0">
          <div className="flex-1 h-full relative">
            <Image
              src={doctor.imageSrc}
              alt={doctor.doctorName}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex-1 p-4 mr-2">
            <Title level={3}>{doctor.doctorName}</Title>
            <div className="flex">
              <MedicineBoxOutlined className="text-[#13a89e] text-2xl mr-2" />
              <p className="text-[#0a5b56]">{doctor.doctorArea}</p>
            </div>
            <p>{doctor.doctorText}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
