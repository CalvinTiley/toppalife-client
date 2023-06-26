// import { useEffect } from "react";

import { UserGreeting } from "../../components/UserGreeting";

export const Home = () => {
    /* useEffect(() => {
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
    }, []); */

    return (
        <main className="page page--home">
            <UserGreeting />
        </main>
    );
};
