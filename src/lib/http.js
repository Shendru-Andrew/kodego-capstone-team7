import axios from "axios"

const http = axios.create({
    baseURL: import.meta.env.VITE_API,
    headers: {
        'Accept': 'application/json'
    }
})

export default http