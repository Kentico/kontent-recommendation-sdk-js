import { BaseKontentError } from '@kentico/kontent-core';

export namespace SharedModels {

    export interface IBaseModel<TContract> {
        _raw: TContract;
    }

    export class RecommendationBaseError extends BaseKontentError {

        constructor(data:
            {
                message: string;
                requestId: string;
                errorCode: number;
                specificCode: number;
                originalError: any;
            }
        ) {
            super(data);
        }

    }
}
