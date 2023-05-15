import React, {useState} from 'react'
import './ProductGroup.css'
import AddProductGroup from '../../components/add-product-group-modal/add_product_group'
import http from '../../lib/http'
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom'
import { BsTrash } from 'react-icons/Bs'

export default function ProductGroup() {

    const navigate = useNavigate()

    const [showAddProducts, setShowAddProducts] = useState(false)
    const handleOnClose = () => {setShowAddProducts(!showAddProducts)}
    const [editables, setEditables] = useState([])

    const [productGroup,setProductGoup] = useState(JSON.parse(localStorage.getItem("product_group")))

    const column = [
        {
            name: "Image",
            selector: row => <img src={`${import.meta.env.VITE_API}/image/${row.product_image}`} alt="" className='h-20 w-20' />
        },
        {
            name: "Product Group",
            selector: row => row.product_group,
            sortable: true
        },
        {
            name: "Actions",
            selector: 
            row => <div className='flex w-full text-2xl'>
                {/* <button onClick={() => {setEditables([row.product_group,row.id])
                    setShowAddProducts(!showAddProducts)
                    console.log('clicked' + editables)}}>EDIT</button> */}
                <button onClick={() => {
                    deleteProduct(row.id)
                }}><BsTrash/></button>
            </div>
        }
    ]

    async function deleteProduct(pID) {
        const res = await http.delete(`/products/group/${pID}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })

        const getAllProducts = await http.get(`/products/group/${JSON.parse(localStorage.getItem('user')).id}`)
        localStorage.setItem('product_group', JSON.stringify(getAllProducts.data))

        const getProducts = await http.get(`/products/${JSON.parse(localStorage.getItem('user')).id}`)
        localStorage.setItem('products', JSON.stringify(getProducts.data))

        console.log("Product has been successfully deleted")
        navigate(0)
    }

    return (
        // <section className='ProductGroup py-10 pe-20 h-5/6'>
        //     <div className='product-group-container bg-red-100 h-full pb-10 px-5 shadow-xl'>
        //         <div className='flex justify-end'>
        //                     <button onClick={() => {
        //                 setShowAddProducts(!showAddProducts)}
        //                 }  className='py-2 rounded-lg bg-black text-white'>Add Product Group</button>
        //                 </div>
        //             <div className='bg-white h-full'>
        //                 <div>

        //                     <div className='flex h-16 text-center'>
        //                         <div className='bg-gray-500 w-3/5 flex items-center justify-center'>Description</div>
        //                         <div className='bg-gray-500 w-2/5 flex items-center justify-center'>Actions</div>
        //                     </div>

        //                     {JSON.parse(productGroup).map((pGroup) => (
        //                         <div key={pGroup.id} className='product-item h-16 flex'>
        //                             <div className='flex w-3/5'>
        //                                 <figure>
        //                                     <img src="images/sample.jpg" alt="" className='h-full w-full' />
        //                                 </figure>
        //                                 <h1 className='flex items-center'>{pGroup.product_group}</h1>
        //                             </div>
        //                             <div className='flex w-2/5'>
        //                                 <button>EDIT</button>
        //                                 <button>DELETE</button>
        //                             </div>
        //                         </div>
        //                     ))}

        //                     {/* {productGroup.map((pGroup) => {
        //                         console.log(pGroup)
        //                     })}
        //                      */}

        //                 </div>
        //             </div>
        //     </div>
        <section className='Products py-10 pe-20'>
            <div className='light-background h-full products-container pb-10 px-5 shadow-xl'>
                    <div className='flex justify-between py-7 product-btn-place'>
                        <h1 className='text-5xl font-bold'>Product Group</h1>
                        <button onClick={() => {
                            setEditables([])
                            setShowAddProducts(!showAddProducts)}
                            } 
                            className='py-2 rounded-full bg-[#F3AD11] text-black hover:bg-[#01366C] hover:text-[#FFFFFF] px-8 shadow-xl font-semibold'>Add Product Group</button>
                    </div>
                <div className='dark-background rounded-2xl product-place shadow-outline border border-gray-700 overflow-hidden max-h-full'>
                    <DataTable className='TableSize' columns={column} data={productGroup} fixedHeader fixedHeaderScrollHeight='500px' pagination />
                </div>
            </div>

            <AddProductGroup onClose={handleOnClose} visible={showAddProducts} editables={editables} />                

        </section>
    )
}
