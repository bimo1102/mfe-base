import { Fragment } from 'react';
import { Link } from 'react-router';

import { Container } from '@/components/container';
import { PageNavbar } from '@/pages/account';
import { Toolbar, ToolbarActions, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/partials/toolbar';

import { useLayout } from '@/providers';
import { AccountImportMembersContent } from '.';

const AccountImportMembersPage = () => {
    const { currentLayout } = useLayout();

    return (
        <Fragment>
            <PageNavbar />

            {currentLayout?.name === 'main-layout' && (
                <Container>
                    <Toolbar>
                        <ToolbarHeading>
                            <ToolbarPageTitle />
                            <ToolbarDescription>Overview of all team members and roles.</ToolbarDescription>
                        </ToolbarHeading>
                        <ToolbarActions>
                            <Link to="#" className="btn btn-sm btn-light">
                                Go to Teams
                            </Link>
                        </ToolbarActions>
                    </Toolbar>
                </Container>
            )}

            <Container>
                <AccountImportMembersContent />
            </Container>
        </Fragment>
    );
};

export { AccountImportMembersPage };
