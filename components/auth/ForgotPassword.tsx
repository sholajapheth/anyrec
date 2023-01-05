import React from "react";
import { Button } from "../utills";
import Container from "../utills/Container";

const ForgotPassword = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleLogin = (e: any) => {
    console.log(email);
    e.preventDefault();
    if (email === "" || username === "") {
      return;
    }
  };

  return (
    <Container>
      <div className="m-auto text-center  lg:p-[3rem] md:p-[2rem] p-[1rem] ">
        <div className=" leading-[4rem] my-[8rem]">
          <p className="font-[900] md:text-[40px] text-[25px] ">
            Forgot Password
          </p>
        </div>

        <div className="w-full md:mt-[2rem]  ">
          <form className="m-auto flex flex-col items-center gap-y-[2rem]  md:w-[418px] w-full">
            <div className="flex flex-col gap-y-5 w-full">
              <label htmlFor="username" className="font-[500] text-[16px] ">
                Username
              </label>
              <input
                className={`w-full rounded-full md:text-[16px] text-[14px] outline border-none outline-[1px]  md:p-[1.8rem] p-[1rem] `}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                name="username"
              />
            </div>
            <div className="flex flex-col gap-y-5 w-full md:mt-0 mt-[3rem]">
              <label htmlFor="email" className="font-[500] text-[16px] ">
                Email Address
              </label>
              <input
                className={`w-full rounded-full md:text-[16px] text-[14px] outline border-none outline-[1px] md:p-[1.8rem] p-[1rem] `}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
              />
            </div>
            <button
              onClick={handleLogin}
              className={
                " btn md:btn-d md:btn-d-big text-[16px] cursor-pointer md:py-[1.5rem] py-[1rem] mt-[2rem]"
              }
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default ForgotPassword;
