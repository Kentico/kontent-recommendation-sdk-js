import { BaseResponses } from '../base-responses';

export class EmptyResponse extends BaseResponses.BaseRecommenderResponse<void, void> {
    constructor(
        debug: BaseResponses.IRecommenderResponseDebug,
    ) {
        super(debug, undefined, undefined);
    }
}
