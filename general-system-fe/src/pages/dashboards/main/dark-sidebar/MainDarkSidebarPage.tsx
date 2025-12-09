import { Container } from '@/components/container';
import { Toolbar, ToolbarActions, ToolbarHeading } from '@/layouts/mains/toolbar';
import { Fragment, useState } from 'react';
import { MainLightSidebarContent } from '../light-sidebar';

import { addDays } from 'date-fns';
import { DateRange } from 'react-day-picker';

const MainDarkSidebarPage = () => {
    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(2025, 0, 20),
        to: addDays(new Date(2025, 0, 20), 20),
    });

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
