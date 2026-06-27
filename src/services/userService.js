import api from "./api";

export const getProfile = async () => {
    return await api.get("/users/profile");
};