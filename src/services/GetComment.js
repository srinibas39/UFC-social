import axios from "axios"


export const GetComment = (postId) => {
    return axios.get(`/api/comments/${postId}`)
}