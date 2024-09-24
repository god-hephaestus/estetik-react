"use client";

import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "1",
    icon: <MenuUnfoldOutlined />,
    label: "BBL",
    children: [
      { key: "11", label: "Option 1" },
      { key: "12", label: "Option 2" },
    ],
  },
  {
    key: "2",
    icon: <MenuUnfoldOutlined />,
    label: "Breast",
    children: [
      { key: "21", label: "Breast Implant" },
      { key: "22", label: "Breast Reconstruction" },
      {
        key: "23",
        label: "Breast Lift",
        children: [
          { key: "231", label: "Breast Lift" },
          { key: "232", label: "Breast Lift with Implants" },
        ],
      },
      { key: "24", label: "Breast Reduction" },
    ],
  },
  {
    key: "3",
    icon: <MenuUnfoldOutlined />,
    label: "Total Body",
    children: [
      { key: "31", label: "Option 1" },
      { key: "32", label: "Option 2" },
      { key: "33", label: "Option 3" },
      { key: "34", label: "Option 4" },
    ],
  },
];
interface LevelKeysProps {
  key?: string;
  children?: LevelKeysProps[];
}

const getLevelKeys = (items1: LevelKeysProps[]) => {
  const key: Record<string, number> = {};
  const func = (items2: LevelKeysProps[], level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};

const levelKeys = getLevelKeys(items as LevelKeysProps[]);

const videoSrcMap: Record<string, string> = {
  "231": "/video/animations/breast/Breast Lift.mp4",
  "232": "/video/animations/breast/Breast Lift with Implants.mp4",
  "21": "/video/animations/breast/Breast Implant Options.mp4",
  "22": "/video/animations/breast/Breast Reconstruction.mp4",
  "24": "/video/animations/breast/Breast Reduction.mp4",
  default: "/video/animations/breast/Breast Lift.mp4",
};

export default function VideoLibrary() {
  const [stateOpenKeys, setStateOpenKeys] = useState<string[]>(["2", "23"]);
  const [videoSrc, setVideoSrc] = useState<string>(
    videoSrcMap["231"] || videoSrcMap.default
  );

  const onOpenChange: MenuProps["onOpenChange"] = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);

      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    // Use the dictionary lookup for video src
    const newVideoSrc = videoSrcMap[e.key] || videoSrcMap.default;
    setVideoSrc(newVideoSrc);
  };

  return (
    <div className="flex flex-col md:flex-row w-full mt-8 mb-4 h-auto md:h-[350px]">
      <Menu
        mode="inline"
        defaultSelectedKeys={["231"]}
        openKeys={stateOpenKeys}
        onOpenChange={onOpenChange}
        onClick={handleMenuClick}
        items={items}
        className="border-[#13a89e] overflow-y-auto w-full md:w-1/2 md:h-full"
      />

      <div className="flex flex-col w-full md:w-1/2 justify-end bg-[#13a89e] p-2 md:h-full">
        <video
          className="z-50 w-full h-full rounded-lg"
          src={videoSrc}
          controls
          autoPlay
          muted
        />
      </div>
    </div>
  );
}
