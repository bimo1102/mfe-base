import { Container } from '@/components/container';
import { PageNavbar } from '@/pages/account';
import { Toolbar, ToolbarActions, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/partials/toolbar';
import { Fragment } from 'react';

import { useLayout } from '@/providers';
import { AccountSettingsSidebarContent } from '.';

const AccountSettingsSidebarPage = () => {
    const { currentLayout } = useLayout();

    return (
        <Fragment>
            <PageNavbar />

            {currentLayout?.name === 'main-layout' && (
                <Container>
                    <Toolbar>
                        <ToolbarHeading>
                            <ToolbarPageTitle />
                            <ToolbarDescription>Intuitive Access to In-Depth Customization</ToolbarDescription>
                        </ToolbarHeading>
                        <ToolbarActions>
                            <a href="#" className="btn btn-sm btn-light">
                                Public Profile
                            </a>
                            <a href="#" className="btn btn-sm btn-primary">
                                Get Started
                            </a>
                        </ToolbarActions>
                    </Toolbar>
                </Container>
            )}

            <Container>
                <AccountSettingsSidebarContent />
            </Container>
        </Fragment>
    );
};

export { AccountSettingsSidebarPage };
