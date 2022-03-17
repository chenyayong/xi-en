import Cookies from 'js-cookie'

// User
const tokenKey = 'PHPSESSID'
export const getToken = () => Cookies.get(tokenKey)
export const setToken = (token) => Cookies.set(tokenKey, token)
export const removeToken = () => Cookies.remove(tokenKey)
