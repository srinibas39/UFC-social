import axios from "axios"

export const AddBookmark=(token,postId)=>{
    return axios.post(`/api/users/bookmark/${postId}`,{},{headers:{authorization:token}})
}