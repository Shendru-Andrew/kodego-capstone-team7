import React, {useState} from 'react'

export default function cashreceived({visible, onClose, totalAmount, Pay}) {
    
    const [amountReceived, setAmountReceived] = useState(0)
    const [change, setChange] = useState(0)

    const [paying, setPaying] = useState(false)

    // const handleOnClose = (e) => {
    //     if (e.target.id === 'receivedCash') {
    //     onClose()
    //     }
    // }

    function calculate() {
        const total = amountReceived - totalAmount
        setPaying(true)
        setChange(total)
    }

    if (!visible) return null

    return (


        <div id='receivedCash' className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10'>
            {!paying ? 
            <div id='add-product-group' className="flex justify-center items-center h-screen">
                <div className="w-96 py-6 p-10 shadow-lg bg-white rounded-md">
                    {/* <h1 className="text-3xl block text-center font-semibold">Add a Product Group</h1> */}
                    <div className="mt-4">
                        <span className="mb-2 text-md">Cash Received</span>
                        <input value={amountReceived} onChange={(e) => {setAmountReceived(e.target.value)}} type="text" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" name="text" id="text"/>
                    </div>
                    <div className="mt-5">
                        <button onClick={calculate} className="w-full bg-[#01366C] text-white text-lg p-2 rounded-lg mb-6 hover:bg-[#f3ad11] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">ADD</button>
                    </div>
                </div>
            </div>
            :
            <div id='add-product-group' className="flex justify-center items-center h-screen">
                <div className="w-96 py-6 p-10 shadow-lg bg-white rounded-md">
                    {/* <h1 className="text-3xl block text-center font-semibold">Add a Product Group</h1> */}
                    <div className="mt-4">
                        <span className="mb-2 text-md">{`Change: ${change.toFixed(2)}`}</span>
                    </div>
                    <div className="mt-5">
                        <button onClick={() => {
                    setPaying(false)
                    Pay()
                    onClose()
                    }} className="w-full bg-[#01366C] text-white text-lg p-2 rounded-lg mb-6 hover:bg-[#f3ad11] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Okay</button>
                    </div>
                </div>
            </div>
            }
        </div>

        // <div id='receivedCash' className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10'>
        //     <div className='add-product-container bg-gray-300 rounded py-10 w-1/3'>
        //         <div className='bg-gray-50 my-5'>
        //             <label className='block text-gray-700 text-sm font-bold py-2'>Cash received</label>
        //             <input value={amountReceived} onChange={(e) => {setAmountReceived(e.target.value)}} type="text" id='productGroup' placeholder="Amount" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
        //         </div>
        //         <button onClick={calculate}>Submit</button>
        //     </div>
        //     <div className='bg-gray-300 rounded py-10 w-1/3'>
        //         <h1>{`CHANGE: ${change}`}</h1>
        //         <button onClick={() => {
        //             onClose()
        //             Pay()
        //             }}>Okay</button>
        //     </div>
        // </div>
    )
}
