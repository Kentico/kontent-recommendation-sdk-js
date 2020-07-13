import { Observable } from 'rxjs';

import { IRecommenderClientConfig } from '../../config';
import { ITrackPortionQueryOptions } from '../../models';
import { EmptyResponse } from '../../responses';
import { RecommenderQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class TrackPortionQuery extends BaseQuery<EmptyResponse> {
    constructor(
        protected config: IRecommenderClientConfig,
        protected queryService: RecommenderQueryService,
        public data: ITrackPortionQueryOptions
    ) {
        super(config, queryService);
    }

    toObservable(): Observable<EmptyResponse> {
        return this.queryService.trackPortion(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.trackPortion(this.data.visitId, this.data.contentItemId, this.data.portionPercentage);
    }
}
