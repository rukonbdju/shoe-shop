import { useEffect, useState } from "react"
import useProducts from "../../hooks/useProducts"
import Product from "./Product"
import DeleteProduct from "./DeleteProduct"
import AddProduct from "./AddProduct"

const Products = () => {
    const [products, setProducts] = useState([])
    console.log(products)
    useEffect(() => {
        fetch("../../../public/data.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products)
    
    return (
        <div>
            <div className="overflow-x-auto w-4/5 mx-auto mb-10">
                <div className="flex flex-row justify-between w-full items-center my-5">
                    <h1 className=" text-4xl">All Products</h1>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <AddProduct></AddProduct>
                </div>

                <table className="table">
                    <tbody className="flex flex-col gap-2">
                        {products?.map(product => <Product key={product.id} setProducts={setProducts} product={product}></Product>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Products