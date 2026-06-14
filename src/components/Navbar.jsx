import "./Navbar.css";

function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">
                🎵_Soundly_🎵
            </div>

            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#">Playlists</a>
                <a href="#">Liked Songs</a>
            </div>
        </nav>
    );
}
export default Navbar;