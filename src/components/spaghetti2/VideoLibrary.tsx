"use client";

import React, { useState } from "react";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "1",
    icon: <MenuUnfoldOutlined />,
    label: "Body",
    children: [
      { key: "11", label: "Body Contouring Implants - Buttocks" },
      { key: "12", label: "Body Contouring Implants - Calf" },
      { key: "13", label: "Body Contouring Implants - Chest" },
      { key: "14", label: "Fat Transfer" },
      { key: "15", label: "Labiaplasty" },
      { key: "16", label: "Laser Hair Removal" },
      { key: "17", label: "Liposuction" },
      { key: "18", label: "Mommy Makeover" },
      { key: "19", label: "Post Pregnancy Body Contouring" },
      { key: "111", label: "Tummy Tuck - Full" },
      { key: "112", label: "Tummy Tuck - Mini" },
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
    label: "Face",
    children: [
      { key: "31", label: "Eyelid Surgery - Lower" },
      { key: "32", label: "Eyelid Surgery - Upper" },
      { key: "33", label: "Facelift - Full" },
      { key: "34", label: "Facelift - Lower" },
      { key: "35", label: "Facelift - Mid" },
      { key: "36", label: "Facelift - Mini" },
      { key: "37", label: "Facial Implants - Cheeck (Malar)" },
      { key: "38", label: "Facial Implants - Chin" },
      { key: "39", label: "Facial Implants - Nasal" },
      { key: "311", label: "Fat Transfer" },
      { key: "312", label: "Forehead Lift" },
      { key: "313", label: "Hair Transplants" },
      { key: "314", label: "Laser Hair Removal" },
      { key: "315", label: "Laser Skin Resurfacing" },
      { key: "316", label: "Lip Augmentation" },
      { key: "317", label: "Rhinoplasty (Nose Reshaping)" },
    ],
  },
  {
    key: "4",
    icon: <MenuUnfoldOutlined />,
    label: "Hair",
    children: [
      { key: "41", label: "Hair Transplants" },
      { key: "42", label: "Laser Hair Removal" },
      { key: "43", label: "Male Pattern Baldness" },
    ],
  },
  {
    key: "5",
    icon: <MenuUnfoldOutlined />,
    label: "Male Breast",
    children: [{ key: "51", label: "Gynecomastia Surgery" }],
  },
  {
    key: "6",
    icon: <MenuUnfoldOutlined />,
    label: "Skin Conditions",
    children: [
      { key: "61", label: "Acne" },
      { key: "62", label: "Age Spots" },
      { key: "63", label: "Aging Skin and Wrinkles" },
      { key: "64", label: "Male Pattern Baldness" },
      { key: "65", label: "Sunburn" },
    ],
  },
  {
    key: "7",
    icon: <MenuUnfoldOutlined />,
    label: "Skin Treatments",
    children: [
      { key: "71", label: "Botulinum Toxin" },
      { key: "72", label: "Chemical Peel - Deep" },
      { key: "73", label: "Chemical Peel - Medium" },
      { key: "74", label: "Chemical Peel - Superficial" },
      { key: "75", label: "Collagen" },
      { key: "76", label: "Laser Hair Removal" },
      { key: "77", label: "Laser Skin Resurfacing" },
      { key: "78", label: "Lip Augmentation" },
      { key: "79", label: "Microdermabrasion" },
      { key: "711", label: "Microneedling" },
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
  "11": "/video/animations/body/Body Contouring Implants - Buttocks.mp4",
  "12": "/video/animations/body/Body Contouring Implants - Calf.mp4",
  "13": "/video/animations/body/Body Contouring Implants - Chest (Pectoral).mp4",
  "14": "/video/animations/body/Fat Transfer.mp4",
  "15": "/video/animations/body/Labiaplasty.mp4",
  "16": "/video/animations/body/Laser Hair Removal.mp4",
  "17": "/video/animations/body/Liposuction.mp4",
  "18": "/video/animations/body/Mommy Makeover.mp4",
  "19": "/video/animations/body/.mp4",
  "111": "/video/animations/body/Tummy Tuck - Full.mp4",
  "112": "/video/animations/.mp4",
  "231": "/video/animations/breast/Breast Lift.mp4",
  "232": "/video/animations/breast/Breast Lift with Implants.mp4",
  "21": "/video/animations/breast/Breast Implant Options.mp4",
  "22": "/video/animations/breast/Breast Reconstruction.mp4",
  "24": "/video/animations/breast/Breast Reduction.mp4",
  "31": "/video/animations/face/Eyelid Surgery - Lower.mp4",
  "32": "/video/animations/face/Eyelid Surgery - Upper.mp4",
  "33": "/video/animations/face/Facelift - Full.mp4",
  "34": "/video/animations/face/Facelift - Lower.mp4",
  "35": "/video/animations/face/Facelift - Mid.mp4",
  "36": "/video/animations/face/Facelift - Mini.mp4",
  "37": "/video/animations/face/Facial Implants - Cheeck (Malar).mp4",
  "38": "/video/animations/face/Facial Implants - Chin.mp4",
  "39": "/video/animations/face/Facial Implants - Nasal.mp4",
  "311": "/video/animations/face/Fat Transfer.mp4",
  "312": "/video/animations/face/Forehead Lift.mp4",
  "313": "/video/animations/face/Hair Transplants.mp4",
  "314": "/video/animations/face/Laser Hair Removal.mp4",
  "315": "/video/animations/face/Laser Skin Resurfacing.mp4",
  "316": "/video/animations/face/Lip Augmentation.mp4",
  "317": "/video/animations/Nose Reshaping (Rhinoplasty).mp4",
  "41": "/video/animations/hair/Hair Transplants.mp4",
  "42": "/video/animations/hair/Laser Hair Removal.mp4",
  "43": "/video/animations/hair/Male Pattern Baldness.mp4",
  "51": "/video/animations/malebreast/Gynecomastia Surgery.mp4",
  "61": "/video/animations/skinconditions/Acne.mp4",
  "62": "/video/animations/skinconditions/Age Spots.mp4",
  "63": "/video/animations/skinconditions/Aging Skin and Wrinkles.mp4",
  "64": "/video/animations/skinconditions/Male Pattern Baldness.mp4",
  "65": "/video/animations/skinconditions/Sunburn.mp4",
  "71": "/video/animations/skintreatments/Botulinum Toxin.mp4",
  "72": "/video/animations/skintreatments/Chemical Peel - Deep.mp4",
  "73": "/video/animations/skintreatments/Chemical Peel - Medium.mp4",
  "74": "/video/animations/skintreatments/Chemical Peel - Superficial.mp4",
  "75": "/video/animations/skintreatments/Collagen.mp4",
  "76": "/video/animations/skintreatments/Laser Hair Removal.mp4",
  "77": "/video/animations/skintreatments/Laser Skin Resurfacing.mp4",
  "78": "/video/animations/skintreatments/Lip Augmentation.mp4",
  "79": "/video/animations/skintreatments/Microdermabrasion.mp4",
  "711": "/video/animations/skintreatments/Microneedling.mp4",
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
    <div className="flex flex-col border-[#dcfffb] h-auto w-full md:h-[285px] lg:h-[340px] xl:h-[420px] 2xl:h-[530px] border-2 rounded-[25px]">
      <Menu
        mode="inline"
        defaultSelectedKeys={["231"]}
        openKeys={stateOpenKeys}
        onOpenChange={onOpenChange}
        onClick={handleMenuClick}
        items={items}
        className="border-[#dcfffb] custom-menu overflow-y-auto rounded-t-[25px] no-scrollbar w-full  md:h-full"
      />

      <div className="flex flex-col w-full bg-[#dcfffb] rounded-b-[25px] ">
        <video
          className="w-auto h-[200px] rounded-b-[25px] "
          src={videoSrc}
          controls
          autoPlay
          muted
        />
      </div>
    </div>
  );
}
