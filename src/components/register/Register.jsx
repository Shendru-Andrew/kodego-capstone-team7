import React, {useState} from 'react'
import "./Register.css"
import http from '../../lib/http'
import { useNavigate } from 'react-router-dom'

export default function Register() {

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

        navigate("/")
    }
}
  return (
    <section className="registration bg-gray-200 flex items-center justify-center">
        <form className='registerForm' onSubmit={register}>
            <h1 className='text-center text-4xl mb-1'>Register your business now</h1>
            <p className='text-center mb-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, enim.</p>
            {/* <label className='block'>Store Name:</label>
            <input className='w-full py-1 rounded-md mb-4' value={storename} onChange={(e) => {setStoreName(e.target.value)}} type="text" /> */}
            <label className='block'>Your Name:</label>
            <input className='w-full py-1 rounded-md mb-4' value={name} onChange={(e) => {setName(e.target.value)}} type="text" />
            <label className='block'>Email:</label>
            <input className='w-full py-1 rounded-md mb-4' value={email} onChange={(e) => {setEmail(e.target.value)}} type="text" />
            <label className='block'>Password:</label>
            <input className='w-full py-1 rounded-md mb-4' value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" />
            <label className='block'>Confirm Password:</label>
            <input className='w-full py-1 rounded-md' value={passwordConfirmer} onChange={(e) => {setPasswordConfirm(e.target.value)}} type="password" />
            <button type="submit" className='w-full rounded-md bg-gray-800 py-2 mt-4 text-white'>Register</button>
        </form>
    </section>
  )
}
