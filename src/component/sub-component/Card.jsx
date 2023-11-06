import { api } from '../Reusable/Api'
import { useEffect, useState } from 'react'


function Card() {
  const baseID = import.meta.env.VITE_REACT_BASE_ID
  const tableId = import.meta.env.VITE_REACT_TABLE_ID
  const [data, setData] = useState([])
  const getData = () => {
    api.get(`${baseID}/${tableId}`)
    .then((response) =>{
      setData(response.data.records)
    })
    .catch((error) => {
      console.error(error)
    })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '25px', alignItems: 'center'}}>
      {data.map((item, index)=> (
         <div className="card flex flex-col w-[300px] h-auto " key={index}>
         <img src={item.fields.Image} alt="blog-image" className=' w-full h-[230px]' />
         <h1 className='blog-text text-lg w-[70%]  font-bold ml-5 my-5'>{item.fields.Address}</h1>
         <p className='blog-p ml-5'>Private Room</p>
         <span className='ml-5 price'>{item.fields.Price}/month</span>
         <div className="w-[90%] h-[1px] border bg-black mx-[5%] mt-5"></div>
         <div className="ml-1 w-full flex flex-row justify-around pt-4 content-center align-middle">
             <span>  {item.fields.Garage}🚗</span>
             <div className="w-[1px] h-14 border bg-blac"></div>
             <span>{item.fields.BedRoom}🛁</span>
             <div className="w-[1px] h-14 border bg-blac"></div>
             <span >#{index}</span>
         </div>
     </div>
      ))}
    </div>
  )
}

export default Card