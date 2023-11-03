import Card from "./Card"

function Properties() {
  return (
    <section className="bg-[#F5F5F5]  h-auto w-full">
        <div className="w-5/6 mx-auto">
            <div className=" flex lg:flex-row sm:flex-col lg:justify-between mb-10" >
                <div className="">
                    <h1 className="hang">list of properties</h1>
                    <svg width="84" height="4" viewBox="0 0 84 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 2H84" stroke="#F4511E" stroke-width="3"/>
                    </svg>
                </div>
                <div className="button mt-4">
                    <button className="btn">View All Property</button>
                </div>
            </div>
            <div className="card-section">
              <Card/>
            </div>
           <div className="flex   w-full my-16">
             <div className=" flex relative  next lg:w-[300px] h-[60px] mt-16  w-[70%] mx-[15%] lg:mx-[40%]  ">
                    <div className="first flex h-full w-3/12 justify-center"><h5>first</h5></div>
                    <div className="number-1 flex h-full w-1/6">1</div>
                    <div className="number-1 h-full w-1/6 flex bg-[#F4511E] text-white "><p className="text-white">2</p></div>
                    <div className="number-1 h-full w-1/6 ">3</div>
                    <div className="last number-1 h-full w-3/12"><h5>Next</h5></div>
              </div>
           </div>
        </div>
        
    </section>
  )
}

export default Properties