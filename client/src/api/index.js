import axios from "axios";

export const booksApi = axios.create({
    baseURL: "http://localhost:3001/books"
});