import axios from "axios"

export const DislikePost = ({ token, id }) => {
    return axios.post(`/api/posts/dislike/${id}`, 
    {}, 
    {
        headers: {
            authorization: token
        }
    })
}