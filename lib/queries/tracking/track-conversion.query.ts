import { Observable } from 'rxjs';

import { IRecommenderClientConfig } from '../../config';
import { ITrackConversionQueryOptions } from '../../models';
import { EmptyResponse } from '../../responses';
import { RecommenderQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class TrackConversionQuery extends BaseQuery<EmptyResponse> {
    constructor(
        protected config: IRecommenderClientConfig,
        protected queryService: RecommenderQueryService,
        public data: ITrackConversionQueryOptions
    ) {
        super(config, queryService);
    }

    toObservable(): Observable<EmptyResponse> {
        return this.queryService.trackConversion(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.trackConversion(this.data.visitId, this.data.contentItemId);
    }
}
