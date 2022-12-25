import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import "./ProductDetails.css";

function ProductDetails() {
const api_url = "https://fakestoreapi.com/products";

const params = useParams();
const [product, setProduct] = useState({});
useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
    .then((res) => res.json())
    .then((product) => setProduct(product));
}, []);
return (
    <>
    <div className="product-details">
        <Product product={product} showButton={false} />
    </div>
    </>
);
}
export default ProductDetails;
