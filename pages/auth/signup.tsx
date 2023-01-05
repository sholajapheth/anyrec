import React from "react";
import { HeadComp } from "../../components/utills";
import { SignUp } from "../../components/auth";

const signup = () => {
  return (
    <>
      <HeadComp page={"signup"} />
      <SignUp />
    </>
  );
};

export default signup;
