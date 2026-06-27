import { useEffect, useState } from "react";
import { getProfile } from "../services/userService";
import Navbar from "../components/Navbar";

function Profile() {

    const [profile, setProfile] = useState(null);

    useEffect(() => {

        getProfile()
            .then((response) => {
                setProfile(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

    }, []);

    if (!profile) {
        return (
            <>
                <Navbar />
                <h2 style={{ color: "white", textAlign: "center", marginTop: "50px" }}>
                    Loading...
                </h2>
            </>
        );
    }

    return (
        <>
            <Navbar />

            <div className="profile-container">

                <h1>👤 My Profile</h1>

                <h3>Username</h3>
                <p>{profile.username}</p>

                <h3>Email</h3>
                <p>{profile.email}</p>

                <h3>Role</h3>
                <p>{profile.role}</p>

            </div>
        </>
    );
}

export default Profile;