import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:9000"
});

export default {
    getCart() {
        return http.get('/cart');
    }
}