import axios from "axios";

export const config = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
