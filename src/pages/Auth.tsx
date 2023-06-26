import {memo, useCallback} from 'react';
import {useAppDispatch} from "../store/hooks";
import {auth} from "../store/account/accountSlice";
import {LoginData} from "../store/account/types";
import {Button, Form, Input} from "antd";

const {Item} = Form;

const Auth = memo((): JSX.Element | null => {
    const dispatch = useAppDispatch();

    const onFinish = useCallback((values: LoginData) => {
        dispatch(auth(values));
    }, []);

    return (
        <section style={{maxWidth: 600, margin: '0 auto'}}>
            <Form onFinish={onFinish} layout="vertical">
                <h1>Sign In</h1>

                <Item label="E-mail" name="email">
                    <Input />
                </Item>

                <Item label="Password" name="password">
                    <Input.Password autoComplete="current-password" />
                </Item>

                <Button type="primary" htmlType="submit">Login</Button>
            </Form>
        </section>
    );
});

export default Auth;
