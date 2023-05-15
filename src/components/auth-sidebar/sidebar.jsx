import React from 'react'
import './sidebar.css'
import { useNavigate } from 'react-router-dom'

export default function sidebar() {

  const navigate = useNavigate()

  return (
    <aside className='sidebar fixed top-0 left-0 h-screen bg-indigo-400 text-gray-50 flex items-center justify-center'>
      <div className='w-11/12'>
        <h1 className='text-start text-7xl mb-10'>Sign in now to open your business/shop today</h1>
        <p className='text-start'>Still don't have an account with us?</p>
        <button onClick={() => {navigate("/register")}} className='rounded-md border border-white px-4 py-1 my-2'>Register here!</button>
      </div>
    </aside>
  )
}
