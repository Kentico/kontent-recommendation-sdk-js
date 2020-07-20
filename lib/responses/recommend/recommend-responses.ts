import { IRecommendedContentItemContract } from '../../contracts';
import { RecommendedContentItem } from '../../models';
import { BaseResponses } from '../base-responses';

export class RecommendItemsResponse extends BaseResponses.BaseRecommendationResponse<
    IRecommendedContentItemContract[],
    RecommendedContentItem[]
> {
    constructor(
        debug: BaseResponses.IRecommendationResponseDebug,
        rawData: IRecommendedContentItemContract[],
        data: RecommendedContentItem[]
    ) {
        super(debug, rawData, data);
    }
}
