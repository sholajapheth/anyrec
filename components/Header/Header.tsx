import React, { useEffect } from "react";
import Logo from "../utills/assets/Logo";
import Container from "../utills/Container";
import { MdOutlineMenu } from "react-icons/md";

const Header = () => {
  const [padding, setPadding] = React.useState(true);

  useEffect(() => {
    window.document.onscroll = function () {
      if (document.documentElement.scrollTop > 0) {
        setPadding(false);
      } else {
        setPadding(true);
      }
    };
  }, []);
  return (
    <div
      className={`flex items-center justify-between w-full lg:px-[5rem] md:px-[3rem] px-[2rem] ${
        padding ? "py-[2rem] " : "py-[0.8rem]"
      } sticky inset-0 bg-white z-50 shadow-md animate-fadeIn animate-all duration-500`}
    >
      <Logo />
      <div className="flex items-center lg:gap-x-16 md:gap-x-12 gap-x-6">
        <p className="font-[400] md:text-[20px] text-[14px]">See Recomendations</p>
        <button className="text-[30px]">
          <MdOutlineMenu className="sm:text-[16px] md:text-[30px] "/>
        </button>
      </div>
    </div>
  );
};

export default Header;
