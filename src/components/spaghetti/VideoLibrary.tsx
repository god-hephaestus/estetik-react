"use client";

import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "1",
    icon: <MailOutlined />,
    label: "BBL",
    children: [
      { key: "11", label: "Option 1" },
      { key: "12", label: "Option 2" },
    ],
  },
  {
    key: "2",
    icon: <AppstoreOutlined />,
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
    icon: <SettingOutlined />,
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

export default function VideoLibrary() {
  const [stateOpenKeys, setStateOpenKeys] = useState(["2", "23"]);

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

  return (
    <div className="flex flex-row">
      <Menu
        mode="inline"
        defaultSelectedKeys={["231"]}
        openKeys={stateOpenKeys}
        onOpenChange={onOpenChange}
        style={{ width: "100%", maxWidth: "256px" }}
        items={items}
      />
      <div className="flex flex-col justify-end">
        <video
          className="z-50"
          src="/video/animations/breast/Breast Lift.mp4"
          controls
          style={{ width: "100%", maxWidth: "500px", height: "auto" }}></video>
      </div>
    </div>
  );
}
