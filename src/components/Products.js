import React, {useEffect, useState} from 'react';
import ProductService from "../services/ProductService";
import KeycloakService from "../services/KeycloakService";

const Products = () => {

    const [products, setProducts] = useState([])

    const fetch = () => {
        ProductService.getProducts(onSuccessFetch, onFailureFetch, KeycloakService.getToken())
    }

    const onSuccessFetch = (data) => {
        setProducts(data)
    }

    const onFailureFetch = () => {
        setProducts(null)
    }

    useEffect(() => {
        fetch()
    }, []);


    if (products === null)
        return <div style={{display: 'flex', justifyContent: "center"}}>You are not authenticated</div>

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            {
                products.map(product => (
                    <div key={product.id} style={{border: "1px solid black", borderRadius: '10px', padding: 5, margin: 10}}>
                        <div>Product: {product.name}</div>
                        <div>{product.year} year</div>
                        <div>Made in {product.country}</div>
                        <div>Count: {product.count} </div>
                    </div>
                ))
            }

            <div>
                {
                    KeycloakService.getToken()
                }
            </div>
        </div>
    );
};

export default Products;