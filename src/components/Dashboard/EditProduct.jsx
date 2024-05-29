import { useState } from "react";

const EditProduct = ({ shoe,setShoe,setOpenEditModal }) => {
    const [title,setTitle]=useState(shoe?.Title)
    const [price,setPrice]=useState(shoe?.price)
    const [summery,setSummery]=useState(shoe?.summery)
    const [photoUrl,setPhotoUrl]=useState(shoe?.photoUrl)
    const [stock,setStock]=useState(shoe?.stock)
    const [brand,setBrand]=useState(shoe?.brand)
    const handleChange=(e,type)=>{
        switch (type) {
            case 'title':
                setTitle(e.target.value)
                break;
            case 'price':
                setPrice(e.target.value)
                break;
            case 'summery':
                setSummary(e.target.value)
                break;
            case 'stock':
                setStock(e.target.value)
                break;
            case 'brand':
                setBrand(e.target.value)
                break;
        
            case 'photo':
                setBrand(e.target.value)
                break;
        
            default:
                break;
        }
        console.log(type,e.target.value);
    }
    const handleEdit=()=>{
        const editedProduct={
            id:shoe?.id,
            Title:title,
            price,stock,photoUrl,summery,brand
        }
        setShoe(editedProduct);
        setOpenEditModal(false)
    }

    return (
        <div className="fixed top-0 left-0 z-40 w-screen h-screen bg-slate-600/50">
            <div className="w-1/3 rounded-md mt-24  flex flex-col mx-auto bg-white p-10 transition-all">
                <div>
                    <h1 className="text-5xl my-6 text-center">Edit Product</h1>
                    <div>
                        <input onChange={(e)=>handleChange(e,'title')} className="border border-slate-700 rounded w-full p-2 my-2" type="text" value={title} placeholder="Enter title" required />
                    </div>
                    <div>
                        <input onChange={(e)=>handleChange(e,'brand')} className="border border-slate-700 rounded w-full p-2 my-2" type="text" value={brand} placeholder="Enter Brand" required />
                    </div>
                    <div>
                        <textarea onChange={(e)=>handleChange(e,'summery')} className="border border-slate-700 rounded w-full p-2 my-2" name="summary" placeholder="Enter summary" value={summery} required></textarea>
                    </div>
                    <div>
                        <input onChange={(e)=>handleChange(e,'price')} className="border border-slate-700 rounded w-full p-2 my-2" type="number" placeholder="Enter price" value={price} required />
                    </div>
                    <div>

                        <input onChange={(e)=>handleChange(e,'photo')} className="border border-slate-700 rounded w-full p-2 my-2" type="text" name="imageUrl" placeholder="Enter image url" value={photoUrl} required />
                    </div>
                    <div>
                        <input onChange={(e)=>handleChange(e,'stock')} className="border border-slate-700 rounded w-full p-2 my-2" type="number" name="stock" placeholder="Enter quantity" value={stock} required />
                    </div>
                    <button onClick={()=>handleEdit()} className="btn">EDIT</button>
                    <button onClick={()=>setOpenEditModal(false)} className="btn">cancel</button>
                </div>
            </div>
        </div>
    )
}
export default EditProduct;