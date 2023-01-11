import React from "react";
import { HeadComp } from "../components/utills";
import { Home } from "../components";

const index = () => {
  return (
    <>
      <HeadComp page={"Home"} />
      <div className="w-full">
        <Home />
      </div>
    </>
  );
};

export default index;
