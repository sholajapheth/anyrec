import React from "react";
import { NormalSearch } from "../utills";
import { history } from "../data";
import { FiSearch } from "react-icons/fi";
import { PageTitle } from "../utills/Text";
import HistoryCard from "./HistoryCard";

const SavedRec = () => {
  return (
    <div className="w-full laptop:p-0  ">
      <div className="laptop:m-auto laptop:text-center laptop:block flex items-center justify-between p-[2rem]">
        <PageTitle padding>Saved Recommendations</PageTitle>
        <NormalSearch
          page={"history"}
          hideActions
          width="md:w-[40%] w-full laptop:flex hidden"
          placeholder="Search for any product, service or category"
        />
        <FiSearch className="laptop:hidden block text-[2rem]" />
      </div>

      <div>
        {history?.map((item, index) => (
          <HistoryCard key={index} day={item.day} history={item.history} />
        ))}
      </div>
    </div>
  );
};

export default SavedRec;
