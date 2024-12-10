import React from "react";
import fin from "../../assets/imgs/4.png";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { TiChevronRightOutline } from "react-icons/ti";

const Card = ({ data }) => {
  console.log(data);

  return (
    <div className="w-[16rem] h-[13rem] rounded-md overflow-hidden shadow-lg my-9 relative">
      <img src={data.img} alt="" className="w-full h-full object-cover" />

      <div className="absolute w-full h-full top-0 left-0 text-white">
        <div className="flex items-center gap-2">
          <p className="mt-4 ml-5 font-bold">{data.title}</p>
          {data.title === "Actions" ? (
            <span className="bg-red-700 w-4 h-4 text-sm flex justify-center items-center rounded-full mt-5">
              2
            </span>
          ) : (
            ""
          )}
        </div>
        <ul className="w-full mt-4">
          {data.options.map((item, index) => {
            return (
              <li
                className={`${
                  item.name === "Program Map" ? "text-black bg-white" : ""
                } w-full flex justify-between items-center pl-7 pr-3 py-1`}
              >
                <span className="flex justify-between items-center gap-2">
                  {item.icon}
                  <p className="text-sm">{item.name}</p>
                </span>
                {item.name === "Queries" ||
                item.name === "Key Audit Matters" ? (
                  <div className="flex gap-1 items-center">
                    <span className="bg-red-700 w-4 h-4 text-sm flex justify-center items-center rounded-full">
                      1
                    </span>
                    <TiChevronRightOutline className="mt-1" />
                  </div>
                ) : (
                  <TiChevronRightOutline className="mt-1" />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Card;
