import axios from "axios"


export const GetSinglePost=(postId)=>{
    return axios.get(`/api/posts/${postId}`);
}