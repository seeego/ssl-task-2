import React from 'react'
import Image from "../../assets/image1.jpg";
import {IoMdNotificationsOutline} from"react-icons/io"
import { BsSearch } from 'react-icons/bs';

const nav = () => {
  return (
    <nav className=' my-3 d-flex flex-row justify-content-between position-fixed fixed-top bg-white py-1' >
      <div className='w-5 d-flex align-items-center justify-content-center w-25'>
        <p className=' rounded-circle bg-blue my-auto' style={{width: "16px", height:"16px"}}></p>
        <p className='text-black h6 mt-2'>Compute</p>
      </div>

      <div className='container d-flex align-items-center justify-content-between'>
       <p className=' w-50 rounded-3 border border-1 border-gray p-1 px-3'><BsSearch/> <input type="text" className="bg-transparent rounded-2 border-0 w-50 bg-gray px-2 py-1" /></p>
      <p><IoMdNotificationsOutline/> </p>
      </div>

      <div className='w-25 d-flex align-items-center justify-content-center'>
       <img src={Image} alt="PFP" className='d-block rounded-circle mx-3' style={{width:"20%", height:"auto"}}/>
       <div className='h-100d-flex flex-column justify-content-center align-items-center' style={{fontSize:".9em"}}>
        <p className=' m-0' style={{fontWeight: "bolder"}}>Anna Newman</p>
        <p className='m-0'>Head HR</p>
       </div>

      </div>
    </nav>
  )
}

export default nav