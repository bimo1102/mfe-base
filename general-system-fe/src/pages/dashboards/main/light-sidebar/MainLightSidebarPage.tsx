import { Container } from '@/components/container';
import { Toolbar, ToolbarActions, ToolbarHeading } from '@/layouts/mains/toolbar';
import { Fragment, useState } from 'react';
import { MainLightSidebarContent } from '.';

import { KeenIcon } from '@/components/keenicons';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { addDays, format } from 'date-fns';
import { DateRange } from 'react-day-picker';

const MainLightSidebarPage = () => {
    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(2025, 0, 20),
        to: addDays(new Date(2025, 0, 20), 20),
    });

    return (
        <Fragment>
            <Container>
                <Toolbar>
                    <ToolbarHeading title="Dashboard" description="Central Hub for Personal Customization" />
                    <ToolbarActions>
                        <Popover>
                            <PopoverTrigger asChild>
                                <button
                                    id="date"
                                    className={cn(
                                        'btn btn-sm btn-light data-[state=open]:bg-light-active',
                                        !date && 'text-gray-400'
                                    )}>
                                    <KeenIcon icon="calendar" className="me-0.5" />
                                    {date?.from ? (
                                        date.to ? (
                                            <>
                                                {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
                                            </>
                                        ) : (
                                            format(date.from, 'LLL dd, y')
                                        )
                                    ) : (
                                        <span>Pick a date range</span>
                                    )}
                                </button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="end">
                                <Calendar
                                    initialFocus
                                    mode="range"
                                    defaultMonth={date?.from}
                                    selected={date}
                                    onSelect={setDate}
                                    numberOfMonths={2}
                                />
                            </PopoverContent>
                        </Popover>
                    </ToolbarActions>
                </Toolbar>
            </Container>

            <Container>
                <MainLightSidebarContent />
            </Container>
        </Fragment>
    );
};

export { MainLightSidebarPage };
