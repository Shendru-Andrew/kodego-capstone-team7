import React from 'react'
import './navbar.css'
import { AiOutlineCalendar } from 'react-icons/Ai'
import { MdLogout } from 'react-icons/Md'
import { useNavigate } from 'react-router-dom'
import http from '../../lib/http'

export default function navbar() {

  const navigate = useNavigate()

  const date = new Date()
  var day = date.getDate()
  var month = date.getMonth()

  const calendar = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
  ]

  async function logout() {
    const res = await http.post('/logout', {},{
      headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    localStorage.clear()
    navigate('/')
    navigate(0)
  }

  return (
    <header className='Navbar pt-10 pe-20'>

      <div className='navbar-container h-full rounded-3xl shadow-xl flex justify-between'>
        <h1 className='flex items-center text-3xl font-["League_Spartan"] p-5 font-extrabold text-[#01366C]'>{JSON.parse(localStorage.getItem('user')).name}</h1>
        <div className='flex items-center'>
          <h4 className='font-bold py-1 px-3 rounded-xl bg-gray-200 flex items-center gap-1'><AiOutlineCalendar className='text-xl font-bold' />{`${day} ${calendar[month]}`}</h4>
        </div>
        <div class="p-5 md:flex">
          <button onClick={() => {logout()}} className="text-lg font-semibold leading-8 bg-[#01366C] text-white px-5 py-4 rounded-full hover:bg-[#040404] flex items-center gap-2 text-center">
            Log Out 
            <MdLogout className='text-2xl' />
          </button>
          {/* <button>
            Logout
          </button> */}
        </div>
      </div>

    </header>
  )
}
