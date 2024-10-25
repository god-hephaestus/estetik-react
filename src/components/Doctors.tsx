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

export default function Doctors({
  doctorDescription,
  isExpanded,
}: {
  doctorDescription: Doctor[];
  isExpanded: boolean;
}) {
  const containerClassNames = `flex flex-col md:flex-col lg:flex-row items-center h-[474px] md:h-[446px] lg:h-[300px] gap-4 lg:gap-0 mx-0 pr-4 lg:pr-10   lg:backdrop-blur-none lg:bg-[#d0eeec] border-2 border-[#13a89e] lg:border-none rounded-[25px] shadow-md
 ${
   isExpanded
     ? "h-[70vh] backdrop-blur-none bg-[#d0eeec]"
     : "h-[474px] backdrop-blur bg-[#13a89e]/20"
 } `;

  return (
    <Carousel arrows={true} infinite={true} draggable className="h-full">
      {doctorDescription.map((doctor, index) => (
        <div key={index} className={containerClassNames}>
          <div className="relative w-full h-[250px] lg:h-full lg:w-[50%] flex-shrink-0">
            <Image
              src={doctor.imageSrc}
              alt={doctor.doctorName}
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 30vw"
              fill
              className="object-contain"
            />
          </div>

          <div className="flex-1 p-4 lg:p-0 flex flex-col justify-center text-center lg:text-left lg:w-[50%]">
            <Title level={3}>{doctor.doctorName}</Title>
            <div className="flex justify-center lg:justify-start md:py-2">
              <MedicineBoxOutlined className="text-[#0a5b56] text-2xl md:mr-4 mr-2" />
              <p className="text-[#0a5b56] font-bold">{doctor.doctorArea}</p>
            </div>
            <p className="my-2">{doctor.doctorText}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
