import React from 'react';
import ReactDOM from 'react-dom/client';
import 'dayjs/locale/ru';
import ruRU from 'antd/locale/ru_RU';
import {QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import {Provider} from 'react-redux';

import queryClient from './libs/queryClient';
import validateMessages from './libs/validateMessages';
import Navigation from './router/Navigation';
import {store} from './store/store';

import {ConfigProvider} from 'antd';
import dayjs from 'dayjs';

dayjs.locale('ru');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ConfigProvider locale={ruRU} form={{validateMessages}}>
                <Provider store={store}>
                    <Navigation />
                </Provider>
            </ConfigProvider>

            <ReactQueryDevtools position="bottom-right" />
        </QueryClientProvider>
    </React.StrictMode>,
);
