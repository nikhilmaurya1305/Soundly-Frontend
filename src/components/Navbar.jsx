import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
        window.location.reload();
    };

    return (
        <nav className="navbar">

            <div className="logo">
                🎵 Soundly 🎵
            </div>

            <div className="nav-links">

                <Link to="/">Home</Link>

                {token ? (
                    <>
                        <Link to="/playlists">Playlists</Link>

                        <Link to="/profile">Profile</Link>

                        <button
                            className="logout-btn"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>

                        <Link to="/register">Register</Link>
                    </>
                )}

            </div>

        </nav>
    );
}

export default Navbar;