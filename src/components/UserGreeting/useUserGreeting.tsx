import { useMemo } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

export const useUserGreeting = () => {
    const user = useAuthentication();

    const name = user.name;
    const initial = useMemo(() => name ? name[0] : "", [name]);

    const avatar = user.photo ? (
        <img src={user.photo} alt={`Photo of ${name}`} />
    ) : (
        <p className="user-greeting__initial">{initial}</p>
    );

    return {
        avatar,
        name,
    };
};