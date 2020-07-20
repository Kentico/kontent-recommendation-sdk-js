import { Observable } from 'rxjs';

import { IRecommendationClientConfig } from '../../config';
import { ITrackVisitorQueryOptions } from '../../models';
import { EmptyResponse } from '../../responses';
import { RecommendationQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class TrackVisitorQuery extends BaseQuery<EmptyResponse> {
    constructor(
        protected config: IRecommendationClientConfig,
        protected queryService: RecommendationQueryService,
        public data: ITrackVisitorQueryOptions
    ) {
        super(config, queryService);
    }

    toObservable(): Observable<EmptyResponse> {
        return this.queryService.trackVisitor(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.trackVisitor(this.data.visitId);
    }
}
