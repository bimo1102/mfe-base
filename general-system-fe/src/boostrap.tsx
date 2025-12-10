import axios from 'axios';
import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { setupAxios } from './auth';
import { ProvidersWrapper } from './providers';

import '@/styles/globals.css';
import '@share-system-fe/plugins/keenicons/duotone/style.css';
// import '@share-system-fe/plugins/keenicons/outline/style.css';
// import '@share-system-fe/plugins/keenicons/solid/style.css';

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
