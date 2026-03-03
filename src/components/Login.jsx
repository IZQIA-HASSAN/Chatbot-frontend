import React from 'react'
import dashboard from '../assets/dashboard.jpg'
import {Link}from 'react-router-dom'

const Login = () => {
    return (
        <div className='flex justify-center items-center  min-h-screen bg-gray-300'>
            <div className=' w-85 h-150'><img src={dashboard} className='h-full  bg-contain' alt="" /></div>
            <div className='border w-110 h-150 rounded-md flex flex-col justify-center items-center '>
   <h1 className='text-3xl mb-5 font-bold'>Login</h1>
                <span className='flex flex-col justify-center p-5'>

                    <label htmlFor="">Email</label>
                    <input className='border h-8 w-70 rounded-md p-2 bg-gray-100' type="text" placeholder='Enter Email' /></span>
                <span className='flex flex-col justify-center p-5'>
                    <label htmlFor="">Password</label>
                    <input className='border h-8 w-70 rounded-md p-2 bg-gray-100' type="text" placeholder='Enter Password' /></span>

                <span>
                 
                   <Link to=''><button className='mt-5 border w-50 h-10 rounded-md text-white font-bold bg-black cursor-pointer transition-all duration-100 ease-out scale-95 active:scale-100'>Login</button></Link> 
               <p>Donot have an account ?<Link to='/signup'><button className='mt-5 hover:scale-100 cursor-pointer'><b className='text-blue-400'>Signup</b></button></Link> </p>
                </span>


            </div>
        </div>

    )
}

export default Login