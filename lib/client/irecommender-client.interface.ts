import { IRecommendItemsQueryOptions } from '../models';
import { DataQuery, RecommendItemsQuery } from '../queries';
import { IMappingService } from '../services';

export interface IRecommenderClient {
    mappingService: IMappingService;

    recommendItems(): DataQuery<RecommendItemsQuery, IRecommendItemsQueryOptions>;
}
