const EditProduct = () => {
    return (
        <>
            <button className="btn btn-xs border" onClick={() => document.getElementById('my_modal_3').showModal()}>Edit</button>
            <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div>
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
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn mr-2">Cancel</button>
                            <button className="btn mr-2">Confirm</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}
export default EditProduct;