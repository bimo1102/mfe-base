// import React, { Suspense } from 'react';
// import ContextProvider from '@share-system-fe/react/providers/context';
// import { FederationAppInitProps } from '@share-system-fe/types/federation.type';
// import ReduxProvider from '@shareds/providers/redux';
// import { AppRoutes } from '@routing/Routes';
// import { LayoutProvider, LayoutSplashScreen } from '@app/layout/core';

// type Props = Partial<FederationAppInitProps>;

// const App: React.FC<Props> = (props): React.ReactNode => {
//     return (
//         <ReduxProvider>
//             <ContextProvider prefixClass={process.env.PREFIX_CLASS} moduleName={process.env.MODULE_NAME} {...props}>
//                 <LayoutProvider>
//                     <Suspense fallback={<LayoutSplashScreen />}>
//                         {/* <AuthInit> */}
//                         <AppRoutes />
//                         {/* </AuthInit> */}
//                     </Suspense>
//                 </LayoutProvider>
//             </ContextProvider>
//         </ReduxProvider>
//     );
// };

// export default App;
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSettings } from '@/providers/SettingsProvider';
import { AppRouting } from '@/routing';
import { PathnameProvider } from '@/providers';
import { Toaster } from '@/components/ui/sonner';

const App = () => {
    const { settings } = useSettings();

    useEffect(() => {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add(settings.themeMode);
    }, [settings]);

    return (
        <BrowserRouter basename={process.env.BASE_URL}>
            <PathnameProvider>
                <AppRouting />
            </PathnameProvider>
            <Toaster />
        </BrowserRouter>
    );
};

export { App };
