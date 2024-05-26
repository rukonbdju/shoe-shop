const Product = ({ product }) => {
    const {Title,brand,price,photoUrl,summery}=product
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
                <button className="btn btn-xs border">Delete</button>
            </th>
            <th>
                
                <button className="btn btn-xs border">Edit</button>
            </th>
        </tr>
    )
}
export default Product;