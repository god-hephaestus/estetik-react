"use client";

import { CommentOutlined } from "@ant-design/icons";
import { Avatar, Typography } from "antd";
import React, { useRef, useState, useEffect } from "react";

const { Title } = Typography;

interface Testimonial {
  genderFemale: boolean;
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
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for forward, -1 for reverse

  useEffect(() => {
    let scrollInterval: NodeJS.Timeout | null = null;

    const startAutoScroll = () => {
      if (containerRef.current && isAutoScrolling) {
        scrollInterval = setInterval(() => {
          if (containerRef.current) {
            containerRef.current.scrollLeft += scrollDirection;
            if (
              containerRef.current.scrollLeft +
                containerRef.current.clientWidth >=
              containerRef.current.scrollWidth
            ) {
              setScrollDirection(-1);
              setIsAutoScrolling(false);
              setTimeout(() => setIsAutoScrolling(true), 5000);
            } else if (containerRef.current.scrollLeft <= 0) {
              setScrollDirection(1);
              setIsAutoScrolling(false);
              setTimeout(() => setIsAutoScrolling(true), 5000);
            }
          }
        }, 20);
      }
    };

    if (isAutoScrolling) startAutoScroll();

    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, [isAutoScrolling, scrollDirection]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsAutoScrolling(false);
    setStartX(e.clientX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
    if (containerRef.current) {
      containerRef.current.style.scrollBehavior = "auto";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    setIsAutoScrolling(false);
    e.preventDefault();
    const x = e.clientX - (containerRef.current.offsetLeft || 0);
    const walk = x - startX;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setIsAutoScrolling(false);
    setStartX(e.touches[0].clientX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
    if (containerRef.current) {
      containerRef.current.style.scrollBehavior = "auto";
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    setIsAutoScrolling(false);
    const x = e.touches[0].clientX - (containerRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1.6;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleEnd = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.scrollBehavior = "smooth";
    }
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  // Filter testimonials by stateKey
  const testimonials = testimonialsData[stateKey] || [];

  const containerClassNames = `no-scrollbar bg-[#13a89e]/20 lg:mt-0 border-2 border-[#13a89e] border-none h-[240px] lg:h-[280px] xl:h-[250px] rounded-[25px] px-2 flex flex-grow overflow-x-auto cursor-${
    isDragging ? "grabbing" : "grab"
  } no-select `;

  return (
    <div
      ref={containerRef}
      className={containerClassNames}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleEnd}
      style={{ userSelect: "none" }}
    >
      {testimonials.length > 0 ? (
        testimonials.map((testimonial, index) => (
          <div key={index} className="ml-4 flex-grow flex ">
            <div className="shadow-xl p-5 my-2 bg-[#13a89e] relative rounded-xl w-80 lg:w-80 flex-grow">
              <div className="mb-16 md:mb-10 text-black ">
                <CommentOutlined className="bottom-[5px] right-[5px] absolute text-xl hidden lg:flex rounded-full bg-white p-1 text-black" />
                <p className="text-white leading-tight">
                  {testimonial.message}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 flex items-center p-5">
                <Avatar
                  size={50}
                  src={`${
                    testimonial.genderFemale
                      ? "/img/avatarFemale.png"
                      : "/img/avatarMale.png"
                  }`}
                  alt={"customer testimonial"}
                  draggable={false}
                  shape="circle"
                  className="mr-3 flex-shrink-0"
                />
                <div className="max-w-[220px] overflow-hidden">
                  <Title level={4} className="m-0 text-white">
                    {testimonial.name}
                  </Title>
                  <p className="text-white font-light truncate">
                    <i>{testimonial.operation}</i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Bu operasyon için hasta yorumu yok.</p>
      )}
    </div>
  );
}
