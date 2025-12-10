import { toAbsoluteUrl } from '@/utils';
import KeenIconsComponent from '@share-system-fe/react/components/common/icons/keenicons';
import { Link } from 'react-router';
import { useMainLayout } from '../';

const HeaderLogo = () => {
    const { setMobileSidebarOpen, setMobileMegaMenuOpen, megaMenuEnabled } = useMainLayout();

    const handleSidebarOpen = () => {
        setMobileSidebarOpen(true);
    };

    const handleMegaMenuOpen = () => {
        setMobileMegaMenuOpen(true);
    };

    return (
        <div className="flex gap-1 lg:hidden items-center -ms-1">
            <Link to="/" className="shrink-0">
                <img src={toAbsoluteUrl('/media/app/mini-logo.svg')} className="max-h-[25px] w-full" alt="mini-logo" />
            </Link>

            <div className="flex items-center">
                <button type="button" className="btn btn-icon btn-light btn-clear btn-sm" onClick={handleSidebarOpen}>
                    <KeenIconsComponent className="" type="duotone" name="menu" />
                </button>

                {megaMenuEnabled && (
                    <button
                        type="button"
                        className="btn btn-icon btn-light btn-clear btn-sm"
                        onClick={handleMegaMenuOpen}>
                        <KeenIconsComponent className="" type="duotone" name="burger-menu-2" />
                    </button>
                )}
            </div>
        </div>
    );
};

export { HeaderLogo };
