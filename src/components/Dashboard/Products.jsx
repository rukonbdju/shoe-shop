import { useEffect, useState } from "react"
import useProducts from "../../hooks/useProducts"
import Product from "./Product"

const Products=()=>{
    const [products, setProducts] = useState([])
    console.log(products)
    useEffect(() => {
        fetch("../../../public/data.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products)
    return(
        <div>
            {products?.map(product=><Product key={product.id} product={product}></Product>)}
        </div>
    )
}

export default Products