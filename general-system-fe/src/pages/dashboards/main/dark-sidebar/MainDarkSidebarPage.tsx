import { Container } from '@/components/container';
import { Toolbar } from '@/layouts/mains/toolbar';
import React, { Fragment, Suspense } from 'react';
const MainDarkSidebarPage = () => {
    const ServiceCategoryModule = React.lazy(() => import('GeneralReactModule/service-category'));
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
