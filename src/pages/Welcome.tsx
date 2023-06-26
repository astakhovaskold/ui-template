import {memo} from 'react';
import {useAccount} from "../hooks/useAccount";
import ExitButton from "../components/ExitButton";
import {Container} from "../components/Presentation/containers";
import {Space} from "antd";

const Welcome = memo((): JSX.Element | null => {
    const {account} = useAccount();

    if (!account) return null;

    const {first_name} = account.user;

    return (
        <Container>
            <Space direction="vertical">
                <h1>Welcome, {first_name}</h1>

                <ExitButton />
            </Space>
        </Container>
    );
});

export default Welcome;
