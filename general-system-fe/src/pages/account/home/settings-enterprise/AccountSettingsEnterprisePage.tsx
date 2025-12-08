import { Fragment } from 'react';

import { Container } from '@/components/container';
import { PageNavbar } from '@/pages/account';
import { Toolbar, ToolbarActions, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/partials/toolbar';

import { useLayout } from '@/providers';
import { AccountSettingsEnterpriseContent } from '.';

const AccountSettingsEnterprisePage = () => {
    const { currentLayout } = useLayout();

    return (
        <Fragment>
            <PageNavbar />

            {currentLayout?.name === 'main-layout' && (
                <Container>
                    <Toolbar>
                        <ToolbarHeading>
                            <ToolbarPageTitle />
                            <ToolbarDescription>Tailored Tools for Business Scalability</ToolbarDescription>
                        </ToolbarHeading>
                        <ToolbarActions>
                            <a href="#" className="btn btn-sm btn-light">
                                Public Profile
                            </a>
                            <a href="#" className="btn btn-sm btn-primary">
                                My profile
                            </a>
                        </ToolbarActions>
                    </Toolbar>
                </Container>
            )}
            <Container>
                <AccountSettingsEnterpriseContent />
            </Container>
        </Fragment>
    );
};

export { AccountSettingsEnterprisePage };
