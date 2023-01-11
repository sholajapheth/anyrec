import Link from "next/link";
import React from "react";

const Logo = ({size}:any) => {
  return (
    <Link href={"/"}>
      <p className={`${!size ? "md:text-[30px] text-[18px]": size} font-[900]`}>
        anyRec
      </p>
    </Link>
  );
};

export default Logo;
