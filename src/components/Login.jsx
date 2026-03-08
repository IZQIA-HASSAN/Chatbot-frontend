import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import login from "../assets/login.svg"

// Placeholder for your dashboard image
const dashboard = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"

const Login = () => {
  const [focusedInput, setFocusedInput] = useState(null)

  return (
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-200 to-gray-400'>

      {/* Dashboard Image Panel */}
      <div className='w-85 h-150 rounded-l-xl overflow-hidden shadow-2xl'>
        <img src={login} className=' object-cover' alt="dashboard preview" />
      </div>

      {/* Login Form Panel */}
      <div className='w-110 h-150 bg-white rounded-r-xl shadow-2xl flex flex-col justify-center items-center px-10 gap-1'>

        {/* Title */}
        <div className='w-full mb-4'>
          <h1 className='text-3xl font-bold text-gray-800'>Welcome back</h1>
          <p className='text-sm text-gray-400 mt-1'>Sign in to your account</p>
        </div>

        {/* Email */}
        <div className='flex flex-col w-full gap-1 mb-3'>
          <label className='text-sm font-medium text-gray-600'>Email</label>
          <input
            className='h-11 w-full rounded-lg p-3 bg-gray-50 text-gray-800 text-sm outline-none transition-all duration-200'
            style={{
              border: focusedInput === 'email' ? '1.5px solid #111' : '1.5px solid #e5e7eb'
            }}
            type="email"
            placeholder='Enter your email'
            onFocus={() => setFocusedInput('email')}
            onBlur={() => setFocusedInput(null)}
          />
        </div>

        {/* Password */}
        <div className='flex flex-col w-full gap-1 mb-1'>
          <label className='text-sm font-medium text-gray-600'>Password</label>
          <input
            className='h-11 w-full rounded-lg p-3 bg-gray-50 text-gray-800 text-sm outline-none transition-all duration-200'
            style={{
              border: focusedInput === 'password' ? '1.5px solid #111' : '1.5px solid #e5e7eb'
            }}
            type="password"
            placeholder='Enter your password'
            onFocus={() => setFocusedInput('password')}
            onBlur={() => setFocusedInput(null)}
          />
        </div>

        {/* Forgot password */}
        <div className='w-full text-right mb-4'>
          <span className='text-xs text-gray-400 hover:text-gray-600 cursor-pointer transition-colors'>Forgot password?</span>
        </div>

        {/* Login Button */}
        <Link to='' className='w-full'>
          <button className='w-full h-11 rounded-lg text-white text-sm font-semibold bg-gray-900 cursor-pointer hover:bg-gray-700 active:scale-95 transition-all duration-150 shadow-md'>
            Login
          </button>
        </Link>

        {/* Signup */}
        <p className='text-sm text-gray-400 mt-4'>
          Don't have an account?{' '}
          <Link to='/signup'>
            <span className='text-gray-800 font-semibold hover:underline cursor-pointer'>Sign up</span>
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Login