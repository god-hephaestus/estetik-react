import React from "react";
import { Carousel, Typography } from "antd";
import Image from "next/image";
import { LeftCircleFilled, MedicineBoxOutlined, RightCircleFilled } from "@ant-design/icons";

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
    <Carousel arrows={true} infinite={true} draggable >
      {doctorDescription.map((doctor, index) => (
        <div
          key={index}
          className="flex items-center h-[300px] gap-[20px] mx-0 pr-10 bg-[#d0eeec] border-2 border-[#d0eeec] rounded-[25px]">
          <div className="flex-1 h-full relative">
            <Image
              src={doctor.imageSrc}
              alt={doctor.doctorName}
              sizes=""
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex-1 p-4 mr-2 ">
            <Title className="" level={3}>{doctor.doctorName}</Title>
            <div className="flex py-2">
              <MedicineBoxOutlined className="text-[#13a89e] text-2xl mr-4 " />
              <p className="text-[#0a5b56] font-bold">{doctor.doctorArea}</p>
            </div>
            <p className="my-2 ">{doctor.doctorText}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
