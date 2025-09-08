import { useState } from "react"

function Search() {

    const [search, setSearch] = useState("")

    return (
        <div className="search">
            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder="Search" 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit">Search</button>
                <button>Show All</button>
            </div>
        </div>
    )
}

export default Search