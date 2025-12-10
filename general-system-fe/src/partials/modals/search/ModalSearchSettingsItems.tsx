import KeenIconsComponent from '@share-system-fe/react/components/common/icons/keenicons';
import { IModalSearchSettingsItem } from './types';

export interface IModalSearchSettingsItemsProps {
    items: IModalSearchSettingsItem[];
}

const ModalSearchSettingsItems = ({ items }: IModalSearchSettingsItemsProps) => {
    return (
        <>
            {items.map((item, index) => (
                <div className="menu-item" key={index}>
                    <a href="#" className="menu-link">
                        <span className="menu-icon">
                            <KeenIconsComponent className="" type="duotone" name={item.icon} />
                        </span>
                        <span className="menu-title">{item.info}</span>
                    </a>
                </div>
            ))}
        </>
    );
};

export { ModalSearchSettingsItems };
