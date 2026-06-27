import api from "./api";

export const register = async (user) => {
    return await api.post("/auth/register", user);
};

export const login = async (user) => {
    return await api.post("/auth/login", user);
};