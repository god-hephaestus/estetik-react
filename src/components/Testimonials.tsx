"use client";

import { Avatar, Typography } from "antd";
import React, { useRef, useState } from "react";

const { Title } = Typography;

export default function Testimonials({
  testimonialsData,
}: {
  testimonialsData: Array<{
    imageSrc: string;
    textProps: { name: string; operation: string; message: string };
  }>;
}) {
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
    const walk = (x - startX) * 1.5;
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
    const walk = (x - startX) * 0.8;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleEnd = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.scrollBehavior = "smooth";
    }
  };

  return (
    <div
      ref={containerRef}
      className={`flex overflow-hidden cursor-${
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
      {testimonialsData.map((testimonial, index) => (
        <div key={index} className="flex-shrink-0 mr-4">
          <div
            className="shadow-lg p-5 bg-white relative w-[350px] rounded-xl"
            style={{ height: "220px" }}>
            <div className="mb-10">
              <p>{testimonial.textProps.message}</p>
            </div>

            <div className="absolute bottom-0 left-0 flex items-center p-5">
              <Avatar
                size={50}
                src={testimonial.imageSrc}
                alt={"text"}
                draggable={false}
                shape="circle"
                className="mr-3"
              />
              <div>
                <Title level={4} className="m-0">
                  {testimonial.textProps.name}
                </Title>
                <p className="text-gray-500">
                  {testimonial.textProps.operation}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}