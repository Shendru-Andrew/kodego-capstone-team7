import React, {useState} from 'react'
import ProductList from '../../components/wr-product-list/product_list'
import CashOut from '../../components/product-cash-out/product_cash_out'
import WebButtons from '../../components/wr-buttons/WR_Buttons'
import './WebRegister.css'
import DataTable from 'react-data-table-component'
import http from '../../lib/http'
import CashReceived from '../../components/cashreceived/cashreceived'

import { AiOutlineHome } from 'react-icons/Ai'

import { CgArrowRightO, CgArrowLeftO } from 'react-icons/Cg'


export default function WebRegister() {

  const [productGroup, setProductGroup] = useState(JSON.parse(localStorage.getItem('product_group')))
  const [selectedGroup, setSelectedGroup] = useState("")
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')))
  const [clickedProductGroup, setClickedProductGroup] = useState(false)

  const [checkOut,setCheckOut] = useState([])
  const [stockManagement,setStockManagement] = useState([])
  const [totalCheckOut, setTotalCheckOut] = useState(0)

  const [showAddProducts, setShowAddProducts] = useState(false)
  const handleOnClose = () => {setShowAddProducts(!showAddProducts)}

  const [startRegistry, setStartRegistry] = useState(false)


  console.log(productGroup)

  function openProductList(PGroup) {
    console.log('clicked')
    console.log(products)
    setSelectedGroup(PGroup)
    setClickedProductGroup(true)
  }

  const column = [
    {
        name: "Image",
        selector: row => <img src={`${import.meta.env.VITE_API}/image/${row[2]}`} alt="" className='h-10 w-10' />
    },
    {
        name: "Product Name",
        selector: row => row[0]
    },
    {
        name: "Price",
        selector: row => row[1]
    },
    {
        name: "Actions"
    }
]


  function addCheckout(name, price, PImage) {
    let newArray = [name, price, PImage]
    setCheckOut([newArray, ...checkOut])
    console.log("This is the checkout")
    console.log(checkOut)
    setTotalCheckOut(totalCheckOut + price)

    // JSON.parse(localStorage.getItem('products')).forEach(element => {
    //   if (element.product_name === name && element.price === price) {
    //     element.stock = element.stock - 1
        
    //     fetchData(element)
    //   }
    // });
  }

  function toPay() {
    JSON.parse(localStorage.getItem('products')).forEach(element => {
          checkOut.forEach(el => {
            if (el[0] === element.product_name && el[1] === element.price) {
              if (element.stock === 0) {
                element.stock = -1
              } else {
                element.stock = element.stock - 1
              }

              const newObjectData = 
                {
                  'product_name': element.product_name,
                  'product_group': element.product_group,
                  'price': element.price,
                  'stock': element.stock,
                  'product_image': element.product_image,
                  'product_code': element.product_code,
                  'manufacturer': element.manufacturer
                }

              fetchData(newObjectData, element.id)
            }
          })
            
            // fetchData(element)
        }
    )

    updatePurchases()
    
  }

  async function updatePurchases() {

    const bodyy = {
      'transaction': `${localStorage.Transaction}`,
      'purchase_name': `Purchase${localStorage.PurchaseTimes + 1}`,
      'total': totalCheckOut
    }

    const res = await http.post(`/purchases`, bodyy, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })

    localStorage.setItem('PurchaseTimes', localStorage.PurchaseTimes + 1)

    const savedCheckOut = checkOut

    setTotalCheckOut(0)
    setCheckOut([])

    savedCheckOut.forEach((x) => {

      productPurchased(x[0], x[1], bodyy.purchase_name)
    })
  }

  async function productPurchased(x, y, purchase_name) {

    const table = {
      'product_name': x,
      'purchase_name': purchase_name,
      'price': y
    }

    console.log(table)
    const res = await http.post(`/purchases/products`, table, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
  }

  async function fetchData(bodyy, id) {
    console.log(bodyy)
    const res = await http.put(`/products/${id}`, bodyy, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })

    const getProducts = await http.get(`/products/${JSON.parse(localStorage.getItem('user')).id}`)
    localStorage.setItem('products', JSON.stringify(getProducts.data))



    console.log("Product has been successfully paid")
  }


  async function startPOS() {
    setStartRegistry(true)
    localStorage.setItem('POS', true)

    const date = new Date()
    var day = date.getDate()
    var month = date.getMonth() + 1

    const body = {
      'transaction': `${day}${month}`
    }

    try {
      
      const res = await http.post("/transactions", body, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })

      localStorage.setItem('Transaction', body.transaction)
      localStorage.setItem('PurchaseTimes', 0)


    } catch (e) {
      console.log(e)
    }
  }



  return (
    // <section className='WebRegister flex py-10 pe-20 h-full'>
    //   <section className='PList pe-10'>
    //       <ProductList />
    //   </section>
    //   <section className='CashOut'>
    //       <CashOut />
    //   </section>
    // </section>
    // <section className='WebReg py-10 pe-20 flex'>
    //   <section className='PList pe-10'>
    //       <ProductList />
    //       <WebButtons />
    //   </section>
    //   <section className='CashOut'>
    //      <CashOut />
    //   </section>
    // </section>
    // {!startRegistry ?
    // :}
    <>
    {!startRegistry ?
      <section className='Products py-10 pe-20'>
        <div className='light-background h-full products-container pb-10 px-5 shadow-xl flex justify-center items-center'>
          <button onClick={() => {startPOS()}} className='bg-[#01366C] text-white text-5xl rounded-full px-10 py-3'>Start POS</button>
        </div>
      </section>
    :
    <section className='WebReg py-10 pe-20 flex'>
      <section className='PList pe-10'>
        {/* PRODUCT LIST */}
        <section className='ProductList light-background shadow-xl w-full pt-10'>
          <div className='h-full'>
            <div className='flex justify-between mx-10'>
              <h1 className='text-4xl font-bold'>{clickedProductGroup ? selectedGroup : "Product Group"}</h1>
              <div className='flex items-center text-3xl gap-1'>
                <button>
                  <AiOutlineHome onClick={() => {
                    if (clickedProductGroup === true) {
                    setClickedProductGroup(!clickedProductGroup)
                    }
                    }} />
                </button>
              </div>
            </div>
            {!clickedProductGroup ?
            <div className='border-2 mx-10 p-1 produkto-list'>
                <div className='grid grid-cols-5 gap-3'>
                  {productGroup.map((pG) => (
                    <button key={pG.id} className='border pt-1' onClick={() => {openProductList(pG.product_group)}}>
                      <figure className='flex justify-center'>
                        <img src={`${import.meta.env.VITE_API}/image/${pG.product_image}`} alt="" className='h-20 w-20' />
                      </figure>
                      <p>{pG.product_group}</p>
                    </button>
                  ))}
                </div>
            </div> 
            :
            <div className='border-2 mx-10 p-1 produkto-list'>
                <div className='grid grid-cols-5 gap-3'>
                    {products.map((pG2) => (
                      pG2.product_group === selectedGroup ? 
                        <button key={pG2.id} className='border pt-1' onClick={() => {addCheckout(pG2.product_name, pG2.price, pG2.product_image)}}>
                          <figure className='flex justify-center'>
                            <img src={`${import.meta.env.VITE_API}/image/${pG2.product_image}`} alt="" className='h-20 w-20' />
                          </figure>
                          <p>{pG2.product_name}</p>
                        </button>
                      : 
                      console.log('nothing')
                  ))}
                    
                  
                </div>
            </div>
            }
          </div>
      </section>

      </section>
      <section className='CashOut'>
        <section className='CashOutContainer bg-white h-full rounded-3xl'>
          <div className='pt-5'>
            <DataTable className='lel' columns={column} data={checkOut} fixedHeader fixedHeaderScrollHeight='500px'/>
            <p className='text-4xl pb-7'>{`Total: PHP ${totalCheckOut.toFixed(2)}`}</p>
            <div className='h-24 px-2'>
              <button className='bg-[#28965A] h-full w-full rounded-3xl text-2xl font-bold' onClick={() => setShowAddProducts(!showAddProducts)}>{`Pay: ${checkOut.length} items`}</button>
            </div>
          </div>
        </section>
      </section>
      <CashReceived onClose={handleOnClose} visible={showAddProducts} totalAmount={totalCheckOut} Pay={toPay} />
    </section>
    }
    </>
  )
}
