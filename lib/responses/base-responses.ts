import { IBaseResponse } from '@kentico/kontent-core';

export namespace BaseResponses {
    export interface IRecommenderResponseDebug {
        response: IBaseResponse<any>;
    }

    export interface IRecommenderResponse {
        data: any;
        rawData: any;
        debug: IRecommenderResponseDebug;
    }

    export abstract class BaseRecommenderResponse<TRawData extends any, TData extends any>
        implements IRecommenderResponse {
        constructor(public debug: IRecommenderResponseDebug, public rawData: TRawData, public data: TData) {}
    }
}
