const AddProduct=()=>{
    return(
        <>
            <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Add new Product</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
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
        </>
    )
}
export default AddProduct;