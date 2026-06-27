import { useEffect, useRef } from "react";
import "./AudioPlayer.css";

function AudioPlayer({ songs,currentSong,setCurrentSong }) {

    const audioRef = useRef(null);

    useEffect(() => {

        if (currentSong && audioRef.current) {

            console.log(songs);
            console.log(currentSong);

            audioRef.current.load();

            audioRef.current.play();

        }

    }, [currentSong]);

    if (!currentSong) {
        return null;
    }

    return (
        <div className="audio-player">

            <div className="song-info">
                <h3>🎵 {currentSong.title}</h3>
                <p>{currentSong.artist}</p>
            </div>

            <div className="audio-controls">
                <audio controls ref={audioRef}>
                    <source
                        src={`http://localhost:8080/songs/play/${currentSong.id}`}
                        type="audio/mpeg"
                    />
                </audio>
            </div>

        </div>
    );
}

export default AudioPlayer;