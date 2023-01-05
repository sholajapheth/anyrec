import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <p className="md:text-[30px] text-[18px] font-[900]">anyRec</p>
    </Link>
  );
};

export default Logo;
