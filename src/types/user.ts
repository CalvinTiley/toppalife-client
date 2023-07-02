import { Dispatch, SetStateAction } from "react";

export interface BaseUser {
    access_token: string;
    email: string;
    name: string;
    refresh_token: string;
}

export interface User extends BaseUser {
    photo?: string;
    update: Dispatch<SetStateAction<Omit<User, "update">>>;
}