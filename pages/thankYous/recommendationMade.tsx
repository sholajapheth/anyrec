import React from "react";
import { PageTitle } from "../../components/utills/Text";
import { Button, HeadComp } from "../../components/utills";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import Link from "next/link";

const index = () => {
  return (
    <>
      <HeadComp page={"Recommendation Mde"} />
      <div className="w-full h-[80vh] mt-[4rem]">
        <div className="lg:w-[30%] md:w-[45%] m-auto flex flex-col justify-between items-center h-full">
          <PageTitle>Thank You!</PageTitle>

          <div className="flex flex-col gap-[4rem] items-center">
            <div className="w-[110px] h-[110px] rounded-full shadow-xl text-[80px] flex items-center justify-center text-center ">
              <IoCheckmarkDoneSharp />
            </div>
            <p className="text-[20px] font-[600]">
              Recomendation Successfully Made
            </p>
          </div>

          <div className="flex flex-col gap-y-[3rem] text-center w-full">
            <Button className="p-[1rem] w-full ">
              Make New Recommendation
            </Button>

            <Link
              href={"/"}
              className="border-b-[2px] border-b-black text-[18px]"
            >
              Go Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
