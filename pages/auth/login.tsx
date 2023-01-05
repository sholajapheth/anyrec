import React from "react";
import { HeadComp } from "../../components/utills";
import { Login } from "../../components/auth";

const login = () => {
  return (
    <>
      <HeadComp page={"Login"} />
        <Login />
    </>
  );
};

export default login;
