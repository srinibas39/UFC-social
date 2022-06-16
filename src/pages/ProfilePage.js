import { useEffect, useState } from "react"
import { AutoComplete } from "../components/AutoComplete/AutoComplete"
import { Comments } from "../components/Comments/Comments"
import { Navbar } from "../components/NavBar/NavBar"
import { PostsUser } from "../components/PostsUser/PostsUser"
import { Profile } from "../components/Profile/Profile"
import { SortingPosts } from "../components/SortingPosts/SortingPosts"
import { UserPost } from "../components/UserPost/UserPost"


export const ProfilePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return <>
        <Navbar />
        <AutoComplete />
        <Profile />
        <SortingPosts />
        <PostsUser />
    </>
}