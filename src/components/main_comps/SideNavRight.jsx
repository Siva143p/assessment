import React from "react";
import { TbBook } from "react-icons/tb";
import { FaPen } from "react-icons/fa6";
import { MdOutlineEmojiFlags } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiStackFill } from "react-icons/ri";

const SideNavRight = () => {
  const icons = [
    { icon: <TbBook /> },
    { icon: <FaPen /> },
    { icon: <MdOutlineEmojiFlags /> },
    { icon: <BsQuestionCircle /> },
    { icon: <IoDocumentTextOutline /> },
    { icon: <RiStackFill /> },
  ];

  return (
    <div className="h-full w-full flex flex-col items-center mt-4">
      <div className="flex flex-col gap-6 text-white">
        {icons.map((item) => {
          return item.icon;
        })}
      </div>
    </div>
  );
};

export default SideNavRight;
