import axios from "axios"


export const AddComment = ({ postId, commentData, token }) => {
    return axios.post(`/api/comments/add/${postId}`,
        { commentData },
        {
            headers: {
                authorization: token
            }
        })
}