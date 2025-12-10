import {
    Dialog,
    DialogBody,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { useViewport } from '@/hooks';
import { useLanguage } from '@/i18n';
import KeenIconsComponent from '@share-system-fe/react/components/common/icons/keenicons';
import { forwardRef, useEffect, useState } from 'react';
import { ModalSearchEmpty } from './';
interface IModalSearchProps {
    open: boolean;
    onOpenChange: () => void;
}

const ModalSearch = forwardRef<HTMLDivElement, IModalSearchProps>(({ open, onOpenChange }, ref) => {
    const [scrollableHeight, setScrollableHeight] = useState<number>(0);
    const [viewportHeight] = useViewport();
    const { isRTL } = useLanguage();
    const offset = 300;
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        setScrollableHeight(viewportHeight - offset);
    }, [viewportHeight]);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                className="max-w-[600px] top-[5%] lg:top-[15%] translate-y-0 [&>button]:top-8 [&>button]:end-7"
                ref={ref}>
                <DialogHeader className="py-4">
                    <DialogTitle></DialogTitle>
                    <DialogDescription></DialogDescription>
                    <KeenIconsComponent className="text-gray-700 text-xl" type="duotone" name="magnifier" />

                    <input
                        type="text"
                        name="query"
                        value={searchInput}
                        className="input px-0 border-none bg-transparent shadow-none ms-2.5"
                        onChange={(e) => setSearchInput(e.target.value)}
                        placeholder="Tap to start search"
                    />
                </DialogHeader>
                <DialogBody className="p-0 pb-5">
                    <ModalSearchEmpty />
                </DialogBody>
            </DialogContent>
        </Dialog>
    );
});

export { ModalSearch };
