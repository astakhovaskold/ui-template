import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Provider} from "react-redux";

import {store} from "./store/store";
import Navigation from "./router/Navigation";
import queryClient from "./libs/queryClient";
import {QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <Navigation/>
            </Provider>

            <ReactQueryDevtools position="bottom-right" />
        </QueryClientProvider>
    </React.StrictMode>,
)
