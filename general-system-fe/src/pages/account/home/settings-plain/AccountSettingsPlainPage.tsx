import { Container } from '@/components/container';
import { Fragment } from 'react';

import { PageNavbar } from '@/pages/account';
import { Toolbar, ToolbarActions, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/partials/toolbar';

import { useLayout } from '@/providers';
import { AccountSettingsPlainContent } from '.';

const AccountSettingsPlainPage = () => {
    const { currentLayout } = useLayout();

    return (
        <Fragment>
            <PageNavbar />

            {currentLayout?.name === 'main-layout' && (
                <Container>
                    <Toolbar>
                        <ToolbarHeading>
                            <ToolbarPageTitle />
                            <ToolbarDescription>Clean, Efficient User Experience</ToolbarDescription>
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
                <AccountSettingsPlainContent />
            </Container>
        </Fragment>
    );
};

export { AccountSettingsPlainPage };
