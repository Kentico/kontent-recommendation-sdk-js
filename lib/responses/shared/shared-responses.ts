import { BaseResponses } from '../base-responses';

export class EmptyResponse extends BaseResponses.BaseRecommendationResponse<void, void> {
    constructor(debug: BaseResponses.IRecommendationResponseDebug) {
        super(debug, undefined, undefined);
    }
}

export interface IRecommendationErrorResponseRaw {
    errors: any;
    type?: string;
    status?: number;
    detail?: string;
    instance?: string;
    traceId: string;
}
