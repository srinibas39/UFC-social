import axios from "axios";

export const EditUser = (token, userData) => {
    return axios.post("/api/users/edit", { userData }, { headers: { authorization: token } })
}