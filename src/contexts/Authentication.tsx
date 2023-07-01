import { createContext, useState } from "react";
import { User } from "../types/user";

export const AuthenticationContext = createContext<User>({} as User);

export const Authentication = ({
    children,
}: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User>();

    return (
        <AuthenticationContext.Provider value={{ ...user, update: setUser } as User}>
            {children}
        </AuthenticationContext.Provider>
    );
}