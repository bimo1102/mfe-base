import { MenuBadge, MenuIcon, MenuItem, MenuLink, MenuSub, MenuTitle } from '@/components/menu';
import { I18N_LANGUAGES, TLanguage, useLanguage } from '@/i18n';
import KeenIconsComponent from '@share-system-fe/react/components/common/icons/keenicons';
import clsx from 'clsx';
import { FormattedMessage } from 'react-intl';

interface IDropdownUserLanguagesProps {
    menuItemRef: any;
}

const DropdownUserLanguages = ({ menuItemRef }: IDropdownUserLanguagesProps) => {
    const { currentLanguage, changeLanguage } = useLanguage();
    const { isRTL } = useLanguage();

    const handleLanguage = (lang: TLanguage) => {
        changeLanguage(lang);

        if (menuItemRef.current) {
            menuItemRef.current.hide(); // Call the closeMenu method to hide the submenu
        }
    };

    const buildItems = () => {
        return I18N_LANGUAGES.map((item, index) => (
            <MenuItem
                key={index}
                className={clsx(item.code === currentLanguage.code && 'active')}
                onClick={() => {
                    handleLanguage(item);
                }}>
                <MenuLink className="h-10">
                    <MenuIcon>
                        <img src={item.flag} className="inline-block size-4 rounded-full" alt={item.label} />
                    </MenuIcon>
                    <MenuTitle>{item.label}</MenuTitle>
                    {item.code === currentLanguage.code && (
                        <MenuBadge>
                            <KeenIconsComponent className="text-success text-base" type="duotone" name="check-circle" />
                        </MenuBadge>
                    )}
                </MenuLink>
            </MenuItem>
        ));
    };

    return (
        <MenuItem
            toggle="dropdown"
            trigger="hover"
            dropdownProps={{
                placement: isRTL() ? 'left-start' : 'right-start',
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: isRTL() ? [-10, 0] : [10, 0], // [skid, distance]
                        },
                    },
                ],
            }}>
            <MenuLink>
                <MenuIcon>
                    <KeenIconsComponent className="" type="duotone" name="icon" />
                </MenuIcon>
                <MenuTitle>
                    <FormattedMessage id="USER.MENU.LANGUAGE" />
                </MenuTitle>
                <div className="flex items-center gap-1.5 rounded-md border border-gray-300 text-gray-600 p-1.5 text-2xs font-medium shrink-0">
                    {currentLanguage.label}
                    <img
                        src={currentLanguage.flag}
                        className="inline-block size-3.5 rounded-full"
                        alt="{currentLanguage.label}"
                    />
                </div>
            </MenuLink>
            <MenuSub className="menu-default light:border-gray-300 w-[190px]">{buildItems()}</MenuSub>
        </MenuItem>
    );
};

export { DropdownUserLanguages };
