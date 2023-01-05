import React from 'react'

const Button = ({className, children, active=true, action}:any) => {
  return (
    <button onClick={action} disabled={active} className={`${className} btn md:btn-d md:btn-d-big sm:btn-m cursor-pointer`}>{children}</button>
  )
}

export default Button