"use client";

import { CommentOutlined } from "@ant-design/icons";
import { Avatar, Divider, Typography } from "antd";
import React, { useRef, useState } from "react";

const { Title } = Typography;

interface Testimonial {
  imageSrc: string;
  name: string;
  operation: string;
  message: string;
}

interface TestimonialsProps {
  stateKey: string;
  testimonialsData: { [key: string]: Testimonial[] };
}

export default function Testimonials({
  stateKey,
  testimonialsData,
}: TestimonialsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
    if (containerRef.current) {
      containerRef.current.style.scrollBehavior = "auto";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.clientX - (containerRef.current.offsetLeft || 0);
    const walk = x - startX;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
    if (containerRef.current) {
      containerRef.current.style.scrollBehavior = "auto";
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.touches[0].clientX - (containerRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1.6;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleEnd = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.scrollBehavior = "smooth";
    }
  };

  // Filter testimonials by stateKey
  const testimonials = testimonialsData[stateKey] || [];

  return (
    <div>
      <Divider style={{ fontWeight: "bold" }}>Testimonials</Divider>
      <div
        ref={containerRef}
        className={`flex overflow-x-auto cursor-${
          isDragging ? "grabbing" : "grab"
        } no-select`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleEnd}
        style={{ userSelect: "none" }}>
        {testimonials.length > 0 ? (
          testimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 mr-4">
              <div
                className="shadow-lg p-5 bg-white relative rounded-xl w-full sm:w-64 md:w-72 lg:w-80"
                style={{ height: "220px" }}>
                <div className="mb-10 text-black">
                  <CommentOutlined className="bottom-[5px] right-[5px] absolute text-xl text-[#13a89e]" />
                  <p>{testimonial.message}</p>
                </div>

                <div className="absolute bottom-0 left-0 flex items-center p-5">
                  <Avatar
                    size={50}
                    src={"/BeforeAfter/" + testimonial.imageSrc}
                    alt={"customer testimonial"}
                    draggable={false}
                    shape="circle"
                    className="mr-3"
                  />
                  <div>
                    <Title level={4} className="m-0">
                      {testimonial.name}
                    </Title>
                    <p className="text-gray-600">{testimonial.operation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No testimonials available for this selection.</p>
        )}
      </div>
    </div>
  );
}