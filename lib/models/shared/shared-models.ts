
export namespace SharedModels {

    export interface IBaseModel<TContract> {
        _raw: TContract;
    }

    export class RecommendationBaseError {

        public errors: any;
        public type?: string;
        public status?: number;
        public detail?: string;
        public instance?: string;
        public traceId: string;

        constructor(data:
            {
                 errors: any;
                 type?: string;
                 status?: number;
                 detail?: string;
                 instance?: string;
                 traceId: string;
            }
        ) {
            this.errors = data.errors;
            this.type = data.type;
            this.status = data.status;
            this.detail = data.detail;
            this.instance = data.instance;
            this.traceId = data.traceId;
        }
    }
}
