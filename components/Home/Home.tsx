import React from "react";
import { Logo, NormalSearch } from "../utills";
import { data } from "../data";

interface HomeCardProps {
  category: string;
  icon: any;
}

const HomeCard = ({ category, icon }: HomeCardProps) => (
  <div className="flex flex-col items-center justify-center">
    <div className="md:h-[6rem] h-[3rem] md:w-[6rem] w-[3rem] md:text-[4rem] text-[2rem] bg-primary rounded-full flex items-center justify-center">
      {icon}
    </div>
    <p className="md:text-[16px] text-[10px] ">
      {category.length > 16 ? category.slice(0, 16) + "..." : category}
    </p>
  </div>
);

const Home = () => {
  return (
    <div className="flex items-center justify-center h-full mt-[5rem] ">
      <div className="text-center w-full flex flex-col gap-[4rem]  md:w-[60%]">
        <div>
          <Logo size={"md:text-[72px] text-[40px]"} />
          <p className="font-[600] md:text-[25px] text-[10px]">
            Get recommendations for anything instantly
          </p>
        </div>

        <div className="md:mx-0 mx-[2rem]">
          <NormalSearch
            page="home"
            placeholder="Search for any product, service or category"
          />
        </div>

        <div className="grid xl:grid-cols-4  grid-cols-3  gap-y-[4rem] items-start">
          {data.slice(0, 6).map((item, index) => (
            <HomeCard key={index} category={item.category} icon={item.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
