import {memo, MouseEventHandler, useCallback} from 'react';
import {logout} from "../store/account/accountSlice";
import {useAppDispatch} from "../store/hooks";
import {Button} from "antd";

const ExitButton = memo((): JSX.Element | null => {
    const dispatch = useAppDispatch();

    const onExit = useCallback(() => {
        dispatch(logout({quiet: true}));
    }, []);

    return (
        <Button danger onClick={onExit}>Logout</Button>
    );
});

export default ExitButton;
