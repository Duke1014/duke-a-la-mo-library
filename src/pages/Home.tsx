import { Link } from "react-router-dom"

function Home() {

    return(
        <div className="Home">
            <h1>Home</h1>
            <p>
                Add new media
            </p>
            <p>
                <Link to="/search">Search</Link>
            </p>
        </div>
    )

}

export default Home