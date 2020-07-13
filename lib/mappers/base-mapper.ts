import { IBaseResponse } from '@kentico/kontent-core';

import { BaseResponses, EmptyResponse } from '../responses';

export class BaseMapper {

    mapResponseDebug(
        baseResponse: IBaseResponse<any>
    ): BaseResponses.IRecommenderResponseDebug {
        if (!baseResponse) {
            throw Error(`Cannot map debug model from the response`);
        }

        return {
            response: baseResponse
        };
    }

    getEmptyResponse(baseResponse: IBaseResponse<void>): EmptyResponse {
        return new EmptyResponse(baseResponse);
    }
}

export const baseMapper = new BaseMapper();

