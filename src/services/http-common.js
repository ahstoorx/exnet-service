import axios from "axios";

export const AXIOS_HEADER = axios.create({
    baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});


// export const API_URL = 'http://127.0.0.1:8000/zamodi-api';