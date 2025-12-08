import { DefaultPage, MainDarkSidebarPage } from '@/pages/dashboards';

import { ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router';

import { AuthPage } from '@/auth';
import { RequireAuth } from '@/auth/RequireAuth';
import { ErrorsRouting } from '@/errors';
import { MainLayout } from '@/layouts/mains';
import {
    AuthenticationAccountDeactivatedPage,
    AuthenticationGetStartedPage,
    AuthenticationWelcomeMessagePage,
} from '@/pages/authentication';

const AppRoutingSetup = (): ReactElement => {
    return (
        <Routes>
            <Route element={<RequireAuth />}>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<DefaultPage />} />
                    <Route path="/dark-sidebar" element={<MainDarkSidebarPage />} />
                    <Route path="/auth/welcome-message" element={<AuthenticationWelcomeMessagePage />} />
                    <Route path="/auth/account-deactivated" element={<AuthenticationAccountDeactivatedPage />} />
                    <Route path="/authentication/get-started" element={<AuthenticationGetStartedPage />} />
                </Route>
            </Route>
            <Route path="error/*" element={<ErrorsRouting />} />
            <Route path="auth/*" element={<AuthPage />} />
            <Route path="*" element={<Navigate to="/error/404" />} />
        </Routes>
    );
};

export { AppRoutingSetup };
