import { IBaseResponse } from '@kentico/kontent-core';

import { BaseResponses } from '../responses';

export abstract class BaseMapper {

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
}

