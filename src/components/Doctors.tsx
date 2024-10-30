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
  const containerClassNames = `flex flex-col md:flex-col lg:flex-row items-center h-[474px] md:h-[446px] lg:h-[280px] xl:h-[250px] mx-0 pr-0  lg:backdrop-blur-none lg:bg-[#d0eeec] border-2 border-[#13a89e] lg:border-none rounded-[25px] shadow-md
 ${
   isExpanded
     ? " backdrop-blur-none bg-[#d0eeec]"
     : "backdrop-blur bg-[#13a89e]/20"
 } `;

  return (
    <Carousel arrows={true} infinite={true} draggable className="h-full">
      {doctorDescription.map((doctor, index) => (
        <div key={index} className={containerClassNames}>
          <div className="relative w-full my-4 lg:mt-0 h-[250px] lg:h-[80%] lg:w-[45%] flex-shrink-0">
            <Image
              src={doctor.imageSrc}
              alt={doctor.doctorName}
              sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 30vw"
              fill
              className="object-contain lg:bg-white rounded-[25px] mx-auto lg:w-[80%]"
            />
          </div>

          <div className="flex-1 px-4 lg:p-0 flex flex-col justify-start text-center lg:text-left lg:w-[55%] lg:pr-3">
            <Title level={5}>{doctor.doctorName}</Title>

            <div className="flex items-center justify-center lg:justify-start md:pb-2 px-4 lg:pr-4 lg:pl-0">
              <div className="flex items-center justify-center bg-[#13a89e] rounded-[10px] w-10 h-10">
                <MedicineBoxOutlined className="text-white text-2xl" />
              </div>
              <p className="text-[#0a5b56] text-center lg:text-start  lg:whitespace-normal font-medium lg:w-[80%] ml-2 md:ml-4">
                {doctor.doctorArea}
              </p>
            </div>

            <p className="mb-3 text-black opacity-100 px-5 lg:pr-3 lg:pl-0">
              {doctor.doctorText}
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
