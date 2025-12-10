import { AuthProvider } from '@/auth/providers/JWTProvider';
import {
    LayoutProvider,
    LoadersProvider,
    MenusProvider,
    ReduxProvider,
    SettingsProvider,
    TranslationProvider,
} from '@/providers';
// import ContextProvider from '@share-system-fe/react/providers/context';
import { PropsWithChildren } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';

// type ProvidersWrapperProps = PropsWithChildren<Partial<FederationAppInitProps>>;
const queryClient = new QueryClient();

// const ProvidersWrapper = ({ children, ...props }: ProvidersWrapperProps) => {
const ProvidersWrapper = ({ children }: PropsWithChildren) => {
    return (
        <ReduxProvider>
            {/* <ContextProvider prefixClass={process.env.PREFIX_CLASS} moduleName={process.env.MODULE_NAME} {...props}> */}
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    <SettingsProvider>
                        <TranslationProvider>
                            <HelmetProvider>
                                <LayoutProvider>
                                    <LoadersProvider>
                                        <MenusProvider>{children}</MenusProvider>
                                    </LoadersProvider>
                                </LayoutProvider>
                            </HelmetProvider>
                        </TranslationProvider>
                    </SettingsProvider>
                </AuthProvider>
            </QueryClientProvider>
            {/* </ContextProvider> */}
        </ReduxProvider>
    );
};

export { ProvidersWrapper };
