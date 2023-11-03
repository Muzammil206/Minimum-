import blog from '../../assets/blog.png'


function Card() {
  return (
    <div>
        <div className="card flex flex-col w-[300px] h-auto ">
            <img src={blog} alt="blog-image" className=' w-full h-[230px]' />
            <h1 className='blog-text text-lg w-[70%]  font-bold ml-5 my-5'>2578 Folsom street, san francisco, CA, 94110</h1>
            <p className='blog-p ml-5'>Private Room</p>
            <span className='ml-5 price'>$1200/month</span>
            <div className="w-[90%] h-[1px] border bg-black mx-[5%] mt-5"></div>
            <div className="ml-1 w-full flex flex-row justify-around pt-4 content-center align-middle">
            
                <span>  3🚗</span>
                <div className="w-[1px] h-14 border bg-blac"></div>
                <span>4🛁</span>
                <div className="w-[1px] h-14 border bg-blac"></div>
                <span >#6</span>
            </div>
        </div>
    </div>
  )
}

export default Card