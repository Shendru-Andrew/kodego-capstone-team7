import React, { useState , useEffect } from 'react'
import http from '../../lib/http'
import { useNavigate } from 'react-router-dom'

export default function add_product_group({visible, onClose, editables}) {

    const navigate = useNavigate()

    const [productGroup, setProductGroup] = useState("")

    const [editingProduct, setEditingProduct] = useState(false)
    const [uploadedImage,setUploadedImage] = useState()

    const handleOnClose = (e) => {
        if (e.target.id === 'add-product-group') {
        setProductGroup("")
        onClose()
        }
    }

    useEffect(() => {
      if (editables.length !== 0) {
        // for (let i = 0; i < editables.length; i++) {
        //   if (i == 0)
        // }
        setProductGroup(editables[0])
        setEditingProduct(true)
        console.log("editing a product")
      }
      return
    }, [editables])

  async function submitProduct(e) {
    e.preventDefault()
    if (productGroup !== "" | uploadedImage !== "") {
      const body = {
        'product_group': productGroup,
        'product_image': uploadedImage
      }

      if (!editingProduct) {
        const res = await http.post("/products/group", body, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })

        const getProducts = await http.get(`/products/group/${JSON.parse(localStorage.getItem('user')).id}`)
        localStorage.setItem('product_group', JSON.stringify(getProducts.data))

        console.log("Product has been added successfully")
      } else {
        const res = await http.put(`/products/group/${editables[1]}`, body, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })

        const getProducts = await http.get(`/products/group/${JSON.parse(localStorage.getItem('user')).id}`)
        localStorage.setItem('product_group', JSON.stringify(getProducts.data))
        console.log("Product has been updated successfully")
      }
    
    } 

      onClose()
      navigate(0)
    }

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

  if (!visible) return null

  return (
    <div id='add-product-group' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10'>
      <form id='add-product-group' class="flex justify-center items-center h-screen" onSubmit={submitProduct}>
            <div class="w-96 py-6 p-10 shadow-lg bg-white rounded-md">
                <h1 class="text-3xl block text-center font-semibold">Add a Product Group</h1>
                <div class="mt-4">
                    <span class="mb-2 text-md">Product Group</span>
                    <input value={productGroup} onChange={(e) => {setProductGroup(e.target.value)}} type="text" class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" name="text" id="text"/>
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



    // <div id='add-product-group' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10'>
    //   <form className='add-product-container bg-gray-300 rounded py-10 w-1/3' onSubmit={submitProduct}>
    //     <div className='bg-gray-50 my-5'>
    //       <label className='block text-gray-700 text-sm font-bold py-2'>Product Group:</label>
    //       <input value={productGroup} onChange={(e) => {setProductGroup(e.target.value)}} type="text" id='productGroup' placeholder="Product Group" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
    //     </div>

    //     <button type='submit'>Add Product Group</button>

    //   </form>
    // </div>
  )
}
