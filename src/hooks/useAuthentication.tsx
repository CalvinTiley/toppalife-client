import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthenticationContext } from "../contexts/Authentication";

const authRoutes = ["/signin", "/register"];

export const useAuthentication = () => {
    const user = useContext(AuthenticationContext);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user?.access_token || !user.refresh_token || !user.email || !user.name) {
            const userData = {
                access_token: localStorage.getItem("access_token" as string) ?? "",
                refresh_token: localStorage.getItem("refresh_token" as string) ?? "",
                email: localStorage.getItem("email" as string) ?? "",
                name: localStorage.getItem("name" as string) ?? "",
            };

            user.update(userData);

            const refresh = async () => {
                try {
                    const { data: response } = await axios.post(
                        `${import.meta.env.VITE_API_URL}/auth/refresh`,
                        { refresh_token: userData.refresh_token }
                    );

                    localStorage.setItem("access_token", response.access_token);
                    user.update({ ...userData, access_token: response.access_token });

                    navigate("/");
                } catch (error) {
                    localStorage.removeItem("refresh_token");
                    localStorage.removeItem("email");
                    localStorage.removeItem("name");

                    user.update({
                        access_token: "",
                        refresh_token: "",
                        email: "",
                        name: "",
                    });
                }
            };

            const validate = async () => {
                try {
                    await axios.post(
                        `${import.meta.env.VITE_API_URL}/auth/validate`,
                        { access_token: userData.access_token },
                    );

                    navigate("/");
                } catch (error) {
                    localStorage.removeItem("access_token");
                    user.update({ ...userData, access_token: "" });

                    refresh();
                }
            };

            if (userData.access_token) {
                validate();
            } else if (userData.refresh_token) {
                refresh();
            } else {
                localStorage.removeItem("email");
                localStorage.removeItem("name");

                user.update({
                    access_token: "",
                    refresh_token: "",
                    email: "",
                    name: "",
                });

                if (!authRoutes.includes(location.pathname)) {
                    navigate("/signin");
                }
            }
        }
    }, []);

    return user;
};