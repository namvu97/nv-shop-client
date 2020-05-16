import axios from 'axios'

export const HOST = "https://nvshop-server.herokuapp.com"
export const HOST_IMAGE = HOST + "/images/products/"

const instance = axios.create({
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authenticate": "Token",
    },
    timeout: 2000,
    baseURL: `${HOST}/api`
})

export default instance