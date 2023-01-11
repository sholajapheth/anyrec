import React from 'react'
import { BiChevronRight } from 'react-icons/bi'

const Button = ({className, children, active=true, action, show}:any) => {
  return (
    <button
      onClick={action}
      disabled={active}
      className={`${className} btn md:btn-d md:btn-d-big sm:btn-m cursor-pointer ${
        show && "flex items-center gap-1"
      }`}
    >
      {children} {show && <BiChevronRight className='text-[1.5em]' />}{" "}
    </button>
  );
}

export default Button