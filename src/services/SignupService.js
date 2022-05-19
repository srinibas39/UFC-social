import axios from "axios"

export const SignupService = async ({ username, password, firstName, lastName }) => {
    return axios.post("/api/auth/signup", { username, password, firstName, lastName })
}