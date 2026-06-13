import "./SongCard.css"

function SongCard({song}){
    return(
        <div className="song-card">
            <h3>{song.title}</h3>
            <p>Artist: {song.artist}</p>
            <p>Genre: {song.genre}</p>
            <p>Likes: {song.likes}</p>
            <p>Dislikes: {song.dislikes}</p>
            <hr />
        </div>
    );
}

export default SongCard;