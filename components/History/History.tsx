import React from "react";
import { Button, NormalSearch } from "../utills";
import { HistoryCardProps } from "../../types";
import { history } from "../data";
import { AiFillDelete, AiOutlineDelete } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { PageTitle } from "../utills/Text";

const HistoryCard = ({ day, history }: HistoryCardProps) => {
  return (
    <div className="laptop:mb-[5rem]">
      <div className="border-b-[2px] border-b-black  w-full laptop:pl-[10rem]  laptop:my-[3rem] pl-[2rem]">
        <p className="font-[500] text-[16px]">{day}</p>
      </div>

      {history.map(({ categories, product, makers }, index) => (
        <div
          key={index}
          className="desktop:pl-[24rem] laptop:pl-[15rem] p-[2rem] laptop:border-b-0 border-b-4 border-b-primary"
        >
          <div className="flex items-center justify-between laptop:gap-x-[4rem]">
            <div>
              <p className="font-[600] laptop:text-[25px] text-[16px]">
                {product}
              </p>
              {categories?.map((item) => (
                <span className="font-[400] text-[14px]">{item}, </span>
              ))}
            </div>

            {/* makers hides on mobile  */}
            <div className="laptop:flex hidden rounded-full shadow-md p-[1em] border flex-1 text-center items-center justify-center gap-x-[1rem]">
              {makers.map((item) => (
                <div className="flex gap-x-[1rem] items-center font-[500] laptop:text-[16px] text-[12px]">
                  <p className="">{item} </p>
                  <p>|</p>
                </div>
              ))}
            </div>

            <div className="flex items-center laptop:gap-6 gap-3">
              <div>
                <Button show className="p-[0.3rem] laptop:hidden block">
                  See All
                </Button>
                <Button className="px-[2rem] py-[1rem] laptop:block hidden">
                  See All
                </Button>
              </div>
              <button className="laptop:mr-[4rem]">
                <AiFillDelete className="text-[2rem] laptop:hidden block" />
                <AiOutlineDelete className="text-[4rem]  laptop:block hidden" />
              </button>
            </div>
          </div>

          {/* makers shows on mobile  */}

          <div className="tablet:hidden flex  ">
            {makers.map((item) => (
              <div className="flex gap-x-[1rem] items-center font-[500] text-[12px]">
                <p className="">{item} </p>
                <p>|</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const History = () => {
  return (
    <div className="w-full laptop:p-0  ">
      <div className="laptop:m-auto laptop:text-center laptop:block flex items-center justify-between p-[2rem]">
        <PageTitle padding>
          History
        </PageTitle>
        <NormalSearch
          page={"history"}
          hideActions
          width="md:w-[40%] w-full laptop:flex hidden"
          placeholder="Search for any product, service or category"
        />
        <FiSearch className="laptop:hidden block text-[2rem]" />
      </div>

      <div>
        {history?.map((item) => (
          <HistoryCard day={item.day} history={item.history} />
        ))}
      </div>
    </div>
  );
};

export default History;
