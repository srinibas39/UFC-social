import axios from "axios"

export const LoginService = async ({ username, password }) => {
    return axios.post("/api/auth/login", { username, password })
}