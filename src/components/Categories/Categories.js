
import { useDispatch } from "react-redux";
import { setSort } from "../../features/postsSlice";
import "./Categories.css"
export const Categories = () => {
    const dispatch = useDispatch();
    return <div className="categories">
        <h3 onClick={(e) => dispatch(setSort(e.target.innerText.split("\n")[1]))}><span className="material-symbols-outlined">
            trending_up
        </span>Trending</h3>
        <h3 onClick={(e) => dispatch(setSort(e.target.innerText.split("\n")[1]))}><span className="material-symbols-outlined">
            timer
        </span>Recent</h3>
    </div>
}