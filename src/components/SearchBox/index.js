import { useState } from "react";
import "./styles.css";
import FilteredList from "./FilteredList"

const SearchBox = () => {

    const [ data, setData ] = useState({
        textSearch: '',
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,       
        })
    }

    return(
        <>
            <h3 className="search-title">Type one year to see the Oscar winner</h3>
            <form >
                <input
                    value={data.textSearch}
                    type="text"
                    name="textSearch"
                    placeholder="e.g. 2000"
                    onChange={(e) => handleChange(e)}
                />
            </form>
            <FilteredList filter={data.textSearch}/>
        </>
    )

}

export default SearchBox;