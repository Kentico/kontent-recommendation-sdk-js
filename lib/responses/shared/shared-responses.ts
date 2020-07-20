import { BaseResponses } from '../base-responses';

export class EmptyResponse extends BaseResponses.BaseRecommendationResponse<void, void> {
    constructor(
        debug: BaseResponses.IRecommendationResponseDebug,
    ) {
        super(debug, undefined, undefined);
    }
}
