import {Common} from "../../typings/types";

export const enum TYPES {
    LOGIN = 'account/login',
    LOGOUT = 'account/logout',
    SET_AUTH = 'account/setAuth',
    AUTH = 'account/auth',
}

export interface UserDTO extends Common {
    email: string;
    first_name: string;
    last_name: string;
}

export interface AccountDTO {
    user: UserDTO;
    access_token: string;
    refresh_token: string;
}

export interface AccountState {
    account?: AccountDTO;
    loggedOut: boolean;
}

export interface LoginData {
    email: UserDTO['email'];
    password: string;
}

export interface LogoutData {
    quiet?: boolean;
}
