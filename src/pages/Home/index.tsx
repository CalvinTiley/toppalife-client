import { useEffect } from "react";

export const Home = () => {
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
            method: "POST",
            mode: "cors",
            body: JSON.stringify({
                email: "test@hotmail.com",
                password: "test123",
            }),
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
            referrerPolicy: "no-referrer",
        });
    }, []);


    return (
        <div className="page page--home">
            <h1>Home</h1>
        </div>
    );
};
