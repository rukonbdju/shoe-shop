import { useState } from "react"

const Product = ({ product, setProducts }) => {
    //const [singleProduct,setSingleProduct]=useState(product)
    const [selectedProduct, setSelectedProduct] = useState({})
    const { id, Title, brand, price, photoUrl, summery } = product;
    console.log(id)
    const openModal = (modalId, product) => {
        console.log(product)
        setSelectedProduct(product)
        document.getElementById(modalId).showModal()
    }
    const handleDelete = () => {
        console.log(selectedProduct.id)
        setProducts((prevProducts) => prevProducts.filter(product => product.id !== selectedProduct.Id))
    }

    const handleEdit = () => {

    }
    return (
        <tr className="bg-white rounded">
            <td>
                <div className="flex items-center gap-2">
                    <div className="avatar">
                        <div className="mask mask-squircle w-24 h-24">
                            <img src={photoUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{Title}</div>
                        <div className="text-sm opacity-50">Brand: {brand}</div>
                    </div>
                </div>
            </td>
            <td>
                <p>{summery}</p>
            </td>
            <td className="font-bold">BDT {price}</td>
            <th>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn" onClick={() => openModal("delete",product)}>Delete</button>
                <dialog id="delete" className="modal">
                    <div className="modal-box">
                        <p className="py-4">Are you sure to delete this item?</p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Cancel</button>
                                <button onClick={()=>handleDelete()} className="btn">Confirm</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </th>
            <th>
                <button onClick={() => openModal("edit")} className="btn btn-xs border">Edit</button>
                <dialog id="edit" j >
                    <div className="modal-box">
                        <div>
                            <div>
                                <input className="border border-slate-700 rounded w-full p-2 my-2" type="text" name="title" placeholder="Enter title" required />
                            </div>
                            <div>
                                <textarea className="border border-slate-700 rounded w-full p-2 my-2" name="summary" placeholder="Enter summary" required></textarea>
                            </div>
                            <div>
                                <input className="border border-slate-700 rounded w-full p-2 my-2" type="number" name="productPrice" placeholder="Enter price" required />
                            </div>
                            <div>

                                <input className="border border-slate-700 rounded w-full p-2 my-2" type="text" name="imageUrl" placeholder="Enter image url" required />
                            </div>
                            <div>
                                <input className="border border-slate-700 rounded w-full p-2 my-2" type="number" name="stock" placeholder="Enter quantity" required />
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

            </th>
        </tr>
    )
}
export default Product;