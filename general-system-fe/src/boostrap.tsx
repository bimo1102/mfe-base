import axios from 'axios';
import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { setupAxios } from './auth';
import { ProvidersWrapper } from './providers';

import '@/components/keenicons/assets/styles.css';
import '@/styles/globals.css';

setupAxios(axios);

const bootstrapApplication = () => {
    const rootElement = document.getElementById('root');
    if (!rootElement) return;

    const root = createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <ProvidersWrapper>
                <App />
            </ProvidersWrapper>
        </React.StrictMode>
    );
};

bootstrapApplication();
