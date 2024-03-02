import { PRODUCT_LIST } from "@/mock";
import ProductCard from "./shared/ProductCard";

function ProductListing() {
    return <>
        {PRODUCT_LIST.map(product => <ProductCard key={product.id} product={product} />)}
    </>
}
export default ProductListing;