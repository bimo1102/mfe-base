import { Fragment } from 'react';

import { Container } from '@/components/container';
import { PageNavbar } from '@/pages/account';
import { Toolbar, ToolbarActions, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/partials/toolbar';

import { useLayout } from '@/providers';
import { AccountNotificationsContent } from '.';

const AccountNotificationsPage = () => {
    const { currentLayout } = useLayout();

    return (
        <Fragment>
            <PageNavbar />

            {currentLayout?.name === 'main-layout' && (
                <Container>
                    <Toolbar>
                        <ToolbarHeading>
                            <ToolbarPageTitle />
                            <ToolbarDescription>Central Hub for Personal Customization</ToolbarDescription>
                        </ToolbarHeading>
                        <ToolbarActions>
                            <a href="#" className="btn btn-sm btn-light">
                                Privacy Settings
                            </a>
                        </ToolbarActions>
                    </Toolbar>
                </Container>
            )}

            <Container>
                <AccountNotificationsContent />
            </Container>
        </Fragment>
    );
};

export { AccountNotificationsPage };
