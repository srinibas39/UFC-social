import { useState } from "react"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


import "./AutoComplete.css"

export const AutoComplete = () => {
    const [filteredSuggestion, setFilteredSuggestion] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);
    const [input, setInput] = useState("");
    const [suggestion, setSuggestion] = useState([])
    const { users } = useSelector((state) => state.users);
    const navigate = useNavigate();


    useEffect(() => {
        setSuggestion(users.map((el) => ({ name: el.firstName + " " + el.lastName, image: el.image, _id: el._id })))
    }, [users])


    const handleChange = (e) => {
        setInput(e.target.value);
        setFilteredSuggestion(suggestion.filter((el) => el.name.toLowerCase().indexOf(input.toLowerCase()) > -1));
        setShowSuggestion(true);
       
    }

    const handleClick = (e) => {
        setInput(e.target.innerText);
        setFilteredSuggestion([]);
        setShowSuggestion(false);

        const [user]=filteredSuggestion.filter((el)=>el.name===e.target.innerText);
       
        navigate(`/profile/${user._id}`)
    }

    const SuggestionList = () => {
        return <>
            {
                filteredSuggestion.length ? <ul className="auto-input">
                    {
                        filteredSuggestion.map((user, idx) => {
                            return <li key={idx} onClick={handleClick}>
                                <img src={user.image}/>
                                <p>{user.name}</p>
                                </li>
                        })
                    }
                </ul> :
                    <ul className="auto-no-input">
                        <li>Sorry, No search results for {input}</li>
                    </ul>


            }
        </>
    }



    return <div className="search-con">
        <input type="search" placeholder={"Type To search"} value={input} onChange={handleChange} />
        <span className="material-icons-outlined"> search </span>
        {showSuggestion && input && <SuggestionList />}
    </div>
}