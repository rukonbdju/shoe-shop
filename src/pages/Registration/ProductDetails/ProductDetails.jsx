import { useParams } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";
import { useEffect, useState } from "react";

const ProductDetails = () => {
    const [products,setProducts] = useState()
    const [product, setProduct] = useState({})
    const param = useParams();
    useEffect(() => {
        fetch("../../../../public/data.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(param)
    useEffect(() => {
        setProduct(products?.filter(item => item.id === param.id)[0])
    }, [param.id, products])
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={product?.photoUrl} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{product?.Title}</h1>
                    <p className="py-6 ">{product?.summery}</p>
                    <p className="py-2 text-red-700 font-bold">Price: {product?.price}</p>
                    <p className="py-2 ">Stock{product?.stock}</p>
                    <button className="btn btn-primary">Buy Now</button>
                    <button className="btn btn-primary ml-5">Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default ProductDetails;