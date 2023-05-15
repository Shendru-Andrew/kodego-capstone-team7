import React, { useState } from 'react'
import './mainlogin.css'
import { useNavigate } from 'react-router-dom'
import http from '../../lib/http'

export default function mainlogin() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPasssword] = useState("")

  async function login(e) {
    e.preventDefault()

    if (!email || !password) {
      alert('invalid form')
      return
    } else {
      const body = {
        email,
        password
      }

      try {
        const res = await http.post("/login", body)
        localStorage.setItem('user', JSON.stringify(res.data.user))
        localStorage.setItem('token', res.data.token)
        const getProductGroup = await http.get(`/products/group/${res.data.user.id}`, body)
        localStorage.setItem('product_group', JSON.stringify(getProductGroup.data))
        const getProducts = await http.get(`/products/${res.data.user.id}`, body)
        localStorage.setItem('products', JSON.stringify(getProducts.data))
        navigate("/")
        navigate(0)
      } catch(error) {
        alert(error.response.data.message)
      }


    }
  }


  return (
    <section className='bg-gray-200 mainlogin flex items-center justify-center'>
        <form className='loginform' onSubmit={login}>
            <h1 className='text-center text-4xl mb-1'>Sign in to account</h1>
            <p className='text-center mb-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, enim.</p>
            <label className='block'>Email:</label>
            <input className='w-full py-1 rounded-md mb-4' type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} />
            <label className='block'>Password:</label>
            <input className='w-full py-1 rounded-md' type="password" value={password} onChange={(e) => {setPasssword(e.target.value)}} />
            <button type='submit' className='w-full rounded-md bg-gray-800 py-2 mt-4 text-white'>Login</button>
        </form>
    </section>
  )
}
