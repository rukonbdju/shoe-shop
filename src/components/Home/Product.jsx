const Product = ({ product }) => {
    const { Title, brand, photoUrl, price,summery,stock } = product
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={photoUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{Title}</h2>
                    <p>Brand: {brand}</p>
                    <p>{summery}</p>
                    <p className="text-red-700 font-bold">Price: {price} TK</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product;