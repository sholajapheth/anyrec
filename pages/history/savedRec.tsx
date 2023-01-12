import React from "react";
import { HeadComp } from "../../components/utills";
import { SavedRec } from "../../components";

const index = () => {
  return (
    <>
      <HeadComp page={"History"} />
      <SavedRec />
    </>
  );
};

export default index;
