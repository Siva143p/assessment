import React from "react";
import { PiTelegramLogoLight } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
//
import { IoSearchOutline } from "react-icons/io5";
import { LuCrown } from "react-icons/lu";
import { IoChevronDownOutline } from "react-icons/io5";
import { TbArrowBigUp } from "react-icons/tb";

const NavbarTop = () => {
  const icons = [
    { icon: <PiTelegramLogoLight />, i: true },
    { icon: <BsThreeDotsVertical /> },
    { icon: <FaQuestion /> },
    { icon: <TiTick /> },
  ];
  return (
    <div className="w-full" style={{ borderBottom: "1px black solid" }}>
      {/* top */}
      <div className="flex justify-between items-center h-[2.5rem] bg-neutral-200 relative">
        <div className="flex ml-6">
          {icons.map((item) => {
            return (
              <div className="border-r-2 border-gray-400 px-2">
                <span
                  className={`${
                    item.i
                      ? "bg-orange-300 text-white w-6 h-6 flex justify-center items-center"
                      : "border-2 border-gray-400"
                  } block rounded p-0.5`}
                >
                  {item.icon}
                </span>
              </div>
            );
          })}

          <TbArrowBigUp
            size={28}
            className="absolute top-11 left-7 text-orange-300"
          />
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Hold CTRL search"
            className="border-2 border-gray-400 text-xs p-1 px-7 rounded-sm text-center outline-none"
          />

          <IoSearchOutline className="absolute top-1 left-7 text-gray-400" />
        </div>

        <div className="flex gap-3 items-center mr-2">
          <div className="border-2 border-yellow-400 w-6 h-6 flex justify-center items-center rounded-full">
            <LuCrown className="text-yellow-400" />
          </div>
          {/*  */}
          <div className="bg-slate-50 flex justify-center items-center px-2 h-[1.7rem]">
            <span className="text-xs border-r-2 border-gray-300 px-1">
              1st Jan 2024 t0 31st Dec 2024-1
            </span>{" "}
            <IoChevronDownOutline className="inline text-gray-400 ml-1" />
          </div>
          <div>
            <span className="block text-[.7rem] -mb-1 text-gray-500">
              Due in{" "}
            </span>
            <span className="font-semibold">2 Months</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 flex justify-between items-center px-20 h-[5rem]">
        <div>
          <h1 className="text-2xl font-bold">Welcome Back, Jean!</h1>
          <p className="text-[.7rem]">
            Feeling Lost? Check out the walkthrough{" "}
            <span className="text-orange-400">turorial</span>
          </p>
        </div>

        <div>
          <p>Pending Tasks</p>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
