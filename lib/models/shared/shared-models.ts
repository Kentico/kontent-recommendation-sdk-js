import { BaseKontentError } from '@kentico/kontent-core';

export namespace SharedModels {

    export interface IBaseModel<TContract> {
        _raw: TContract;
    }

    export class Pagination {
        constructor(
            public continuationToken: string | null,
            public nextPage: string | null
        ) { }
    }

    export class RecommenderBaseError extends BaseKontentError {


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
