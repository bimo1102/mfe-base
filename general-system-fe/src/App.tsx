import { Toaster } from '@/components/ui/sonner';
import { PathnameProvider } from '@/providers';
import { useSettings } from '@/providers/SettingsProvider';
import { AppRouting } from '@/routing';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

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
