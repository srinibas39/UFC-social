import axios from "axios"

export const GetSingleUser = (userId) => {
    return axios.get(`/api/users/${userId}`)
}