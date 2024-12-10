import React from "react";
import NavbarTop from "./NavbarTop";
import Card from "./Card";

// Financials
import fin from "../../assets/imgs/4.png";
import { FaBalanceScale } from "react-icons/fa";
import { SiOpenstreetmap } from "react-icons/si";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { SlBookOpen } from "react-icons/sl";
import { MdManageSearch } from "react-icons/md";

// Actions
import act from "../../assets/imgs/3.png";
import { MdOutlineWidgets } from "react-icons/md";
import { TbDeviceIpadQuestion } from "react-icons/tb";
import { FaEdit } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import { IoLibraryOutline } from "react-icons/io5";

// PnP
import PnP from "../../assets/imgs/2.png";

//ES
import Es from "../../assets/imgs/1.png";
import { LuClipboardPenLine } from "react-icons/lu";
import { FaClipboardUser } from "react-icons/fa6";
import { RiTeamLine } from "react-icons/ri";
import { AiOutlineTeam } from "react-icons/ai";

import wordLogo from "../../assets/imgs/logo-white.png";
import excelLogo from "../../assets/imgs/pngwing.com.png";

//
import { IoReceiptSharp } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";

//
import { FaGraduationCap } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { PiVideo } from "react-icons/pi";
import { IoNewspaper } from "react-icons/io5";
import { FaBook } from "react-icons/fa6";

const ContentPage = () => {
  const financials = {
    title: "Financials",
    img: fin,
    options: [
      {
        icon: <FaBalanceScale />,
        name: "Trail Balance",
      },
      {
        icon: <SiOpenstreetmap />,
        name: "Program Map",
      },
      {
        icon: <HiOutlineAdjustmentsVertical />,
        name: "Adjs | Recs",
      },
      {
        icon: <SlBookOpen />,
        name: "General Ledger",
      },
      {
        icon: <MdManageSearch />,
        name: "Risk Analysis",
      },
    ],
  };

  const actions = {
    title: "Actions",
    img: act,
    options: [
      {
        icon: <MdOutlineWidgets />,
        name: "Dashboard",
      },
      {
        icon: <TbDeviceIpadQuestion />,
        name: "Queries",
      },
      {
        icon: <FaEdit />,
        name: "Key Audit Matters",
      },
      {
        icon: <VscPreview />,
        name: "Review Notes",
      },
      {
        icon: <IoLibraryOutline />,
        name: "Library",
      },
    ],
  };

  const pnp = {
    title: "Planning and Procedures",
    img: PnP,
    options: [
      {
        icon: <TbDeviceIpadQuestion />,
        name: "Edit Planning Procedures",
      },
      {
        icon: <FaEdit />,
        name: "Edit Fieldwork Procedures",
      },
      {
        icon: <FaBalanceScale />,
        name: "Materiality",
      },
    ],
  };

  const ES = {
    title: "Engagement Stakeholders",
    img: Es,
    options: [
      {
        icon: <LuClipboardPenLine />,
        name: "Edit Engagement",
      },
      {
        icon: <FaClipboardUser />,
        name: "Client Management",
      },
      {
        icon: <RiTeamLine />,
        name: "Edit Team",
      },
      {
        icon: <AiOutlineTeam />,
        name: "Add new Employee",
      },
    ],
  };

  return (
    <div className="bg-gray-100">
      <NavbarTop />

      <div className="w-[90%] mx-auto flex justify-between">
        <Card data={financials} />
        <Card data={actions} />
        <Card data={pnp} />
        <Card data={ES} />
      </div>

      {/*  */}
      <div className="w-[90%] mx-auto flex justify-between my-7">
        <div className="flex w-[40%] gap-9">
          <div>
            <p className="font-semibold">Sheetsway Plugins</p>
            <p className="font-semibold mt-5 text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              commodi quas necessitatibus libero. Minus, temporibus.
            </p>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
          {/*  */}
          <div className="flex gap-4">
            <div className="w-[6rem] h-[5rem]">
              <span className="w-full h-full bg-white rounded-lg shadow-lg flex justify-center items-center">
                <img
                  src={excelLogo}
                  alt=""
                  className="w-[70%] h-[70%] object-contain"
                />
              </span>
              <p className="text-[.6rem] text-center mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                nemo!
              </p>
            </div>

            <div className="w-[6rem] h-[5rem]">
              <span className="w-full h-full bg-white rounded-lg shadow-lg flex justify-center items-center">
                <img
                  src={wordLogo}
                  alt=""
                  className="w-[70%] h-[70%] object-contain"
                />
              </span>
              <p className="text-[.6rem] text-center mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                nemo!
              </p>
            </div>
          </div>
        </div>

        {/*  */}
        <div>
          <p className="font-semibold">Sheetsway Services</p>

          <div className="flex gap-4 mt-7">
            <div className="">
              <div className="w-full border-r border-gray-400 flex justify-center items-center">
                <IoReceiptSharp size={34} color="#2e80f6" />
              </div>
              <p className="mt-2">Billing & History</p>
            </div>

            <div className="w-[8rem]">
              <div className="w-full border-r border-gray-400 flex justify-center items-center">
                <BiSupport size={34} color="#2e80f6" />
              </div>

              <p className="mt-2">Help & Support</p>
            </div>

            <div className="w-[7rem]">
              <div className="w-full border-r border-gray-400 flex justify-center items-center">
                <MdAccountCircle size={34} color="#2e80f6" />
              </div>

              <p className="mt-2 text-center">Profile</p>
            </div>

            <div className="w-[10rem]">
              <div className="w-full border-r border-gray-400 flex justify-center items-center">
                <FaHandsHelping size={34} color="#2e80f6" />
              </div>

              <p className="mt-2 text-center">
                Regional distributor partnership
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="mt-5 w-[90%] mx-auto">
        <p>Learning Tools</p>

        <div className="flex gap-5 w-full mt-5">
          <div className="flex w-[20%] justify-between gap-3">
            <FaGraduationCap size={36} />
            <span className="w-[80%]">
              <p className="text-base text-blue-500">Tutorial</p>
              <p className="text-[.6rem] text-wrap">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
                debitis quibusdam tempora ullam?
              </p>
            </span>
          </div>

          <div className="flex w-[20%] justify-between gap-3">
            <FaMapLocationDot size={36} />
            <span className="w-[80%]">
              <p className="text-base text-blue-500">Guide Map</p>
              <p className="text-[.6rem] text-wrap">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
                debitis quibusdam tempora ullam?
              </p>
            </span>
          </div>

          <div className="flex w-[20%] justify-between gap-3">
            <PiVideo size={36} />
            <span className="w-[80%]">
              <p className="text-base text-blue-500">Video Guides</p>
              <p className="text-[.6rem] text-wrap">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
                debitis quibusdam tempora ullam?
              </p>
            </span>
          </div>

          <div className="flex w-[20%] justify-between gap-3">
            <IoNewspaper size={36} />
            <span className="w-[80%]">
              <p className="text-base text-blue-500">Audit Blogs</p>
              <p className="text-[.6rem] text-wrap">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
                debitis quibusdam tempora ullam?
              </p>
            </span>
          </div>

          <div className="flex w-[20%] justify-between gap-3">
            <FaBook size={36} />
            <span className="w-[80%]">
              <p className="text-base text-blue-500">Q&A</p>
              <p className="text-[.6rem] text-wrap">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
                debitis quibusdam tempora ullam?
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
