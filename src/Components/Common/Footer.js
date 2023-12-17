import React from 'react'
import { IconContext } from "react-icons";
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <div className='h-[400px] flex bg-darkBg mt-24'>
<div className='h-full w-1/2 '>

</div>
<div className='h-full flex flex-col w-1/2  px-12 py-24'>
<h1 className='my-4 text-lightText text-3xl'>Contact</h1>
<h2 className='text-lightText text-xl'>+9779840515030</h2>
<h2 className='text-lightText text-xl'>gracefulcharity071@gmail.com</h2>
<h1 className='my-4 text-lightText text-3xl'>Social</h1>
<a href='https://www.instagram.com/ok_flamingo_/' target='_blank'><IconContext.Provider value={{ size: 30 }}>
                      <FaInstagram className="text-lightText hover:text-red-500 hover:cursor-pointer" />
                    </IconContext.Provider></a>

</div>
    </div>
  )
}
