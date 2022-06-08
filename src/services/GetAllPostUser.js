import axios from "axios"

export const GetAllPostUser = (username) => {
    return axios.get(`/api/posts/user/${username}`)
}