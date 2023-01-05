import Link from "next/link";
import React from "react";
import Container from "../utills/Container";
import Image from "next/image";
import { BiHide, BiInfoCircle, BiShow } from "react-icons/bi";
import { Button } from "../utills";

const LoginSocialButton = ({ src, name }: any) => {
  return (
    <button className="w-[50px] h-[50px] overflow-hidden shadow-xl rounded-full p-[10px] hover:translate-x-2 transition-all duration-500  ">
      <Image alt={name} src={src} width={40} height={40} />
    </button>
  );
};

const FirstScreen = ({ setStep }: any) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);

  return (
    <div className="m-auto text-center  lg:p-[3rem] md:p-[2rem] p-[1rem] ">
      <div className=" md:leading-[4rem] md:mt-0 mt-[4rem] ">
        <p className="font-[900] md:text-[40px] text-[25px] ">Sign up</p>
      </div>

      <div className="flex flex-col items-center text-[20px] font-[700] mt-[2rem]">
        <p className="md:block hidden ">Sign up via</p>

        <div className=" flex items-center gap-x-[3rem] ">
          <LoginSocialButton src={"/images/g.svg"} />
          <LoginSocialButton src={"/images/fb.svg"} />
          <LoginSocialButton src={"/images/t.svg"} />
        </div>
        <p>or</p>
      </div>

      <div className="w-full mt-[2rem] ">
        <form className="m-auto flex flex-col items-center gap-y-[2rem]  md:w-[418px] w-full">
          <div className="flex flex-col gap-y-5 w-full">
            <label htmlFor="email" className="font-[500] text-[16px] ">
              Email Address
            </label>
            <input
              className={`w-full rounded-full outline border-none outline-[1px]   md:p-[1.8rem] p-[1rem]`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-y-5 w-full">
            <label
              htmlFor="password"
              className="font-[500] md:text-[16px] text-[14px] "
            >
              Password
            </label>
            <div className="flex items-center w-full outline outline-[1px] rounded-full pr-[12px]">
              <input
                className="   md:p-[1.8rem] p-[1rem] border-none flex-1  "
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p
                onClick={() => setShowPassword(!showPassword)}
                className="text-[2em] font-[700] cursor-pointer "
              >
                {showPassword ? <BiHide /> : <BiShow />}
              </p>
            </div>
            {passwordError && (
              <div className="text-[#FF2D2D] flex items-center gap-x-4 m-auto">
                <BiInfoCircle className="text-[2rem]" />{" "}
                <p className="text-[14px] ">
                  Wrong Password; please enter the correct password
                </p>
              </div>
            )}
          </div>
          <button
            onClick={() => setStep(2)}
            className={
              " btn md:btn-d md:btn-d-big text-[16px] cursor-pointer md:py-[1.5rem] py-[1rem] mt-[2rem]"
            }
          >
            Next
          </button>
        </form>
        <div className="mt-[1.2rem] ">
          <img
            className="m-auto"
            alt="line_1"
            src={"/images/signUpPrg_1.svg"}
          />
        </div>
        <div className="mt-[3rem]">
          <Link
            href={"./login"}
            className=" font-[700] md:text-[20px] mt-[2rem]"
          >
            <u>Log In instead</u>
          </Link>
        </div>
      </div>
    </div>
  );
};

const SecondScreen = ({ setStep }: any) => {
  const [categoryOfInterest, setCategoryOfInterest] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [dateOfBirth, setDateOfBirth] = React.useState("");

  const handleLogin = (e: any) => {
    console.log("clicked");
    
  };
  return (
    <div className="m-auto text-center  lg:p-[3rem] md:p-[2rem] p-[1rem]">
      <div className=" md:leading-[4rem] md:mt-0 mt-[4rem] ">
        <p className="font-[900] md:text-[40px] text-[25px]">Sign up</p>
      </div>

      <div className="w-full mt-[2rem] ">
        <form className="m-auto flex flex-col items-center gap-y-[2rem]  md:w-[418px] w-full">
          <div className="flex flex-col gap-y-5 w-full">
            <label
              htmlFor="Categories of Interest"
              className="font-[500] text-[16px] "
            >
              Categories of Interest
            </label>
            <select
              name="category of interest"
              value={categoryOfInterest}
              onChange={(e) => setCategoryOfInterest(e.target.value)}
              className={`w-full rounded-full outline border-none outline-[1px]   md:p-[1.8rem] p-[1rem]`}
            >
              <option value="">Select Interest</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div className="flex flex-col gap-y-5 w-full md:mt-[3rem] mt-[2rem]">
            <label htmlFor="location" className="font-[500] text-[16px] ">
              Location
            </label>
            <select
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className={`w-full rounded-full outline border-none outline-[1px]   md:p-[1.8rem] p-[1rem]`}
            >
              <option value="">Select Location</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div className="flex flex-col gap-y-5 w-full md:mt-[3rem] mt-[2rem]">
            <label htmlFor="location" className="font-[500] text-[16px] ">
              Date of Birth
            </label>
            <input
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className={`w-full rounded-full outline border-none outline-[1px]   md:p-[1.8rem] p-[1rem]`}
              type="date"
              name="date of birth"
            />
          </div>

          <button
            onClick={handleLogin}
            className={
              " btn md:btn-d md:btn-d-big text-[16px] cursor-pointer md:py-[1.5rem] py-[1rem] mt-[2rem]"
            }
          >
            Sign Up
          </button>
        </form>

        <div className="mt-[1.2rem] ">
          <img
            className="m-auto"
            alt="line_1"
            src={"/images/signUpPrg_2.svg"}
          />
        </div>
        <div className="mt-[3rem]">
          <p
            onClick={() => setStep(1)}
            className=" font-[700] md:text-[20px] mt-[2rem]"
          >
            <u>Back</u>
          </p>
        </div>
      </div>
    </div>
  );
};

const SignUp = () => {
  const [step, setStep] = React.useState(1);
  return (
    <Container>
      {step === 1 && <FirstScreen setStep={setStep} />}
      {step === 2 && <SecondScreen setStep={setStep} />}
    </Container>
  );
};

export default SignUp;
