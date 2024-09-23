"use client";

import React from "react";
import { Carousel, Typography } from "antd";
import Image from "next/image";

const { Title } = Typography;

interface Doctor {
  imageSrc: string;
  doctorName: string;
  doctorText: string;
}

interface DoctorsProps {
  doctorDescription: Doctor[];
}

export default function Doctors({ doctorDescription }: DoctorsProps) {
  return (
    <Carousel arrows={true} infinite={true}>
      {doctorDescription.map((doctor, index) => (
        <div key={index} className="flex items-center h-[300px] gap-[20px]">
          <div className="flex-1 h-full relative">
            <Image
              src={doctor.imageSrc}
              alt={doctor.doctorName}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex-1">
            <Title level={4}>{doctor.doctorName}</Title>
            <p>{doctor.doctorText}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
