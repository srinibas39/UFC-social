import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { AutoComplete } from "../components/AutoComplete/AutoComplete"
import { Navbar } from "../components/NavBar/NavBar"
import { PostsUser } from "../components/PostsUser/PostsUser"
import { Profile } from "../components/Profile/Profile"
import { SortingPosts } from "../components/SortingPosts/SortingPosts"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const ProfilePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const {mode}=useSelector((state)=>state.mode)
    return <div id={mode?"dark-mode":""} style={{minHeight:"100vh",overflow:"hidden"}}>
        <Navbar />
        <AutoComplete />
        <Profile />
        <SortingPosts />
        <PostsUser />
        <div className="blank"></div>
        <ToastContainer/>
    </div>
}