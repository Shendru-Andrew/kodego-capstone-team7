import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import http from '../../lib/http'

export default function () {

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
    <div className='font-["League_Spartan"] scroll-smooth bg-gradient-to-t from-[#f3ad11] to-[#01366C] h-screen'>
        <div className="flex items-center justify-center min-h-screen">
        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
            <form onSubmit={login} className="flex flex-col justify-center p-8 md:p-14">
                <span className="mb-3 text-4xl font-bold">Welcome back!</span>
                <span className="font-light text-gray-500 mb-8">Sign in to manage your business operations.</span>
                <div className="py-4">
                    <span className="mb-2 text-md">Email</span>
                    <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="text" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" name="email" id="email"/>
                </div>
                <div className="py-4">
                    <span className="mb-2 text-md">Password</span>
                    <input value={password} onChange={(e) => {setPasssword(e.target.value)}} type="password" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" name="pass" id="pass"/>
                </div>
                <button type="submit" className="w-full bg-[#01366C] text-white text-lg p-2 rounded-lg mb-6 hover:bg-[#f3ad11] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Sign in</button>
                <p className="text-center text-gray-400">Don't have an account?
                    <span className="font-light text-black"><Link to={"/register"} className="text-md hover:underline">Register here!</Link></span>
                </p>
            </form>
            <div className="relative">
                <img src="images/undraw_My_password.png" alt="img" className="w-[600px] h-full hidden rounded-r-2xl md:block object-cover"/>
            </div>
        </div>
        </div>
    </div>
  )
}
