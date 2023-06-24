import {memo} from 'react';
import {Link} from 'react-router-dom';

const NotFound = memo((): JSX.Element | null => {
    return (
        <section>
            <h1>Error 404. Page not found</h1>

            <Link to="/">Home</Link>
        </section>
    );
});

export default NotFound;
