import { useState } from "react"
import openMenu from '../../assets/open.svg'
import closeMenu from '../../assets/close.svg'



function MobileNav() {
    const [open, setOpen] = useState(true)
  return (
    <div className=" lg:hidden  sm:flex w-6 p-4 ">
        <div   onClick={ ()=>setOpen((prev) => !prev)}  className=" w-5 " >
          <img src={ open ? openMenu : closeMenu} alt="" />
            
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