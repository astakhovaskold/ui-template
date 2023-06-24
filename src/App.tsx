import {useAuth} from "./hooks/useAuth";
import AxiosInterceptorAccess from "./components/Utils/AxiosInterceptorAccess";
import {logout, setAuth} from "./store/account/accountSlice";
import {AccountDTO} from "./store/account/types";
import useLS from "./hooks/useLS";
import {useAppDispatch} from "./store/hooks";
import {Outlet} from "react-router";

function App() {
    const isAuth = useAuth();

    const dispatch = useAppDispatch();

    useLS<AccountDTO>('account', account => {
        if (account) {
            dispatch(setAuth(account));
        } else {
            dispatch(
                logout({
                    quiet: true,
                }),
            );
        }
    });

    return (
        <>
            <AxiosInterceptorAccess/>

            <Outlet />
        </>
    )
}

export default App
