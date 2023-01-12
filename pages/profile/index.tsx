import React from "react";
import { HeadComp } from "../../components/utills";
import { Profile } from "../../components";

const index = () => {
  return (
    <>
      <HeadComp page={"Profile"} />
      <Profile />
    </>
  );
};

export default index;
