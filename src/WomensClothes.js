import React, { useEffect, useState } from "react";
import axios from "axios";

function WomensClothes() {
    const [loading, setLoading] = useState(true);
    const [womensClothesData, setWomensClothesData] = useState([]);
    const [item, setItem] = useState({});
    const [flag, setFlag] = useState(false);

    const info = (productId) => {
        axios({
            method: "GET",
            url : "https://fakestoreapi.com/products/"+productId,
        })
        .then((res)=> {
            console.log(res.data);
            setItem(res.data);
        })
        .catch((e) => console.log(e))
        .finally(() => setFlag(true)); 
       
    };

    useEffect(() => {
        axios({
            method: "GET",
            url: "https://fakestoreapi.com/products/category/women's clothing", 
        })
        .then((res) => {
            console.log(res.data);
            setWomensClothesData(res.data);
        })
        .catch((e) => console.log(e))
        .finally(() => setLoading(false));  
    }, 
    []);

    return (
        <div className="WomensClothes">

            {loading && (
                <div>
                    <h1>WomenClothes</h1>
                    <h1>Loading.....</h1>
                </div>
        )} 
        
            {!flag&&(<div className="product-list">
                {womensClothesData.map((product) => (
                    <div className="product" key={product.id}>
                        <img src={product.image} alt={product.title} className="product-image" 
                        onClick={()=>info(product.id)}/>
                        <div className="product-title">{product.title}</div>
                        <div className="product-price">${product.price}</div>
                        
                    </div>
                ))}
            </div>)}

            {flag && (
                <div>
                    <img src={item.image} alt={item.title} className="item-image"/>
                    <div className="Item-title">{item.title}</div>
                    <div className="Item-price">${item.price}</div>
                    <div className="Item-description">{item.description}</div>
                    <div className="Item-rating">Rating: {item.rating.rate}</div>
                    <div className="Item-count">Available quanity :{item.rating.count}</div>
                </div>
            )}
    </div>
    );
}
export default WomensClothes;
