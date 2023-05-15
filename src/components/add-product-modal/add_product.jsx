import React, { useState , useEffect } from 'react'
import http from '../../lib/http'
import { useNavigate } from 'react-router-dom'

export default function add_product({visible, onClose, editables}) {

  const navigate = useNavigate()

  const [productName, setProductName] = useState("")
  const [productGroup, setProductGroup] = useState("")
  const [productCode, setProductCode] = useState("")
  const [price, setPrice] = useState(0)
  const [stock, setStock] = useState(0)
  const [manufacturer, setManufacturer] = useState("")
  const [editingProduct, setEditingProduct] = useState(false)
  const [image,setImage] = useState()
  const [uploadedImage, setUploadedImage] = useState("")

  const handleOnClose = (e) => {
    if (e.target.id === 'add-product') {
      setProductName("")
      setProductGroup("")
      setProductCode("")
      setPrice(0)
      setStock(0)
      setManufacturer("")
      setUploadedImage("")
      onClose()
    }
  }

  useEffect(() => {
    if (editables.length !== 0) {
      // for (let i = 0; i < editables.length; i++) {
      //   if (i == 0)
      // }
      setProductName(editables[0])
      setProductGroup(editables[1])
      setProductCode(editables[2])
      setPrice(editables[3])
      setStock(editables[4])
      setManufacturer(editables[5])
      setUploadedImage(editables[7])

      setEditingProduct(true)
      console.log("editing a product")
    }
    return
  }, [editables])

  async function saveImage(e) {

    console.log("Saving image")
    // console.log(e.target.files[0])
    try {
      const formData = new FormData()
      formData.append("product_image", e.target.files[0])

      const upRes = await http.post('/upload', formData, {
        headers: {
          "Content-Type": 'multipart/form-data',
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      })

      setUploadedImage(upRes.data.product_image)
    } catch (e) {
      console.log(e)
    }
  }

  async function submitProduct(e) {
    console.log('submitted')
    e.preventDefault()
    if (productName !== ""  | productGroup !== "" | productCode !== "" | price !== 0 | stock !== 0 | manufacturer !== "" | uploadedImage !== "") {
      const body = {
        'product_name': productName,
        'product_group': productGroup,
        'product_code': productCode,
        'price': price,
        'stock': stock,
        'manufacturer': manufacturer,
        'product_image': uploadedImage
      }

      console.log(body)

      if (!editingProduct) {
        const res = await http.post("/products", body, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })

        const getProducts = await http.get(`/products/${JSON.parse(localStorage.getItem('user')).id}`)
        localStorage.setItem('products', JSON.stringify(getProducts.data))

        console.log("Product has been added successfully")
      } else {
        const res = await http.put(`/products/${editables[6]}`, body, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })

        const getProducts = await http.get(`/products/${JSON.parse(localStorage.getItem('user')).id}`)
        localStorage.setItem('products', JSON.stringify(getProducts.data))

        console.log("Product has been updated successfully")
      }

      onClose()
      navigate(0)
    }
  }

  if (!visible) return null

  return (
    <div id='add-product' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10'>
      {/* <form className='add-product-container bg-gray-300 rounded py-10 w-1/3' onSubmit={submitProduct}>
        <div className='bg-gray-50'>
          <label className='block text-gray-700 text-sm font-bold py-2'>Product Name:</label>
          <input value={productName} onChange={(e) => {setProductName(e.target.value)}} type="text" id='productName' placeholder="Product Name" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
        </div>

        <div className='bg-gray-50 mt-5'>
          <label className='block text-gray-700 text-sm font-bold py-2'>Product Group:</label>
          <select id="product-group-list" onChange={(e) => {setProductGroup(e.target.value)}}>
            <option value="">--Select product group--</option>
            {JSON.parse(localStorage.getItem('product_group')).map((value) => (
                <option key={value.id} value={value.product_group}>{value.product_group}</option>
            ))}
          </select>
        </div>

        <div className='bg-gray-50 mt-5'>
          <label className='block text-gray-700 text-sm font-bold py-2'>Product Code:</label>
          <input value={productCode} onChange={(e) => {setProductCode(e.target.value)}} type="text" id='productCode' placeholder="Product Code" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
        </div>

        <div className='bg-gray-50 mt-5'>
          <label className='block text-gray-700 text-sm font-bold py-2'>Manufacturer:</label>
          <input value={manufacturer} onChange={(e) => {setManufacturer(e.target.value)}} type="text" id='manufacturer' placeholder="Manufacturer" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
        </div>

        <div className='bg-gray-50 mt-5'>
          <label className='block text-gray-700 text-sm font-bold py-2'>Price:</label>
          <input value={price} onChange={(e) => {setPrice(e.target.value)}} type="text" id='price' placeholder="Price" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
        </div>

        <div className='bg-gray-50 mt-5'>
          <label className='block text-gray-700 text-sm font-bold py-2'>Stock:</label>
          <input value={stock} onChange={(e) => {setStock(e.target.value)}} type="text" id='stock' placeholder="Stock" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
        </div>

        <button type='submit'>Add Product</button>
      </form> */}



      <form class="flex justify-center items-center h-screen" onSubmit={submitProduct}>
          <div class="w-96 py-6 p-10 shadow-lg bg-white rounded-md">
              <h1 class="text-3xl block text-center font-semibold">Add a Product</h1>
              <div class="mt-4">
                  <span class="mb-2 text-md">Product name</span>
                  <input value={productName} onChange={(e) => {setProductName(e.target.value)}} type="text" class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" name="text" id="text"/>
              </div>
              <div class="mt-4">
                  <span class="mb-2 text-md">Product group</span>
                  <select onChange={(e) => {setProductGroup(e.target.value)}} class="w-full p-3 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500">
                      <option value="0">Select product group</option>
                      {JSON.parse(localStorage.getItem('product_group')).map((value) => (
                        <option key={value.id} value={value.product_group}>{value.product_group}</option>
                      ))}
                  </select>
              </div>
              <div class="mt-4">
                  <span class="mb-2 text-md">Product code</span>
                  <input value={productCode} onChange={(e) => {setProductCode(e.target.value)}} type="text" class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" name="text" id="text"/>
              </div>
              <div class="mt-4">
                  <span class="mb-2 text-md">Manufacturer</span>
                  <input value={manufacturer} onChange={(e) => {setManufacturer(e.target.value)}} type="text" class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" name="text" id="text"/>
              </div>
              <div class="mt-4">
                  <span class="mb-2 text-md">Price</span>
                  <input value={price} onChange={(e) => {setPrice(e.target.value)}} type="number" class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" name="number" id="number"/>
              </div>
              <div class="mt-4">
                  <span class="mb-2 text-md">Stock</span>
                  <input value={stock} onChange={(e) => {setStock(e.target.value)}} type="number" class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" name="number" id="number"/>
              </div>
              <div class="mt-4">
                  <span class="mb-2 text-md">Image</span>
                  <input onChange={(e) => {
                    // setImage(e.target.files[0])
                    saveImage(e)
                    }} type="file" class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" name="file" id="file"/>
              </div>
              <div class="mt-5">
                  <button type="submit" class="w-full bg-[#01366C] text-white text-lg p-2 rounded-lg mb-6 hover:bg-[#f3ad11] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">ADD</button>
              </div>
          </div>
      </form>    
















    </div>
  )
}
