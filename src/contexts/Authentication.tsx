import { createContext, useState } from "react";
import { User } from "../types/user";

interface Props {
    children: React.ReactNode;
}

export const AuthenticationContext = createContext<User>({} as User);

export const Authentication = ({
    children,
}: Props) => {
    const [user, setUser] = useState<User>();

    return (
        <AuthenticationContext.Provider value={{ ...user, update: setUser } as User}>
            {children}
        </AuthenticationContext.Provider>
    );
}