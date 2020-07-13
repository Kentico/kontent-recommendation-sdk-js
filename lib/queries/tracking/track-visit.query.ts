import { Observable } from 'rxjs';

import { IRecommenderClientConfig } from '../../config';
import { ITrackVisitQueryOptions } from '../../models';
import { EmptyResponse } from '../../responses';
import { RecommenderQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class TrackVisitQuery extends BaseQuery<EmptyResponse> {
    constructor(
        protected config: IRecommenderClientConfig,
        protected queryService: RecommenderQueryService,
        public data: ITrackVisitQueryOptions
    ) {
        super(config, queryService);
    }

    toObservable(): Observable<EmptyResponse> {
        return this.queryService.trackVisit(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.trackVisit(this.data.visitId, this.data.contentItemId);
    }
}
