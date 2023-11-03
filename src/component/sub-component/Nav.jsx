import logo from '../../assets/logo.png'
import MobileNav from './MobileNav'


function Nav() {
  return (
   <div className=" ">
     
     <nav className='hidden lg:flex flex-1 '>
        <div className="logo flex pt-[15px]">
           <img src= {logo} alt="logo"  />
           
        </div>
        <div className="nav ml-4 pt-[30px] ">
            <ul className=' flex flex-row hover:text-[#F4511E] '>
                <a className='hover:text-[#F4511E] ' href="" >Home</a>
                <a className='hover:text-[#F4511E] ' href="">Landloard</a>
                <a className='hover:text-[#F4511E] ' href="">Contact us</a>
                <a className='hover:text-[#F4511E] ' href="">Tenant</a>
                
            </ul>
        </div>
    </nav>
    <div className="line  hidden lg:flex w-[80%] h-[0.5px] border bg-white  align-middle justify-center mt-3 mx-[10%] ">
    
    </div>
     <MobileNav/>
    <div className=" lg:hidden  logo flex justify-around pt-[15px] mobile nav">
        
           <img src= {logo} alt="logo"  />
        </div> 
        
   </div>
  )
}

export default Nav