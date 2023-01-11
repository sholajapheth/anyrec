import React, { useEffect, useState } from "react";
import { FiPlus, FiSearch } from "react-icons/fi";
import { data } from "../data";

const Category = ({
  icon,
  category,
  className,
}: {
  icon: any;
  category: string;
  className?: string;
}) => {
  return (
    <div className={`flex items-center gap-x-[3rem] ${className}`}>
      <p className="text-[3rem]">{icon}</p>
      <p className="text-[16px]">{category}</p>
    </div>
  );
};

const Categories = () => {
  const [shift, setShift] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setShift(true);
      } else {
        setShift(false);
      }
    });
  }, []);

  return (
    <>
      <div
        className={` md:mt-[4rem] mt-0   ${
          shift &&
          "md:block md:relative fixed flex items-center gap-x-4 md:top-0 top-[4rem]   w-full bg-white md:z-0 z-50 animate-fadeIn animate-all duration-500 px-[2rem]"
        }`}
      >
        <div className=" text-center md:mb-[4rem] ">
          <p
            className={`font-[900] animate-all duration-300 text-[32px] ${
              shift && "md:text-[32px] text-[15px]"
            }`}
          >
            Categories
          </p>
        </div>

        <div className=" md:w-[60%] md:m-auto flex items-center rounded-full text-[#828282]  bg-[#E5E5E5] justify-between md:p-[1rem] p-[0rem] md:pl-[3rem] pl-[1rem]  w-full col-span-2">
          <div className="flex md:gap-x-6 gap-x-4  items-center md:text-[25px] text-[18px]">
            <FiSearch className="" />
          </div>
          <input
            className="flex-1 w-full md:text-[18px] text-[12px] p-[1rem] bg-transparent focus:outline-none"
            type="serch"
            placeholder="Enter product name"
          />
        </div>
      </div>

      <div className="lg:px-[15rem] md:px-[10rem] px-[3rem]  w-full relative">
        <div className="">
          <div
            className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-y-[6rem] 
        gap-y-[4rem]  md:mt-[6rem] mt-[4rem] overflow-y-scroll scrollbar-hide"
          >
            {data.map((item, index) => (
              <Category key={index} icon={item.icon} category={item.category} />
            ))}
            <Category icon={<FiPlus />} category="Suggest A New Category" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
