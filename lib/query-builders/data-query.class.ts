import { IRecommendationClientConfig } from '../config';
import { RecommendationQueryService } from '../services';

export class DataQuery<TResult, TData> {

    constructor(
        protected config: IRecommendationClientConfig,
        protected queryService: RecommendationQueryService,
        protected buildResult: (
            config: IRecommendationClientConfig,
            queryService: RecommendationQueryService,
            data: TData) => TResult
    ) {
    }

    /**
     * Gets query with data
     * @param data Data for query
     */
    withData(data: TData): TResult {
        return this.buildResult(this.config, this.queryService, data);
    }
}
