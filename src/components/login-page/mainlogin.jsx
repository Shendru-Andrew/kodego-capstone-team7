import React from 'react'
import './mainlogin.css'

export default function mainlogin() {
  return (
    <section className='bg-gray-200 mainlogin flex items-center justify-center'>
        <form className='loginform'>
            <h1 className='text-center text-4xl mb-1'>Sign in to account</h1>
            <p className='text-center mb-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, enim.</p>
            <label className='block'>Username:</label>
            <input className='w-full py-1 rounded-md mb-4' type="text" name="" id="" />
            <label className='block'>Password:</label>
            <input className='w-full py-1 rounded-md' type="password" name="" id="" />
            <button className='w-full rounded-md bg-gray-800 py-2 mt-4 text-white'>Login</button>
        </form>
    </section>
  )
}
