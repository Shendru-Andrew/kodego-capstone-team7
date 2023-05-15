import React, { useRef, useEffect } from 'react'
import './sidebar.css'
import { AiFillCaretDown } from 'react-icons/Ai'
import { TiDocumentText } from 'react-icons/Ti'
import { FiShoppingCart } from 'react-icons/Fi'
import { MdOutlineInventory } from 'react-icons/Md'
import { BiPurchaseTag } from 'react-icons/Bi'
import { Link } from 'react-router-dom'

// import './accordion.js'

export default function sidebar() {

    const acc1 = useRef(null)

    // useEffect(() => {
    //     const accordionHeader = acc1.current 
    //     const accordionBody = accordionHeader.nextElementSibling
    //     accordionBody.style.maxHeight = accordionBody.scrollHeight + "px"
    //     return
    // }, [])

    function accordionClick(reference) {
        const accordionHeader = reference.current

        accordionHeader.classList.toggle("active")
        accordionHeader.lastChild.classList.toggle("active")
        
        const accordionBody = accordionHeader.nextElementSibling
        if (accordionHeader.classList.contains("active")) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px"
        } else {
            accordionBody.style.maxHeight = 0
        }
    }

  return (
    <section className='Main-Sidebar py-10 ps-10 pe-10'>
        <div className='main-sidebar-container rounded-3xl shadow-xl bg-white relative'>

            {/* <h1 className='ps-2 py-6 ms-8 text-5xl'>Prays Tag</h1> */}
            <div className='h-30 mb-10 pt-5 Logo text-center flex justify-center items-align'>
                <img src="images/salestag_logo2.png" alt="" className='h-full' />
            </div>


            <div className='Sidebar-Links'>

                <div className='px-7'>
                    <div className='p-2 relative flex items-center'>
                        <TiDocumentText className='h-7 w-7 absolute flex items-center' />
                        <Link to={'/'} className='ms-8 flex items-center text-lg font-bold'>Dashboard</Link>
                    </div>
                </div>

                <div className="Accordion px-7">
                    <div ref={acc1} onClick={() => {accordionClick(acc1)}} className='relative accordion-header rounded-md p-2 flex items-center justify-between cursor-pointer'>
                        <MdOutlineInventory className='h-5 w-5 absolute flex items-center' />
                        <span className='ms-8 flex items-center text-lg font-bold'>Inventory</span>
                        <AiFillCaretDown className='h-5 w-5 flex items-center tab-icon transition ease-in-out duration-300' />
                    </div>
                    <div className="accordion-body overflow-hidden max-h-0 overflow-hidden transition-all duration-200 ease-out">
                        <Link to={'/products'} className='ms-8 px-2 py-2 block text-lg'>Products</Link>
                        <Link to={'/productgroup'} className='ms-8 px-2 py-2 block text-lg'>Product Group</Link>
                    </div>
                </div>

                <div className='px-7'>
                    <div className='p-2 relative flex items-center'>
                        <BiPurchaseTag className='h-5 w-5 absolute flex items-center' />
                        <Link to={'/transactions'} className='ms-8 flex items-center text-lg font-bold'>Transaction</Link>
                    </div>
                </div>

                <div className='px-7'>
                    <div className='p-2 relative flex items-center'>
                        <FiShoppingCart className='h-5 w-5 absolute flex items-center' />
                        <Link to={'/webregister'} className='ms-8 flex items-center text-lg font-bold'>Virtual Register</Link>
                    </div>
                </div>

                <hr className='mx-3' />
            </div>

            <figure className='absolute'>
                <img src="/images/dashboard.png" alt="" className='py-16'/>
            </figure>

        </div>
    </section>
  )
}
