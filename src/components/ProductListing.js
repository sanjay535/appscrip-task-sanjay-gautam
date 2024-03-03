// import { PRODUCT_LIST } from "@/constant";
import ProductCard from "./shared/ProductCard";

function ProductListing({products}) {
    console.log(products)
    return <>
        {products.map(product => <ProductCard key={product.id} product={product} />)}
    </>
}
export default ProductListing;