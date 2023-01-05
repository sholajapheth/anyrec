import React from "react";
import { HeadComp } from "../../components/utills";
import ForgotPassword from "../../components/auth/ForgotPassword";

const forgotpassword = () => {
  return (
    <>
      <HeadComp page={"Forgot Password"} />
      <ForgotPassword />
    </>
  );
};

export default forgotpassword;
