import React, {useState,useEffect} from 'react'
import DataTable from 'react-data-table-component'
import http from '../../lib/http'

import { AiOutlineHome } from 'react-icons/Ai'

import { CgArrowRightO, CgArrowLeftO } from 'react-icons/Cg'
import { GrView } from 'react-icons/Gr'

export default function Transaction() {

    const [viewTrans, setViewTrans] = useState(false)
    const [transactions,setTransactions] = useState([])
    const [purchases,setPurchases] = useState([])
    const [purchProduct,setPurchProduct] = useState([])
    const [viewPurchProduct,setViewPurchProduct] = useState(false)

    const column = [
        {
            name: "Transaction",
            selector: row => row.transaction,
            sortable: true
        },
        {
            name: "Actions",
            selector: 
            row => <div className='flex w-full text-2xl'>
                <button onClick={() => {setViewTrans(true)
                getPurchases(row.transaction)
                }}><GrView/></button>
            </div>
        },
    ]

    const columnPurchase = [
        {
            name: "Purchase",
            selector: row => `Purchase #${row.id}`,
            sortable: true
        },
        {
            name: "Total",
            selector: row => `PHP ${row.total.toFixed(2)}`,
            sortable: true
        },
        {
            name: "Action",
            selector: 
            row => <div className='flex w-full'>
                <button onClick={() => {setViewPurchProduct(true)
                getPurchasedItems(row.purchase_name)
                }}>VIEW</button>
            </div>
        },
    ]

    const columnPurchaseProducts = [
        {
            name: "Product Name",
            selector: row => row.product_name,
            sortable: true
        },
        {
            name: "Price",
            selector: row => row.price,
            sortable: true
        },
    ]

    useEffect(() => {
        getData()
        return
    },[])

    async function getData(){
        const res = await http.get(`/transactions/${JSON.parse(localStorage.getItem('user')).id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        setTransactions(res.data)
        console.log(transactions)
    }

    async function getPurchases(transac) {
        const res = await http.get(`/purchases/${transac}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        setPurchases(res.data)
        console.log(res.data)
    }

    async function getPurchasedItems(purch) {
        const res = await http.get(`/purchases/products/${purch}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })

        setPurchProduct(res.data)
    }

  return (
    <section className='Products py-10 pe-20'>
        <div className='light-background h-full products-container pb-10 px-5 shadow-xl'>
            <h1 className='text-4xl pt-10 pb-5 flex justify-between items-center'>{!viewTrans && !viewPurchProduct && "List of Transaction"}{viewTrans && !viewPurchProduct && "List of Purchases"}{viewTrans && viewPurchProduct && "List of Products Purchased"}
            <div>
            <button onClick={() => {
                setViewTrans(false)
                setViewPurchProduct(false)
            }}>
                <AiOutlineHome />
                </button>
            {viewTrans &&
            <button onClick={() => {
                if (viewTrans && !viewPurchProduct) {
                    setViewTrans(false)
                } else if (viewTrans && viewPurchProduct) {
                    setViewPurchProduct(false)
                }
            }}><CgArrowLeftO /></button>
            }
            </div>
            </h1>
            {!viewTrans && !viewPurchProduct && <DataTable className='h-full' columns={column} data={transactions} fixedHeader fixedHeaderScrollHeight='500px' pagination />}
            {viewTrans && !viewPurchProduct && <DataTable className='h-full' columns={columnPurchase} data={purchases} fixedHeader fixedHeaderScrollHeight='500px' pagination />}
            {viewTrans && viewPurchProduct && <DataTable className='h-full' columns={columnPurchaseProducts} data={purchProduct} fixedHeader fixedHeaderScrollHeight='500px' pagination />}
        </div>
    </section>
  )
}
