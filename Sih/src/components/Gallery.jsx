import React from 'react'
import { data } from '../utility/data'
import Navbar from './navbar';
import Gallerycard from './Gallerycard';
function Gallery() {
   
  return (
    <div className=' '>
        
        <div className=' flex flex-wrap gap-8   bg-[#F5F0F0]'>
      {
      
        data.map((m)=>{
           return (
           
           <Gallerycard data={m} />
           
           )
        })
       
      }
      </div>
      
    </div>
  )
}

export default Gallery