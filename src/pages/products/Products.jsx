import React, { useState , useEffect } from 'react'
import './Products.css'
import http from '../../lib/http'
import AddProduct from '../../components/add-product-modal/add_product'
import { useNavigate } from 'react-router-dom'
import DataTable from 'react-data-table-component'
import { FiEdit } from 'react-icons/Fi'
import { BsTrash } from 'react-icons/Bs'

export default function Products() {

    const navigate = useNavigate()

    const [lehProducts, setLehProducts] = useState([])
    const [showAddProducts, setShowAddProducts] = useState(false)
    const [editables, setEditables] = useState([])

    const handleOnClose = () => {setShowAddProducts(!showAddProducts)}

    const column = [
        {
            name: "Image",
            selector: row => <img src={`${import.meta.env.VITE_API}/image/${row.product_image}`} alt="" className='h-20 w-20' />
        },
        {
            name: "Name",
            selector: row => row.product_name,
            sortable: true
        },
        {
            name: "Product Code",
            selector: row => row.product_code,
            sortable: true
        },
        {
            name: "Product Group",
            selector: row => row.product_group,
            sortable: true
        },
        {
            name: "Price",
            selector: row => row.price,
            sortable: true
        },
        {
            name: "Stock",
            selector: row => row.stock,
            sortable: true
        },
        {
            name: "Actions",
            selector: 
            row => <div className='flex w-full gap-2 text-2xl'>
                <button onClick={() => {setEditables([row.product_name,row.product_group,row.product_code,row.price,row.stock,row.manufacturer,row.id,row.product_image])
                    setShowAddProducts(!showAddProducts)
                    console.log('clicked' + editables)}}><FiEdit/></button>
                <button onClick={() => {
                    deleteProduct(row.id)
                }}><BsTrash/></button>
            </div>
        }
    ]
    const [recordProducts, setRecordProducts] = useState(JSON.parse(localStorage.getItem('products')))

    async function getProducts() {
        const res = await http.get('/products', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        setLehProducts(res.data.data)
    }
    async function deleteProduct(pID) {
        const res = await http.delete(`/products/${pID}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })

        const getAllProducts = await http.get(`/products/${JSON.parse(localStorage.getItem('user')).id}`)
        localStorage.setItem('products', JSON.stringify(getAllProducts.data))

        console.log("Product has been successfully deleted")
        navigate(0)
    }

    useEffect(() => {
        getProducts()

        return
    }, [])

    // useEffect(() => {
    //     console.log(editables)
    //     return
    // }, [editables])

    // function edit(Pname, Pgroup, Pcode, Pprice, Pstock, Pmanu) {
    //     setEditables[]
    // }

    // function edit(Pedits) {
    //     // setEditables[Pname, Pgroup, Pcode, Pprice, Pstock, Pmanu]
    //     // console.log(editables)
    // }

  return (
    <section className='Products py-10 pe-20'>
        <div className='light-background h-full products-container pb-10 px-5 shadow-xl'>
                <div className='flex justify-between py-7 product-btn-place'>
                    <h1 className='text-5xl font-bold'>Product</h1>
                    <button onClick={() => {
                        setEditables([])
                        setShowAddProducts(!showAddProducts)}
                        } 
                        className='py-2 rounded-full bg-[#F3AD11] text-black hover:bg-[#01366C] hover:text-[#FFFFFF] px-8 shadow-xl font-semibold'>Add Product</button>
                </div>
            <div className='dark-background rounded-2xl product-place shadow-outline border border-gray-700 overflow-hidden max-h-full'>
                    <DataTable className='TableSize' columns={column} data={recordProducts} fixedHeader fixedHeaderScrollHeight='500px' pagination />
            </div>
        </div>

        <AddProduct onClose={handleOnClose} visible={showAddProducts} editables={editables} />

    </section>
  )
}
