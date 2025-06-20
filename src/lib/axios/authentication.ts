import axios from 'axios';
import Cookies from 'js-cookie'

const authentication = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API
})

authentication.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${Cookies.get('__token')}`
    return config;
}, (error) => {
    return Promise.reject(error)
})

authentication.interceptors.response.use((response) => {
    return response
}, (error) => {
    return Promise.reject(error)
})

export default authentication;