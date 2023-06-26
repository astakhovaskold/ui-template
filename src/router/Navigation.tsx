import {lazy, memo, Suspense} from 'react';
import {createRoutesFromElements, Route, RouterProvider} from "react-router";
import App from "../App";
import {createBrowserRouter} from "react-router-dom";
import {RouteGuard} from "./RouteGuard";
import Welcome from "../pages/Welcome";

const NotFound = lazy(() => import('../pages/error/NotFound'));
const Unauthorized = lazy(() => import('../pages/error/Unauthorized'));

const Auth = lazy(() => import('../pages/Auth'));

const Navigation = memo(() => {
    return (
        <Suspense fallback={<>Loading...</>}>
            <RouterProvider
                router={createBrowserRouter(
                    createRoutesFromElements(
                        <>
                            <Route path="/" element={<App />} errorElement={<NotFound/>}>
                                <Route element={<RouteGuard restrictedWithAuth isPublic/>}>
                                    <Route path="/auth" element={<Auth/>} />
                                </Route>

                                <Route path="/unauthorized" element={<Unauthorized/>}/>

                                <Route element={<RouteGuard />}>
                                    <Route path="/" element={<Welcome/>}/>
                                </Route>
                            </Route>
                        </>,
                    ),
                )}
            />
        </Suspense>
    );
});

export default Navigation;
