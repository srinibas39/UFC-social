import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSort } from "../../features/postsSlice";
import "./SortingPosts.css"

export const SortingPosts = () => {

    const dispatch = useDispatch();
    const [ciickedCategory, setclickedCategory] = useState({
        trend: false,
        recent: false
    });
    return <div className="sorting-posts">

        <h3 className={ciickedCategory.trend ? "primary-color" : ""} onClick={(e) => (dispatch(setSort(e.target.innerText.split("\n")[1])), setclickedCategory({ ...ciickedCategory, trend: true, recent: false }))}><span class="material-symbols-outlined">
            bookmarks
        </span>BOOKMARKS</h3>
        <h3 className={ciickedCategory.recent ? "primary-color" : ""} onClick={(e) => (dispatch(setSort(e.target.innerText.split("\n")[1])), setclickedCategory({ ...ciickedCategory, trend: false, recent: true }))}><span class="material-symbols-outlined">
            article
        </span>POSTS</h3>

    </div>
}