import { IBaseResponse } from '@kentico/kontent-core';

export namespace BaseResponses {
    export interface IRecommendationResponseDebug {
        response: IBaseResponse<any>;
    }

    export interface IRecommendationResponse {
        data: any;
        rawData: any;
        debug: IRecommendationResponseDebug;
    }

    export abstract class BaseRecommendationResponse<TRawData extends any, TData extends any>
        implements IRecommendationResponse {
        constructor(public debug: IRecommendationResponseDebug, public rawData: TRawData, public data: TData) {}
    }
}
