import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import http from '../../lib/http'

export default function landing_register() {

    const navigate = useNavigate()

    // const [storename, setStoreName] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmer, setPasswordConfirm] = useState("")

    async function register(e) {
        e.preventDefault()

        if (!name || !email || !passwordConfirmer || password !== passwordConfirmer) {
            alert("Invalid Form")
            return
        } else {
            const body = {
                name,
                email,
                // storename,
                password,
                password_confirmation: passwordConfirmer 
            }

            const res = await http.post("/register", body)

            // localStorage.setItem('user', JSON.stringify(res.data.user))
            // localStorage.setItem('token', res.data.token)

            navigate("/login")
        }
    }

  return (
    <div className="font-['League_Spartan'] scroll-smooth bg-gradient-to-t from-[#f3ad11] to-[#01366C] h-screen">
        <div className="flex items-center justify-center min-h-screen">
            <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                <div className="relative">
                    <img src="images/undraw_Profile_data.png" alt="img" className="w-[600px] h-full hidden rounded-l-2xl md:block object-contain"/>
                </div>
                <div className="absolute hidden top-11 left-20 p-6 drop-shadow-lg md:block">
                    <span className="text-[#01366C] text-3xl">Let's bring your inventory online. <br/> Register your business now!</span>
                </div>
                <form onSubmit={register} className="flex flex-col justify-center p-8 md:p-14">
                    <span className="mb-3 text-4xl font-bold">Sign up to Sales Tag.</span>
                    <span className="font-light text-gray-500 mb-5">Let's create your account.</span>
                    <div className="py-3">
                        <span className="mb-2 text-md">Store name</span>
                        <input value={name} onChange={(e) => {setName(e.target.value)}} type="text" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" name="name" id="name"/>
                    </div>
                    <div className="py-3">
                        <span className="mb-2 text-md">Email</span>
                        <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" name="email" id="email"/>
                    </div>
                    <div className="py-3">
                        <span className="mb-2 text-md">Password</span>
                        <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" name="pass" id="pass"/>
                    </div>
                    <div className="pt-3 pb-4">
                        <span className="mb-2 text-md">Confirm password</span>
                        <input value={passwordConfirmer} onChange={(e) => {setPasswordConfirm(e.target.value)}} type="password" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" name="pass" id="pass"/>
                    </div>
                    <button type="submit" className="w-full bg-[#01366C] text-white text-lg p-3 rounded-lg mt-2 mb-6 hover:bg-[#f3ad11] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Register</button>
                    <p className="text-center text-gray-400">Already have an account?
                        <span className="font-light text-black"><Link to={"/login"} className="text-md hover:underline">Sign in here!</Link></span>
                    </p>
                </form>
            </div>
        </div>
    </div>
  )
}
