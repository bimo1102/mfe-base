import KeenIconsComponent from '@share-system-fe/react/components/common/icons/keenicons';
import clsx from 'clsx';

import { toAbsoluteUrl } from '@/utils/Assets';

interface IAvatarProps {
    image?: string;
    fallback?: string;
    icon?: string;
    iconClass?: string;
    badgeClass?: string;
    className?: string;
    imageClass?: string;
}

const CommonAvatar = ({ image, fallback, icon, iconClass, badgeClass, className, imageClass }: IAvatarProps) => {
    return (
        <div className={clsx(className && className)}>
            {image && (
                <img src={toAbsoluteUrl(`/media/avatars/${image}`)} className={clsx(imageClass && imageClass)} alt="" />
            )}
            {!image && fallback && fallback}
            {!image && !fallback && icon && (
                <KeenIconsComponent className={clsx(iconClass && iconClass)} type="duotone" name={icon} />
            )}

            {badgeClass && <div className={clsx(badgeClass && badgeClass)}></div>}
        </div>
    );
};

export { CommonAvatar, type IAvatarProps };
