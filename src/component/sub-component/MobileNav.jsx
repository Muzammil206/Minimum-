import { useState } from "react"



function MobileNav() {
    const [open, setOpen] = useState(false)
  return (
    <div className="  w-6  ">
        <button  onClick={ ()=>setOpen((prev) => !prev)}  className="  " >x</button>
         <div className={ open ? `hidden` : `flex bg-white w-28 h-auto p-4 border  rounded-lg flex-col z-50`}>
            <a href="">Home</a>
            <a href="">Contact us</a>
            <a href="">Tenant </a>
         </div>
    </div>
  )
}

export default MobileNav