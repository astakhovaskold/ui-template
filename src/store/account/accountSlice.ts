import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {AccountDTO, AccountState, LoginData, LogoutData} from './types';
import axios from "axios";

export function getAccountFromLS(): AccountDTO | undefined {
    const storeName = `${_UNIQUE_STATE}_account`;
    const storedAccount = localStorage.getItem(storeName);
    if (storedAccount) {
        try {
            const account: AccountDTO = JSON.parse(storedAccount);
            axios.defaults.headers.common.Authorization = `Bearer ${account.access_token}`;
            return account;
        } catch (e) {
            localStorage.removeItem(storeName);
        }
    }
}

const initialState: AccountState = {
    account: getAccountFromLS(),
    loggedOut: false,
};

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        auth(state, action: PayloadAction<LoginData>) {
            return state;
        },
        setAuth(state, action: PayloadAction<AccountDTO>) {
            return state;
        },
        login(state, action: PayloadAction<AccountDTO>) {
            state.account = action.payload;
            state.loggedOut = false;
        },
        logout(state, action: PayloadAction<LogoutData>) {
            state.account = undefined;
            state.loggedOut = true;
        },
    },
});

export const {login, logout, auth, setAuth} = accountSlice.actions;

export default accountSlice.reducer;
