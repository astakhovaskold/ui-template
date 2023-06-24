import {memo} from 'react';
import {Link} from "react-router-dom";

const Unauthorized = memo((): JSX.Element | null => {
    return (
        <section>
            <h1>Error 401. User doesn't authorized</h1>

            <Link to="/">Home</Link>
        </section>
    );
});

export default Unauthorized;
