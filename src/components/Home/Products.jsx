
import useProducts from "../../hooks/useProducts";
import Product from "./Product";

const Products = () => {
    const products = useProducts()
    return (
        <div className="w-4/5 mx-auto my-10">
            <h2 className="text-4xl my-6 font-bold">Our Products</h2>
            <div className="grid grid-cols-3 gap-5">
                {products?.map(product => <Product key={product.id} product={product}></Product>)}
            </div>
        </div>
    )
}
export default Products;
