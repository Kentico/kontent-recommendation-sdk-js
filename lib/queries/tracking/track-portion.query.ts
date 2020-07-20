import { Observable } from 'rxjs';

import { IRecommendationClientConfig } from '../../config';
import { ITrackPortionQueryOptions } from '../../models';
import { EmptyResponse } from '../../responses';
import { RecommendationQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class TrackPortionQuery extends BaseQuery<EmptyResponse> {
    constructor(
        protected config: IRecommendationClientConfig,
        protected queryService: RecommendationQueryService,
        public data: ITrackPortionQueryOptions
    ) {
        super(config, queryService);
    }

    toObservable(): Observable<EmptyResponse> {
        return this.queryService.trackPortion(this.getUrl(), this.data, this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.trackPortion();
    }
}
