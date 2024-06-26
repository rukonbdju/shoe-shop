import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([])
    console.log(products)
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return products;
}
export default useProducts;