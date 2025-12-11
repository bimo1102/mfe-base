import { Container } from '@/components/container';
import { Toolbar } from '@/layouts/mains/toolbar';
import { safeRemoteLoader } from '@/utils/safeRemoteLoader';
import { Fragment, lazy, Suspense } from 'react';
const MainDarkSidebarPage = () => {
    const ServiceCategoryModule = lazy(safeRemoteLoader(() => import('GeneralReactModule/service-category')));
    return (
        <Fragment>
            {/* <Container>
                <Toolbar>
                    <ToolbarHeading title="Dashboard" description="Central Hub for Personal Customization" />
                    <ToolbarActions></ToolbarActions>
                </Toolbar>
            </Container>

            <Container>
                <MainLightSidebarContent />
            </Container> */}
            <Suspense fallback="Loading service category...">
                <Container>
                    <Toolbar>
                        <ServiceCategoryModule />
                    </Toolbar>
                </Container>
            </Suspense>
        </Fragment>
    );
};

export { MainDarkSidebarPage };
