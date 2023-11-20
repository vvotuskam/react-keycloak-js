import axios from "axios";
import {useDispatch, useSelector} from "react-redux";

const url = "http://localhost:8081/api/products"

const getProducts = async (onSuccess, onFailure, jwt) => {
    try {
        console.info('Fetching products info with jwt: ' + jwt.substring(0, 10) + '...')
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${jwt}`,
                'Content-Type': 'application/json',
            }
        })
        console.info('Response data: ' + response.data)
        onSuccess(response.data);
    } catch (error) {
        if (error.response && error.response.status === 401) {
            console.error('Authentication failed. Invalid credentials.');
        } else {
            console.error('An error occurred during login:', error.message);
        }
        onFailure();
    }
}

const deleteProduct = async (onSuccess, onFailure, jwt, id) => {
    try {
        console.info('Deleting product with jwt: ' + jwt.substring(0, 10) + '... and id: ' + id)
        await axios.delete(url, {
            headers: {
                'Authorization': `Bearer ${jwt}`,
                'Content-Type': 'application/json',
            }
        })
        onSuccess()
    } catch (error) {
        if (error.response && error.response.status === 401) {
            console.error('Authentication failed. Invalid credentials.');
        } else {
            console.error('An error occurred during login:', error.message);
        }
        onFailure();
    }
}

const ProductService = {getProducts}

export default ProductService;