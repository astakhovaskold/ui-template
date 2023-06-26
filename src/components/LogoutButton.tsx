import {memo, MouseEventHandler} from 'react';
import {logout} from "../store/account/accountSlice";
import {useAppDispatch} from "../store/hooks";

const LogoutButton = memo((): JSX.Element | null => {
    const dispatch = useAppDispatch();

    const onExit: MouseEventHandler<HTMLButtonElement> = () => {
        dispatch(logout({quiet: true}));
    }

    return (
        <button type="button" onClick={onExit}>Logout</button>
    );
});

export default LogoutButton;
