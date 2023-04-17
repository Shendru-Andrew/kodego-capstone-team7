import React from 'react'
import './mainlogin.css'

export default function mainlogin() {
  return (
    <section className='bg-gray-200 w-screen h-screen mainlogin'>
        <div className='w-50 h-50'>
            <form>
                <label>Username:</label>
                <input type="text" name="" id="" />
                <label>Password:</label>
                <input type="password" name="" id="" />
                <button>Login</button>
            </form>
        </div>
    </section>
  )
}
