import { ListContentTypesQuery } from '../queries';
import { IMappingService } from '../services';

export interface IRecommenderClient {
    mappingService: IMappingService;

    listContentTypes(): ListContentTypesQuery;
}
