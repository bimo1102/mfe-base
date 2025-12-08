import { Container } from '@/components/container';
import { PageNavbar } from '@/pages/account';
import { Toolbar, ToolbarActions, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/partials/toolbar';
import { Fragment } from 'react';

import { useLayout } from '@/providers';
import { AccountCompanyProfileContent } from '.';

const AccountCompanyProfilePage = () => {
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
                                Public Profile
                            </a>
                            <a href="#" className="btn btn-sm btn-primary">
                                Billing
                            </a>
                        </ToolbarActions>
                    </Toolbar>
                </Container>
            )}

            <Container>
                <AccountCompanyProfileContent />
            </Container>
        </Fragment>
    );
};

export { AccountCompanyProfilePage };
