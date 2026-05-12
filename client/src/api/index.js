import axios from "axios";

export const booksApi = axios.create({
    baseURL: "http://localhost:3001/books"
    // baseURL: "http://dbapi/api/books",
   //  headers : {'X-header-name' : 'api-db'}
});