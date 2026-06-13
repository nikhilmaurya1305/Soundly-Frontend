import {useEffect, useState} from 'react';
import api from "../services/api";
import SongCard from "../components/SongCard";
import Navbar from "../components/Navbar";
import "./Home.css"

function Home(){

    const [songs, setSongs] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {api.get("/songs")
        .then(response =>{
            console.log(response.data)
            setSongs(response.data)
        })
        .catch(error => {console.error(error)})
    },[]);

    return(
        <div>
            <Navbar/>
            <h1 className="page-title">
                Welcome to Soundly :)
            </h1>

            <div className="search-container">

                <input
                    type="text"
                    placeholder="Search songs..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            </div>

            <div className="song-container">
                {songs.filter(song =>
                    song.title
                        .toLowerCase()
                        .includes(search.toLowerCase())
                ).map(song => (
                    <SongCard
                        song={song}
                        key={song.id}
                    />
                ))}
            </div>
        </div>

    );
}

export default Home;