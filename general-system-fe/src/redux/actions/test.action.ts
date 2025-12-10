import additionalInformationService from '@/services/auth.service';
import { mergeLoadingActions } from '@share-system-fe/react/providers/context/common.action';
import { KeyValueTypeIntModel } from '@share-system-fe/types/common.type';
import { Dispatch } from 'GeneralApplication/store';

export const additionalInformationGetById = (request: any) => async (dispatch: Dispatch) => {
    return mergeLoadingActions<{
        models?: any;
        statuses: Array<KeyValueTypeIntModel<any>>;
    }>({
        callType: 'additionalInformationDetail',
        dispatchRef: dispatch,
        callback: async () => {
            return await additionalInformationService.getByTicketId(request);
        },
    });
};
