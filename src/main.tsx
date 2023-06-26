import React from 'react'
import ReactDOM from 'react-dom/client'
import 'dayjs/locale/ru';
import ruRU from 'antd/locale/ru_RU';
import {Provider} from "react-redux";

import {store} from "./store/store";
import Navigation from "./router/Navigation";
import queryClient from "./libs/queryClient";
import {QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {ConfigProvider} from "antd";
import dayjs from "dayjs";
import validateMessages from "./libs/validateMessages";

dayjs.locale('ru');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ConfigProvider locale={ruRU} form={{validateMessages}}>
                <Provider store={store}>
                    <Navigation />
                </Provider>
            </ConfigProvider>

            <ReactQueryDevtools position="bottom-right"/>
        </QueryClientProvider>
    </React.StrictMode>,
)
