const DeleteProduct = ({ product, setProducts, setOpenDeleteModal }) => {
    console.log(product)
    const handleDelete = () => {
        setProducts(prev => prev.filter(item => item.id !== product.id))
        setOpenDeleteModal(false)
    }
    return (
        <>
            <div className="fixed top-0 left-0 z-40 w-screen h-screen bg-slate-600/50">
                <div className="w-1/3 rounded-md mt-56  flex flex-col mx-auto bg-white p-10 transition-all">
                    <div>
                        <h2 className="text-2xl mb-20">Are you sure to delete this item?</h2>
                    </div>
                    <div className="flex justify-end gap-2">
                        <button onClick={() => setOpenDeleteModal(false)} className="btn">Cancel</button>
                        <button onClick={() => handleDelete()} className="btn">Confirm</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DeleteProduct;