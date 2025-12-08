import { Container } from '@/components/container';
import { NavbarMenu } from '@/partials/menu/NavbarMenu';
import { Navbar } from '@/partials/navbar';
import { useLayout, useMenus } from '@/providers';

const PageNavbar = () => {
    const { getMenuConfig } = useMenus();
    const { currentLayout } = useLayout();
    const menuConfig = getMenuConfig('primary');
    const accountMenuConfig = menuConfig?.['3']?.children;

    if (accountMenuConfig && currentLayout?.name === 'main-layout') {
        return (
            <Navbar>
                <Container>
                    <NavbarMenu items={accountMenuConfig} />
                </Container>
            </Navbar>
        );
    } else {
        return <></>;
    }
};

export { PageNavbar };
