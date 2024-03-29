
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../../features/postsSlice";
import "./Categories.css"
export const Categories = () => {
    const dispatch = useDispatch();
    const [ciickedCategory, setclickedCategory] = useState({
        trend: false,
        recent: true
    });
    const { mode } = useSelector((state) => state.mode)

    return <div className="categories" id={mode ? "dark-mode" : ""}>

        <h3 className={ciickedCategory.trend ? "primary-color":""} onClick={(e) => (dispatch(setSort(e.target.innerText.split("\n")[1])), setclickedCategory({ ...ciickedCategory, trend: true, recent: false }))}><span className="material-symbols-outlined">
            trending_up
        </span>Trending</h3>
        <h3 className={ciickedCategory.recent ? "primary-color":""} onClick={(e) => (dispatch(setSort(e.target.innerText.split("\n")[1])), setclickedCategory({ ...ciickedCategory, trend: false, recent: true }))}><span className="material-symbols-outlined">
            timer
        </span>Recent</h3>

    </div>
}