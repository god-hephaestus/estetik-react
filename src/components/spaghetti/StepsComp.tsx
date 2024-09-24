"use client";
import { useState } from "react";
import { Steps } from "antd";

export default function StepsComp() {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    setCurrent(value);
  };

  return (
    <div className="flex justify-center">
      <Steps
        current={current}
        onChange={onChange}
        direction="vertical"
        items={[
          {
            title: "Arrival",
            description: "Arrival",
          },
          {
            title: "Preparations",
            description: "Preparations",
          },
          {
            title: "Operation",
            description: "Operation",
          },
          {
            title: "Final Check-up",
            description: "Final Check-up",
          },
          {
            title: "Departure!",
            description: "Departure!",
          },
        ]}
      />
    </div>
  );
}
