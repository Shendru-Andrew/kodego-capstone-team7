import React, {useState} from 'react'
import './Style.css'

export default function product_list() {

  const [productGroup, setProductGroup] = useState(JSON.parse(localStorage.getItem('product_group')))
  const [selectedGroup, setSelectedGroup] = useState("")
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')))
  const [clickedProductGroup, setClickedProductGroup] = useState(false)

  console.log(productGroup)

  function openProductList(PGroup) {
    console.log('clicked')
    console.log(products)
    setSelectedGroup(PGroup)
    setClickedProductGroup(true)
  }

  return (
    <section className='ProductList light-background shadow-xl w-full'>
      <div className='h-full'>
        <div>
            Search Bar
        </div>
        <h1>Product Group</h1>
        {!clickedProductGroup ?
        <div className='border-2 mx-10 p-1 h-80'>
            <div className='grid grid-cols-5 gap-3'>
              {productGroup.map((pG) => (
                <button key={pG.id} className='border pt-1' onClick={() => {openProductList(pG.product_group)}}>
                  <figure className='flex justify-center'>
                    <img src="images/sample.jpg" alt="" className='h-20 w-20' />
                  </figure>
                  <p>{pG.product_group}</p>
                </button>
              ))}
            </div>
        </div> 
        :
        <div className='border-2 mx-10 p-1 h-80'>
            <div className='grid grid-cols-5 gap-3'>
                {products.map((pG2) => (
                  pG2.product_group === selectedGroup ? 
                    <button key={pG2.id} className='border pt-1'>
                      <figure className='flex justify-center'>
                        <img src="images/sample.jpg" alt="" className='h-20 w-20' />
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
  )
}
