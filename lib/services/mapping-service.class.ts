import { RecommendItemsMapper } from '../mappers';


export interface IMappingService {
    recommendItemsMapper: RecommendItemsMapper;
}

export class MappingService implements IMappingService {
    public recommendItemsMapper: RecommendItemsMapper;

    constructor() {
        this.recommendItemsMapper = new RecommendItemsMapper();
    }
}
