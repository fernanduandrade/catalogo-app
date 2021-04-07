import axios from 'axios';

const api = axios.create({
    baseURL: "https://products-cart.herokuapp.com/api/products/",
});

export default api;
