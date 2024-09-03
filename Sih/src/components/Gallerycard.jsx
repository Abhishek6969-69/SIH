import React from 'react'

function Gallerycard(props) {
    console.log(props);
  return (
    <div className='   w-96 hover:scale-125 '>
  
   <div className=' '>
    
    <img className=' w-36 h-36 rounded-full m-auto bg-cover' src={props.data.image} />
    

   </div>
   <div className=' flex  justify-center'>
   <div className=''>
    <h1>Name:{props.data.name}</h1>
    <h1>Branch:{props.data.branch}</h1>
    <h1>Passed year:{props.data.placement.year}</h1>
    <h1>Position:{props.data.placement.position}</h1>
    <h1>company:{props.data.placement.company}</h1>
   </div>
   </div>
    </div>
  )
}

export default Gallerycard