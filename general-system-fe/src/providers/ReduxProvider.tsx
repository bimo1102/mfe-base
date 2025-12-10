import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';

type Props = { children: React.ReactNode };

export const ReduxProvider: React.FC<Props> = ({ children }) => {
    const [hostStore, setHostStore] = useState<any>(null);

    useEffect(() => {
        import('GeneralApplication/store')
            .then(async ({ storeReady }) => {
                const store = await storeReady;
                setHostStore(store);
            })
            .catch((error) => {
                console.error('Failed to load store from host:', error);
            });
    }, []);

    return (
        <Spin
            spinning={!hostStore}
            size="large"
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
            {hostStore && <Provider store={hostStore}>{children}</Provider>}
        </Spin>
    );
};
