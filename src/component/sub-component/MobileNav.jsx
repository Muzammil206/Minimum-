import { useState } from "react"



function MobileNav() {
    const [open, setOpen] = useState(true)
  return (
    <div className="  w-6 p-6 ">
        <div   onClick={ ()=>setOpen((prev) => !prev)}  className=" w-5 " >
          <svg className=" fill-[#F4511E]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
        <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
         </svg>
            
        </div>
         <div className={ open ? `hidden` : `flex bg-white w-28 h-auto p-4 border  rounded-lg flex-col z-50`}>
            <a href="">Home</a>
            <a href="">Contact us</a>
            <a href="">Tenant </a>
         </div>
    </div>
  )
}

export default MobileNav