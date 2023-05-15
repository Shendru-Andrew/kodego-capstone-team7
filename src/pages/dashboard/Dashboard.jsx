import React, {useState, useEffect} from 'react'
import http from '../../lib/http'
import {FaCashRegister, FaRegObjectGroup} from 'react-icons/Fa'
import {BsCashCoin, BsFillBasket2Fill} from 'react-icons/Bs'
import {FiShoppingBag} from 'react-icons/Fi'
import {BiPurchaseTagAlt} from 'react-icons/Bi'
import './style.css'

export default function Dashboard() {

  const [totaltransac, setTotalTransac] = useState(0)
  const [totalSales, setTotalSales] = useState(0)
  const [totalPurchases, setTotalPurchases] = useState(0)
  const [totalPurchasedProducts, setTotalPurchasedProducts] = useState(0)

  async function getTransactions(){
    const res = await http.get(`/transactions/${JSON.parse(localStorage.getItem('user')).id}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    
    console.log(res.data.length)
    setTotalTransac(res.data.length)
}

async function getPurchases() {
  const res = await http.get(`/purchases/all/${JSON.parse(localStorage.getItem('user')).id}`, {
      headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
  })

  console.log(res.data)

  let totalS = 0

  res.data.forEach((e) =>{
    totalS = totalS + e.total
  })
  setTotalSales(totalS)
  setTotalPurchases(res.data.length)
}

async function getPurchasedItems() {
  const res = await http.get(`/purchases/products/all/${JSON.parse(localStorage.getItem('user')).id}`, {
      headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
  })

  setTotalPurchasedProducts(res.data.length)
}

  useEffect(() => {
    getTransactions()
    getPurchases()
    getPurchasedItems()
  },[])

  return (
    <section className='Products py-10 pe-20'>
        <div className='light-background h-full products-container pb-10 px-5 shadow-xl'>
            <h1 className='text-6xl py-7 font-["League_Spartan"] font-bold'>Dashboard</h1>
            <div className='flex justify-center gap-20 mt-7'>
              <div className='rounded-xl dashy flex justify-center items-center border-2 border-[#28965A]'>
                <div>
                  <FaCashRegister className='text-4xl mb-4 text-[#33B86F]'/>
                  <h1 className='text-xl font-bold text-[#28965A]'>{totaltransac}</h1>
                  <p className='text-xl font-bold text-[#28965A]'>Total POS Opened</p>
                </div>
              </div>

              <div className='rounded-xl dashy flex justify-center items-center border-2 border-[#FA4C40]'>
                <div>
                  <BsCashCoin className='text-4xl mb-4 text-[#FA4C40]'/>
                  <h1 className='text-xl font-bold text-[#FA4C40]'>PHP {totalSales.toFixed(2)}</h1>
                  <p className='text-xl font-bold text-[#FA4C40]'>Total Sales</p>
                </div>
              </div>

              <div className='rounded-xl dashy flex justify-center items-center border-2 border-[#29C0E6]'>
                <div>
                  <BsFillBasket2Fill className='text-4xl mb-4 text-[#29C0E6]'/>
                  <h1 className='text-xl font-bold text-[#29C0E6]'>{JSON.parse(localStorage.getItem('products')).length}</h1>
                  <p className='text-xl font-bold text-[#29C0E6]'>Total Products</p>
                </div>
              </div>

              <div className='rounded-xl dashy flex justify-center items-center border-2 border-[#9256DC]'>
                <div>
                  <FaRegObjectGroup className='text-4xl mb-4 text-[#9256DC]'/>
                  <h1 className='text-xl font-bold text-[#9256DC]'>{JSON.parse(localStorage.getItem('product_group')).length}</h1>
                  <p className='text-xl font-bold text-[#9256DC]'>Total Product Group</p>
                </div>
              </div>
            </div>

            <div className='flex justify-center gap-20 mt-10'>
              <div className='rounded-xl dashy flex justify-center items-center border-2 border-[#765A37]'>
                <div>
                  <FiShoppingBag className='text-4xl mb-4 text-[#765A37]'/>
                  <h1 className='text-xl font-bold text-[#765A37]'>{totalPurchases}</h1>
                  <p className='text-xl font-bold text-[#765A37]'>Total Purchases</p>
                </div>
              </div>

              <div className='rounded-xl dashy flex justify-center items-center border-2 border-[#251605]'>
                <div>
                  <BiPurchaseTagAlt className='text-4xl mb-4 text-[#251605]'/>
                  <h1 className='text-xl font-bold text-[#251605]'>{totalPurchasedProducts}</h1>
                  <p className='text-xl font-bold text-[#251605]'>Total Purchased<br/>Products</p>
                </div>
              </div>
            </div>

        </div>
    </section>
  )
}
