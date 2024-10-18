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
    <Carousel arrows={true} infinite={true} draggable>
      {doctorDescription.map((doctor, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row items-center h-auto lg:h-[300px] gap-[20px] mx-0 pr-4 lg:pr-10 bg-[#d0eeec] border-2 border-[#d0eeec] rounded-[25px] "
        >
          <div className="flex-1 h-full relative object-contain">
            <Image
              src={doctor.imageSrc}
              alt={doctor.doctorName}
              // sizes="(max-width: 768px) 90vw, (max-width: 1200px) 15vw, 70vw"
              fill
            />
          </div>
          <div className="flex-1 md:p-4 md:mr-2 ">
            <Title level={3}>{doctor.doctorName}</Title>
            <div className="flex md:py-2">
              <MedicineBoxOutlined className="text-[#0a5b56] text-2xl md:mr-4 mr-2" />
              <p className="text-[#0a5b56] font-bold">{doctor.doctorArea}</p>
            </div>
            <p className="my-2 ">{doctor.doctorText}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
