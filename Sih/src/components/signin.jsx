import axios from 'axios';
import React, {  useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'


function Sigin() {
    
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
   
        const navigate=useNavigate();
  return (
    <div className='border flex items-center justify-center  h-screen   bg-[#CFCFEA]  '>
        <div className='w-[330px] border p-8 rounded-lg bg-white'>
            <h1 className='mx-[30%] text-3xl    font-bold '>Signin</h1>
            <div className='flex   justify-center my-2'><h3 className='mx-auto text-center capitalize text-gray-600'>enter your credential to acces your account</h3></div>
            
            <div className=' flex-wrap my-3 '>
           
            <label>Email</label>
            <input  className=' border w-[250px]  p-1 rounded-md placeholder:text-sm'placeholder='sbh123yadav@gmail.com' onChange={(e)=>{
                setemail(e.target.value)
            }}  />
            <label>password</label>
            <input  className=' border w-[250px]  p-1 rounded-md placeholder:text-sm' placeholder='123456' onChange={(e)=>{
                setpassword(e.target.value)
            }}  />
            </div>
            <div>
                <button className=' bg-black text-white w-[250px] p-2 rounded-xl ' onClick={async()=>{
                    console.log("hello")
                    const response= await axios.post(`http://localhost:3000/api/v1/user/signin`,{
                       
                        email,
                        password
                      })
                    
                      localStorage.setItem('token',response.data.token);
                   
                  
                      navigate('/')
                }}>Signin</button>
                <h4 className='my-2'>Don't have account? <Link className='underline' to={'/signup'}>sign up</Link></h4>
            </div>
        </div>
    </div>
  )
}

export default Sigin