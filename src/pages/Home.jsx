import { useEffect, useState } from "react";
import api from "../services/api";
import SongCard from "../components/SongCard";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import "./Home.css";

function Home() {
    const [songs, setSongs] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        api.get("/songs")
            .then((response) => {
                console.log(response.data);
                setSongs(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const filteredSongs = songs.filter((song) =>
        song.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <Navbar />

            <h1 className="page-title">
                Welcome to Soundly :)
            </h1>

            <SearchBar
                search={search}
                setSearch={setSearch}
            />

            <div className="song-container">
                {filteredSongs.length > 0 ? (
                    filteredSongs.map((song) => (
                        <SongCard
                            key={song.id}
                            song={song}
                        />
                    ))
                ) : (
                    <p>No songs found</p>
                )}
            </div>
        </div>
    );
}

export default Home;