import Link from 'next/link';
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'

const Button = ({className, children, action, show, link}:any) => {
  return (
    <Link href={link || ''}>
      <div
        onClick={action}
        // disabled={active}
        className={`${className} text-center btn md:btn-d md:btn-d-big sm:btn-m cursor-pointer ${
          show && "flex items-center gap-1"
        }`}
      >
        {children} {show && <BiChevronRight className="text-[1.5em]" />}{" "}
      </div>
    </Link>
  );
}

export default Button