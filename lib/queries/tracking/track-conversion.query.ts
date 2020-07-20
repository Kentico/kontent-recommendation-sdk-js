import { Observable } from 'rxjs';

import { IRecommendationClientConfig } from '../../config';
import { ITrackConversionQueryOptions } from '../../models';
import { EmptyResponse } from '../../responses';
import { RecommendationQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class TrackConversionQuery extends BaseQuery<EmptyResponse> {
    constructor(
        protected config: IRecommendationClientConfig,
        protected queryService: RecommendationQueryService,
        public data: ITrackConversionQueryOptions
    ) {
        super(config, queryService);
    }

    toObservable(): Observable<EmptyResponse> {
        return this.queryService.trackConversion(this.getUrl(), this.data, this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.trackConversion();
    }
}
