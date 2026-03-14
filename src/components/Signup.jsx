import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import signup from "../assets/signup.svg"

// Replace with your actual import: import dashboard from '../assets/dashboard.jpg'
const dashboard = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
const API_URL = 'http://localhost:5000'

const Signup = () => {
  const [focusedInput, setFocusedInput] = useState(null)
  const [username , setUsername]  = useState('')
  const [email , setEmail]  = useState('')
  const [password , setPassword]  = useState('')
  const [error , setError] = useState('')
  const navigate = useNavigate()

  const handlesignup = async(e)=>{
e.preventDefault();
setError('')
  

  try{
    const response = await fetch(`${API_URL}/signup` , {
      method:'POST',
    headers:{'Content-Type' : 'application/json'},
    body:JSON.stringify({username , password , email})
    });
    const data = await response.json()
    if(!response.ok){
      setError(data.error || 'signup failed')
    }else{
      alert('signup successful please login ')
      navigate('/login')
    }
    
  }catch(err){
    setError('error')
    console.error(err)
  }
}

  return (
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-200 to-gray-400'>

      {/* Dashboard Image Panel */}
      <div className='w-85 h-150 rounded-l-xl overflow-hidden shadow-2xl flex justify-center items-center'>
        <img src={signup} className=' object-cover' alt="dashboard preview" />
      </div>

      {/* Signup Form Panel */}
      <form onSubmit={handlesignup}  className='w-110 h-150 bg-white rounded-r-xl shadow-2xl flex flex-col justify-center items-center px-10 gap-1'>

        {/* Title */}
        <div className='w-full mb-4'>
          <h1 className='text-3xl font-bold text-gray-800'>Create account</h1>
          <p className='text-sm text-gray-400 mt-1'>Sign up to get started</p>
        </div>

        {/* Username */}
        <div className='flex flex-col w-full gap-1 mb-3'>
          <label className='text-sm font-medium text-gray-600'>Username</label>
          <input
          value={username}
          onChange={e=>setUsername(e.target.value)}
            className='h-11 w-full rounded-lg p-3 bg-gray-50 text-gray-800 text-sm outline-none transition-all duration-200'
            style={{
              border: focusedInput === 'username' ? '1.5px solid #111' : '1.5px solid #e5e7eb'
            }}
            type="text"
            placeholder='Enter your username'
            onFocus={() => setFocusedInput('username')}
            onBlur={() => setFocusedInput(null)}
          />
        </div>

        {/* Email */}
        <div className='flex flex-col w-full gap-1 mb-3'>
          <label className='text-sm font-medium text-gray-600'>Email</label>
          <input
          value={email}
          onChange={e=>setEmail(e.target.value)}
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
        <div className='flex flex-col w-full gap-1 mb-6'>
          <label className='text-sm font-medium text-gray-600'>Password</label>
          <input
          value={password}
          onChange={e=>setPassword(e.target.value)}
            className='h-11 w-full rounded-lg p-3 bg-gray-50 text-gray-800 text-sm outline-none transition-all duration-200'
            style={{
              border: focusedInput === 'password' ? '1.5px solid #111' : '1.5px solid #e5e7eb'
            }}
            type="password"
            placeholder='Create a password'
            onFocus={() => setFocusedInput('password')}
            onBlur={() => setFocusedInput(null)}
          />
        </div>

        {/* Signup Button */}
        <button type='submit' className='w-full h-11 rounded-lg text-white text-sm font-semibold bg-gray-900 cursor-pointer hover:bg-gray-700 active:scale-95 transition-all duration-150 shadow-md'>
          Create Account
        </button>

        {/* Login link */}
        <p className='text-sm text-gray-400 mt-4'>
          Already have an account?{' '}
          <Link to='/login'>
            <span className='text-gray-800 font-semibold hover:underline cursor-pointer'>Login</span>
          </Link>
        </p>

      </form>
    </div>
  )
}

export default Signup