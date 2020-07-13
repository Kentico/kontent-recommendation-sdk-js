import { Observable } from 'rxjs';

import { IRecommenderClientConfig } from '../../config';
import { ITrackVisitorQueryOptions } from '../../models';
import { EmptyResponse } from '../../responses';
import { RecommenderQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class TrackVisitorQuery extends BaseQuery<EmptyResponse> {
    constructor(
        protected config: IRecommenderClientConfig,
        protected queryService: RecommenderQueryService,
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
