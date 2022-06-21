import axios from "axios"


export const DeleteComment = ({ token, postId, commentId }) => {
    return axios.post(`/api/comments/delete/${postId}/${commentId}`,
        {},
        {
            headers: {
                authorization: token
            }
        })
}