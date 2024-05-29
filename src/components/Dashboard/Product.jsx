import { useState } from "react"
import DeleteProduct from "./DeleteProduct";
import EditProduct from "./EditProduct";

const Product = ({ product, setProducts }) => {
    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    const [openEditModal, setOpenEditModal] = useState(false)
    const [shoe,setShoe]=useState(product)
    const { id, Title, brand, price, photoUrl, summery,stock } = shoe;

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
            <td>
                <p>Stock: {stock}</p>
            </td>
            <td className="font-bold">BDT {price}</td>
            <th>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn btn-xs" onClick={() => setOpenDeleteModal(true)}>Delete</button>
                {openDeleteModal && <DeleteProduct product={product} setProducts={setProducts} setOpenDeleteModal={setOpenDeleteModal}></DeleteProduct>}

            </th>
            <th>
                <button className="btn btn-xs" onClick={() => setOpenEditModal(true)}>Edit</button>
                {openEditModal&&<EditProduct shoe={shoe} setShoe={setShoe} setOpenEditModal={setOpenEditModal}></EditProduct>}
                
            </th>
        </tr>
    )
}
export default Product;