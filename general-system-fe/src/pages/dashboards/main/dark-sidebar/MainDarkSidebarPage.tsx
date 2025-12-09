import { Container } from '@/components/container';
import { Toolbar, ToolbarActions, ToolbarHeading } from '@/layouts/mains/toolbar';
import { Fragment } from 'react';
import { MainLightSidebarContent } from '../light-sidebar';

const MainDarkSidebarPage = () => {
    return (
        <Fragment>
            <Container>
                <Toolbar>
                    <ToolbarHeading title="Dashboard" description="Central Hub for Personal Customization" />
                    <ToolbarActions></ToolbarActions>
                </Toolbar>
            </Container>

            <Container>
                <MainLightSidebarContent />
            </Container>
        </Fragment>
    );
};

export { MainDarkSidebarPage };
