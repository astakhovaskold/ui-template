import {FormEventHandler, memo, useCallback, useRef} from 'react';
import {useAppDispatch} from "../store/hooks";
import {auth} from "../store/account/accountSlice";
import {LoginData} from "../store/account/types";

const Auth = memo((): JSX.Element | null => {
    const email = useRef<HTMLInputElement | null>(null);
    const password = useRef<HTMLInputElement | null>(null);

    const dispatch = useAppDispatch();

    const onSubmit = useCallback<FormEventHandler<HTMLFormElement>>((e) => {
        e.preventDefault();

        const payload: LoginData = {email: email.current?.value || '', password: password.current?.value || ''};

        dispatch(auth(payload));
    }, []);

    return (
        <form onSubmit={onSubmit} style={{marginBottom: 20, display: 'flex', flexDirection: 'column', gap: 8}}>
            <h1>Sign In</h1>

            <input type="email" name="email" placeholder="E-mail" ref={email} />
            <input type="password" name="password" placeholder="Password" ref={password} />

            <button>Login</button>
        </form>
    );
});

export default Auth;
