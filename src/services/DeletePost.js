import axios from "axios"

export const DeletePost = ({ postId, token }) => {
    return axios.delete(`api/posts/${postId}`, {
        headers: {
            authorization: token
        }
    })
}