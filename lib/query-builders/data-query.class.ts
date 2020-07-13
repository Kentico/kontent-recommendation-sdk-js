import { IRecommenderClientConfig } from '../config';
import { RecommenderQueryService } from '../services';

export class DataQuery<TResult, TData> {

    constructor(
        protected config: IRecommenderClientConfig,
        protected queryService: RecommenderQueryService,
        protected buildResult: (
            config: IRecommenderClientConfig,
            queryService: RecommenderQueryService,
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
