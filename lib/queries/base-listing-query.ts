import { IRecommenderClientConfig } from '../config/imanagement-client-config.interface';
import { BaseResponses } from '../responses';
import { RecommenderQueryService } from '../services/recommender-query-service.class';
import { BaseQuery } from './base-query';

export abstract class BaseListingQuery<
    TResponse extends BaseResponses.IContentManagementListResponse,
    TAllResponse extends BaseResponses.IContentManagementListAllResponse
> extends BaseQuery<TResponse> {
    protected readonly xContinuationHeaderName: string = 'x-continuation';

    constructor(protected config: IRecommenderClientConfig, protected queryService: RecommenderQueryService) {
        super(config, queryService);
    }

    /**
     * Sets the 'x-continuation' header value. This can be used for fetching next pages.
     * @param token Value from continuation_token property
     */
    xContinuationToken(token: string): this {
        this.queryConfig.headers.push({
            header: this.xContinuationHeaderName,
            value: token
        });
        return this;
    }
}
