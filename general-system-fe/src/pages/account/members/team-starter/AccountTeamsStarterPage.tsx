import { Fragment } from 'react';

import { Container } from '@/components/container';
import { PageNavbar } from '@/pages/account';
import { Toolbar, ToolbarActions, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/partials/toolbar';

import { useLayout } from '@/providers';
import { AccountTeamsStarterContent } from '.';

const AccountTeamsStarterPage = () => {
    const { currentLayout } = useLayout();

    return (
        <Fragment>
            <PageNavbar />

            {currentLayout?.name === 'main-layout' && (
                <Container>
                    <Toolbar>
                        <ToolbarHeading>
                            <ToolbarPageTitle />
                            <ToolbarDescription>Efficient team organization with real-time updates</ToolbarDescription>
                        </ToolbarHeading>
                        <ToolbarActions>
                            <a href="#" className="btn btn-sm btn-light">
                                Plans
                            </a>
                        </ToolbarActions>
                    </Toolbar>
                </Container>
            )}

            <Container>
                <AccountTeamsStarterContent />
            </Container>
        </Fragment>
    );
};

export { AccountTeamsStarterPage };
