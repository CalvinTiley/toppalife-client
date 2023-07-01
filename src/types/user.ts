import { Dispatch, SetStateAction } from "react";

export interface User {
    access_token: string;
    email: string;
    name: string;
    photo?: string;
    refresh_token: string;
    update: Dispatch<SetStateAction<Omit<User, "update">>>;
}