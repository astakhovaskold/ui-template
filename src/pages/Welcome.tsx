import {memo} from 'react';
import {useAccount} from "../hooks/useAccount";
import LogoutButton from "../components/LogoutButton";

const Welcome = memo((): JSX.Element | null => {
    const {account} = useAccount();

    if (!account) return null;

    const {first_name} = account.user;

    return (
        <>
            <h1>Welcome, {first_name}</h1>

            <LogoutButton />
        </>
    );
});

export default Welcome;
