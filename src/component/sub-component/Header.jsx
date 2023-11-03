import Nav from "./nav"
import map from '../../assets/Rectangle .png'




function Header() {
  return (
    <div className='relative bg-hero w-full max-h-[742px] h-auto lg:h-screen bg-cover z-50 '>
      <div className=" w-full h-full ">
       <Nav/>
      
       <div className=" main flex flex-col relative w-full h-[500px] md:h-auto lg:flex-row  ">
            <div className=" hidden lg:flex lg:w-1/2 float-left w-full sm:float-none ">
                <h1 className="w-[80%] mx-[10%]  text-sm  content ">The most affortable place to stay in the san franciso bay area</h1>
            </div>
            <div className="map flex lg:justify-center float-right sm:float-none sm:w-full w-full  mt-6">
                <div className="flex  lg:w-[408px]  sm:w-[80%]  h-[340px] sm:h-auto  flex-col">
                    <img src={map} alt="map"  className="contain  "/>
                    <div className="search flex flex-row  align-middle content-center p-5 w-[90%] lg:w-full mx-[5%] lg:mx-0  mt-4">
                       <div className="type relative w-[38%] ">
                         <select className="select w-full">
                          <option defaultValue=''>All type</option>
                          <option value="">Flat</option>
                          <option value="">2 Bed Room</option>
                          <option value="">Dulex</option>
                         </select>
                       </div>
                       <div className="Neighborhood w-[48%]  ">
                        <select className="select w-full">
                         <option selected value="">Neighborhood</option>
                          <option value="">Dulex</option> 
                        </select>
                       </div>
                       <button className="search-bar w-[14%] justify-center ">
                         <svg className=" ml-2 " width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9901 12.3188L18.2939 16.6226C18.4452 16.7739 18.5301 16.9792 18.53 17.1932C18.53 17.4072 18.4449 17.6124 18.2935 17.7637C18.1421 17.915 17.9368 17.9999 17.7228 17.9998C17.5088 17.9998 17.3036 17.9147 17.1523 17.7633L12.8485 13.4595C11.562 14.456 9.9441 14.9249 8.32406 14.7709C6.70401 14.6169 5.20349 13.8515 4.12774 12.6304C3.05199 11.4094 2.48182 9.82433 2.53323 8.19779C2.58463 6.57125 3.25375 5.02539 4.40446 3.87468C5.55517 2.72397 7.10104 2.05485 8.72757 2.00344C10.3541 1.95203 11.9391 2.5222 13.1602 3.59795C14.3813 4.6737 15.1467 6.17423 15.3007 7.79427C15.4547 9.41432 14.9858 11.0322 13.9893 12.3188H13.9901ZM8.93033 13.1995C10.2033 13.1995 11.4241 12.6938 12.3243 11.7937C13.2244 10.8936 13.7301 9.67272 13.7301 8.39974C13.7301 7.12676 13.2244 5.90592 12.3243 5.00579C11.4241 4.10565 10.2033 3.59997 8.93033 3.59997C7.65735 3.59997 6.43651 4.10565 5.53637 5.00579C4.63624 5.90592 4.13055 7.12676 4.13055 8.39974C4.13055 9.67272 4.63624 10.8936 5.53637 11.7937C6.43651 12.6938 7.65735 13.1995 8.93033 13.1995Z" fill="white"/>
                           </svg> 
                       </button>
                    </div>
                </div>
             
            </div>
       </div>
    </div>
  </div>
  )
}

export default Header