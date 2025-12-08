import { Fragment } from 'react';
import { Link } from 'react-router';

import { Container } from '@/components/container';
import { PageNavbar } from '@/pages/account';
import { Toolbar, ToolbarActions, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/partials/toolbar';

import { useLayout } from '@/providers';
import { AccountOverviewContent } from '.';

const AccountOverviewPage = () => {
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
                            <Link to="/account/security/overview" className="btn btn-sm btn-light">
                                Security History
                            </Link>
                        </ToolbarActions>
                    </Toolbar>
                </Container>
            )}

            <Container>
                <AccountOverviewContent />
            </Container>
        </Fragment>
    );
};

export { AccountOverviewPage };
