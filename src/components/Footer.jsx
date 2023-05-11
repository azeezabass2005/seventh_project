import React from 'react'

const Footer = () => {

    let year = new Date().getFullYear()

  return (
    <div className={`w-full flex justify-center items-center bg-[#224]`}>
        <p className={`text-[#ccc]`}>
            coded by codegem &copy; {year}
        </p>
    </div>
  )
}

export default Footer