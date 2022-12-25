import { useState, useEffect } from "react";
import Product from "./Product";
import './ProductList.css';
function ProductList(){
    const api_url= "https://fakestoreapi.com/products";
    const [products,setProducts]= useState([])
    const [categories ,setCategories]= useState([])

    const getProducts= ()=>{
        fetch(api_url)
        .then( (response)=>response.json())
        .then( (data)=>setProducts(data));
    }
    const getCategories= ()=>{
        fetch(`${api_url}/categories `)
        .then( (response)=>response.json())
        .then( (data)=>setCategories(data));
    }
    const getProductInCategory= (catName)=>{
        fetch(`${api_url}/category/${catName} `)
        .then( (response)=>response.json())
        .then( (data)=>setProducts(data))
    }

    useEffect( ()=> {
        getProducts();
        getCategories();
    },[])

    return(
        <>
        <h2 className="text-center p-4"> Our Pruducts </h2>
        <div className="container">
                <button  onClick={()=>{
                            getProducts();
                        }} className="btn btn-primary btn-lg " >All</button>
                {
                    categories.map( (cat)=>{
                        return <button key={cat} onClick={()=>{
                            getProductInCategory(cat);
                        }} className="btn btn-primary btn-lg">{cat}</button>
                        
                    })
                }
            <div className="row">
                
                    {products.map( (product)=>{
                        return(
                            <div className="col-3" key={product.id}>
                            <Product product={product} showButton={true}/>
                            </div>
                        );
                    })}
                    
                
                
            </div>
        </div>
        </>
    )
}

export default ProductList;