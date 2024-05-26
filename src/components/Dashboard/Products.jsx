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
                            <form action="/submit-product" method="post">
                                <div>
                                    <label for="productName">Product Name:</label>
                                    <input type="text" id="productName" name="productName" required/>
                                </div>
                                <div>
                                    <label for="productDescription">Product Description:</label>
                                    <textarea id="productDescription" name="productDescription" required></textarea>
                                </div>
                                <div>
                                    <label for="productPrice">Price:</label>
                                    <input type="number" id="productPrice" name="productPrice" step="0.01" required/>
                                </div>
                                <div>
                                    <label for="productCategory">Category:</label>
                                    <select id="productCategory" name="productCategory" required>
                                        <option value="">Select a category</option>
                                        <option value="electronics">Electronics</option>
                                        <option value="fashion">Fashion</option>
                                        <option value="home">Home</option>
                                        <option value="books">Books</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="productImage">Product Image:</label>
                                    <input type="file" id="productImage" name="productImage" accept="image/*" required/>
                                </div>
                                <div>
                                    <label for="productStock">Stock Quantity:</label>
                                    <input type="number" id="productStock" name="productStock" required/>
                                </div>
                                <div>
                                    <label for="productSKU">SKU:</label>
                                    <input type="text" id="productSKU" name="productSKU" required/>
                                </div>
                                <div>
                                    <button type="submit">Add Product</button>
                                </div>
                            </form>
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
                        {products?.map(product => <Product key={product.id} product={product}></Product>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Products