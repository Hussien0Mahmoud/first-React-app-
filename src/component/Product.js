import { Link } from "react-router-dom";
import "./Product.css";
function Product( props ){
    const {product, showButton}= props;
    return(
        <>
            <div className="card" >
                <img src={product.image} className="card-img-top image" alt={product.title}/>
                <div className="card-body">
                    <h5 className="card-title title">{product.title}</h5>
                    <p className="card-text desc">{product.description}</p>
                    <p>Price { product.price }$</p>
                    {showButton &&<Link className="btn btn-primary" to={`product/${product.id}` }>Details</Link>}
                    
                </div>
            </div> 
                
        </>
    )
}

export default Product;