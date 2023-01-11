import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { BsArrowRightCircle } from "react-icons/bs";

interface NormalSearchProps {
  homesearch?: boolean;
  placeholder?: string;
}

const NormalSearch = ({ homesearch, placeholder }: NormalSearchProps) => {
  return (
    <>
      <div
        className={`flex items-center rounded-full m-auto text-[#828282] ${
          homesearch ? "border shadow-md" : " bg-[#E5E5E5]"
        } justify-between md:p-[1rem] md:pr-[3rem] pr-[1rem] md:w-[70%] w-full`}
      >
        <div>
          {homesearch && (
            <div className="text-[3rem] text-[#B9BCBD] md:block hidden">
              <FiSearch />
            </div>
          )}
        </div>
        <input
          className="flex-1 w-full md:text-[18px] text-[12px] p-[1rem] bg-transparent focus:outline-none  "
          type="serch"
          placeholder={placeholder || "Enter product name"}
        />
        <div className="flex md:gap-x-6 gap-x-4  items-center md:text-[25px] text-[18px]">
          {homesearch ? (
            <div className="md:h-[4rem] h-[3rem] md:w-[4rem] w-[3rem] md:text-[4rem] text-[2rem]   flex items-center justify-center rounded-full text-black shadow-md">
              <BsArrowRightCircle />
            </div>
          ) : (
            <>
              {" "}
              <IoMdClose />
              <FiSearch className="md:block hidden" />{" "}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NormalSearch;

{
  /* <div className="flex items-center rounded-full text-[#828282]  bg-[#E5E5E5] justify-between md:p-[1rem] p-[0.5rem] md:pr-[3rem] pr-[1rem] md:w-[70%] w-full">
        <input
          className="flex-1 w-full md:text-[18px] text-[12px] p-[1rem] bg-transparent focus:outline-none"
          type="serch"
          placeholder="Enter product name"
        />
        <div className="flex md:gap-x-6 gap-x-4  items-center md:text-[25px] text-[18px]">
          <IoMdClose />
          <FiSearch className="md:block hidden" />
        </div>
      </div> */
}
