import React from 'react'
import dashboard from '../assets/dashboard.jpg'

const Signup = () => {
  return (
     <div className='flex justify-center items-center  min-h-screen bg-gray-300'>
                <div className=' w-85 h-150'><img src={dashboard} className='h-full  bg-contain' alt="" /></div>
                <div className='border w-110 h-150 rounded-md flex flex-col justify-center items-center '>
       <h1 className='text-3xl mb-5 font-bold'>Signup</h1>
                    <span className='flex flex-col justify-center p-5'>
    
                        <label htmlFor="">Username</label>
                        <input className='border h-8 w-70 rounded-md p-2' type="text" placeholder='Enter Email' /></span>
                    <span className='flex flex-col justify-center p-5'>
                        <label htmlFor="">Email</label>
                        <input className='border h-8 w-70 rounded-md p-2' type="text" placeholder='Enter Password' /></span>
    
<span className='flex flex-col justify-center p-5'>
                        <label htmlFor="">Password</label>
                        <input className='border h-8 w-70 rounded-md p-2' type="text" placeholder='Enter Password' /></span>

                    <span>
                        <button className='mt-5 border w-50 h-10 rounded-md text-white font-bold bg-black cursor-pointer transition-all duration-100 ease-out scale-95 active:scale-100'>Signup</button>
                    </span>
    
    
                </div>
            </div>
  )
}

export default Signup