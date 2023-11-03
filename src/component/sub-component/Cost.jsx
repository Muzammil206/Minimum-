
import side from '../../assets/side.png'
import IconsComponent from './IconsComponent'


function Cost() {
  return (
    <section className="w-full h-auto ">
      <div className="container flex justify-center w-[90%] mx-[5%] flex-col">
        <div className="heading flex justify-centerss flex-col">
              <h1 className="hang">minimum living cost takes care of everything</h1> 
              <div className="w-[90%] h-[4px] border bg-[#F4511E] ">
                
              </div>
        </div>
        <div className="sub flex flex-col md:flex-row relative w-full h-full">
            <img src={side} alt="side-image" />
            <div className="icon-list flex justify-center align-middle lg:my-[5%]  h-[90%]   mb-16 lg:mb-6">
              <IconsComponent/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Cost