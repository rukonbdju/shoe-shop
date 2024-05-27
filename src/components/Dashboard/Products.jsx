import { useEffect, useState } from "react"
import useProducts from "../../hooks/useProducts"
import Product from "./Product"

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
                    <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Add new Product</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <div>
                                <div>
                                    <input className="border border-slate-700 rounded w-full p-2 my-2" type="text" name="title" placeholder="Enter title"  required/>
                                </div>
                                <div>
                                    <textarea className="border border-slate-700 rounded w-full p-2 my-2" name="summary" placeholder="Enter summary" required></textarea>
                                </div>
                                <div>
                                    <input className="border border-slate-700 rounded w-full p-2 my-2" type="number" name="productPrice" placeholder="Enter price" required/>
                                </div>
                                <div>
                                    
                                    <input className="border border-slate-700 rounded w-full p-2 my-2" type="text" name="imageUrl" placeholder="Enter image url" required/>
                                </div>
                                <div>
                                    <input className="border border-slate-700 rounded w-full p-2 my-2" type="number" name="stock" placeholder="Enter quantity" required/>
                                </div>
                            </div>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
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