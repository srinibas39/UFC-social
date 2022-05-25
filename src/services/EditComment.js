import axios from "axios"


export const EditComment = ({ postId, commentId, commentData, token }) => {
    return axios.post(`/api/comments/edit/${postId}/${commentId}`,
        { commentData }, {
        headers: {
            authorization: token
        }
    })
}