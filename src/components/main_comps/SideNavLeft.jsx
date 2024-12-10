import React from "react";
import { MdOutlineWidgets } from "react-icons/md";
import { FaFolder } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { IoMdAnalytics } from "react-icons/io";
import { FaUsb } from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";

const SideNavLeft = () => {
  const icons = [
    { icon: <MdOutlineWidgets /> },
    { icon: <FaFolder /> },
    { icon: <SiTicktick /> },
    { icon: <MdOutlineSwitchAccount /> },
    { icon: <HiOutlineDocumentChartBar /> },
    { icon: <IoMdAnalytics /> },
    { icon: <FaUsb /> },
    { icon: <TiTickOutline /> },
  ];
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="flex flex-col gap-6 text-neutral-700">
        {icons.map((item) => {
          return item.icon;
        })}
      </div>
    </div>
  );
};

export default SideNavLeft;
