import { IRecommendedContentItemContract } from '../../contracts';
import { RecommendedContentItem } from '../../models';
import { BaseResponses } from '../base-responses';

export class RecommendItemsResponse extends BaseResponses.BaseRecommenderResponse<
    IRecommendedContentItemContract[],
    RecommendedContentItem[]
> {
    constructor(
        debug: BaseResponses.IRecommenderResponseDebug,
        rawData: IRecommendedContentItemContract[],
        data: RecommendedContentItem[]
    ) {
        super(debug, rawData, data);
    }
}
