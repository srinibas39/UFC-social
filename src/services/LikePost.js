import axios from "axios"

export const LikePost=({token,id})=>{
    return axios.post(`/api/posts/like/${id}`,
    {},
    {
        headers:{
            authorization:token
        }
    })
}