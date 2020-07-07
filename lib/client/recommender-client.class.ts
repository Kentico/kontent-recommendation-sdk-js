import { HttpService } from '@kentico/kontent-core';

import { IRecommenderClientConfig } from '../config';
import {
    ListContentTypesQuery} from '../queries';
import { sdkInfo } from '../sdk-info.generated';
import { RecommenderQueryService, IMappingService, MappingService } from '../services';
import { IRecommenderClient } from './irecommender-client.interface';

export class RecommenderClient implements IRecommenderClient {
    private readonly queryService: RecommenderQueryService;

    public readonly mappingService: IMappingService = new MappingService();

    constructor(protected readonly config: IRecommenderClientConfig) {
        this.queryService = new RecommenderQueryService(
            config,
            config.httpService ? config.httpService : new HttpService(),
            {
                host: sdkInfo.host,
                name: sdkInfo.name,
                version: sdkInfo.version
            }
        );
    }

    listContentTypes(): ListContentTypesQuery {
        return new ListContentTypesQuery(this.config, this.queryService);
    }
}
