import axios from 'axios'

export const HOST = process.env.HOST
export const HOST_IMAGE = HOST + "/images/products/"

const instance = axios.create({
    headers: {
        "Content-Type": "application/json",
        // "Authenticate": "Token",
    },
    timeout: 2000,
    baseURL: `${HOST}/api`
})

export default instance