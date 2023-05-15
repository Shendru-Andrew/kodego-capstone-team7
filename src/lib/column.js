const column = [
    {
        name: "Image"
        // selector: row => <img src="images/sample.jpg" alt="" className='h-20 w-20' />
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
    }
]

export default column