import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../../features/postsSlice";
import "./SortingPosts.css"

export const SortingPosts = () => {

    const dispatch = useDispatch();
    const [ciickedCategory, setclickedCategory] = useState({
        trend: false,
        recent: false
    });
    const auth = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.users);
    const { mode } = useSelector((state) => state.mode)
   

    return <div className="sorting-posts" id={mode ? "dark-mode" : ""}>
        {
            auth.user._id===user._id? <h3 className={ciickedCategory.trend ? "primary-color" : ""} onClick={(e) => (dispatch(setSort(e.target.innerText.split("\n")[1])), setclickedCategory({ ...ciickedCategory, trend: true, recent: false }))}><span className="material-symbols-outlined">
                bookmarks
            </span>BOOKMARKS</h3> : ""
        }

        <h3 className={ciickedCategory.recent ? "primary-color" : ""} onClick={(e) => (dispatch(setSort(e.target.innerText.split("\n")[1])), setclickedCategory({ ...ciickedCategory, trend: false, recent: true }))}><span className="material-symbols-outlined">
            article
        </span>POSTS</h3>

    </div>
}