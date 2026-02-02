import React from 'react'

const Pera = ({children, className = "",...props }) => {
  return (
    <p
    {...props}
     className={` text-black text-center font-graphik-regular text-[12px] md:text-[14px] font-light leading-[24px] md:leading-[26px] tracking-[0.5px] capitalize
        ${className}`}>
      {children}
    </p>
  )
}

export default Pera
