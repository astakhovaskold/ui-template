import Auth from "./pages/Auth";
import {useAuth} from "./hooks/useAuth";
import Welcome from "./pages/Welcome";
import AxiosInterceptorAccess from "./components/Utils/AxiosInterceptorAccess";
import {logout, setAuth} from "./store/account/accountSlice";
import {AccountDTO} from "./store/account/types";
import useLS from "./hooks/useLS";
import {useAppDispatch} from "./store/hooks";

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

            {isAuth ? <Welcome/> : <Auth/>}
        </>
    )
}

export default App
