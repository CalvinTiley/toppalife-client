import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../contexts/Authentication";

const publicRoutes = ["/signin", "/register"];

export const useAuthentication = () => {
    const user = useContext(AuthenticationContext);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!user?.email || !user.name) {
            if (user?.accessToken) {
                console.log("hit 1");
                try {

                } catch (error) {
                    user.update({ ...user, accessToken: "" });
                }
            } else if (user?.refreshToken) {
                console.log("hit 2");
                try {

                } catch (error) {
                    user.update({ ...user, refreshToken: "" });
                }
            } else if (!publicRoutes.includes(location.pathname)) {
                navigate("/signin");
                console.log("hit 3");
            }
        }
    }, [user]);

    return user;
};