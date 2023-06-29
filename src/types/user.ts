import { Dispatch, SetStateAction } from "react";

export interface User {
    accessToken: string;
    email: string;
    name: string;
    refreshToken: string;
    update: Dispatch<SetStateAction<Omit<User, "update">>>;
}