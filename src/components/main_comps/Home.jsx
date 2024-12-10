import React from "react";
import Card from "./Card";
import SideNavLeft from "./SideNavLeft";
import ContentPage from "./ContentPage";
import SideNavRight from "./SideNavRight";
import { TiChevronRightOutline } from "react-icons/ti";

const Home = () => {
  return (
    <div className="w-full h-screen bg-black flex">
      <div className="w-[3%] bg-neutral-200 h-[90%] mt-5">
        <SideNavLeft />
      </div>

      <div className="w-[94%] bg-gray-500 h-full shadow-lg">
        <ContentPage />
      </div>

      <div className="w-[3%] h-full">
        <SideNavRight />
      </div>
      <TiChevronRightOutline
        size={20}
        className="text-white absolute bottom-3 left-2"
      />
    </div>
  );
};

export default Home;
