import { Container } from '@/components/container';
import { Toolbar, ToolbarActions, ToolbarHeading } from '@/layouts/mains/toolbar';
import { PageNavbar } from '@/pages/account';
import { useLayout } from '@/providers';
import { Fragment } from 'react';
import { Link } from 'react-router';
import { AccountPlansContent } from '.';

const AccountPlansPage = () => {
    const { currentLayout } = useLayout();

    return (
        <Fragment>
            <PageNavbar />

            {currentLayout?.name === 'main-layout' && (
                <Container>
                    <Toolbar>
                        <ToolbarHeading title="Plans" description="Central Hub for Personal Customization" />
                        <ToolbarActions>
                            <Link to="#" className="btn btn-sm btn-light">
                                View Billing
                            </Link>
                        </ToolbarActions>
                    </Toolbar>
                </Container>
            )}

            <Container>
                <AccountPlansContent />
            </Container>
        </Fragment>
    );
};

export { AccountPlansPage };
