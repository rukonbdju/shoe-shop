const AddProduct = ({setIsAddProduct,products,setProducts}) => {
    const handleAddProduct = (e) => {
        e.preventDefault()
        console.log(e.target.title.value)
        const newProduct={
            Title:e.target.title.value,
            brand:e.target.brand.value,
            summery:e.target.summery.value,
            price:e.target.price.value,
            stock:e.target.stock.value,
            photoUrl:e.target.photoUrl.value,
            id:(products.length+1).toString()
        }
        console.log(newProduct)
        setProducts([...products,newProduct])
        setIsAddProduct(false)
    }
    return (
        <div className="fixed top-0 left-0 z-40 w-screen h-screen bg-slate-600/50">
            <div className="w-1/3 rounded-md mt-20  flex flex-col mx-auto bg-white p-10 transition-all">
                <form onSubmit={handleAddProduct}>
                    <h1 className="text-center text-3xl mb-5">Add New Product</h1>
                    <div>
                        <input name="title" className="border border-slate-700 rounded w-full p-2 my-2" type="text" placeholder="Enter title" required />
                    </div>
                    <div>
                        <input name="brand" className="border border-slate-700 rounded w-full p-2 my-2" type="text" placeholder="Enter Brand" required />
                    </div>
                    <div>
                        <textarea className="border border-slate-700 rounded w-full p-2 my-2" name="summery" placeholder="Enter summary" required></textarea>
                    </div>
                    <div>
                        <input name="price" className="border border-slate-700 rounded w-full p-2 my-2" type="number" min={0} placeholder="Enter price" required />
                    </div>
                    <div>

                        <input className="border border-slate-700 rounded w-full p-2 my-2" type="text" name="photoUrl" placeholder="Enter image url" required />
                    </div>
                    <div>
                        <input className="border border-slate-700 rounded w-full p-2 my-2" type="number" name="stock" min={0} placeholder="Enter quantity" required />
                    </div>
                    <div className="flex flex-row justify-end gap-2">
                        <input className="btn" type="submit" value={"Add"} />
                        <span onClick={()=>setIsAddProduct(false)} className="btn">Cancel</span>
                    </div>

                </form>

            </div>
        </div>
    )
}
export default AddProduct;