import { HttpService } from '@kentico/kontent-core';

import { IRecommenderClientConfig } from '../config';
import { IRecommendItemsQueryOptions } from '../models';
import { DataQuery, RecommendItemsQuery } from '../queries';
import { sdkInfo } from '../sdk-info.generated';
import { IMappingService, MappingService, RecommenderQueryService } from '../services';
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

    recommendItems(): DataQuery<RecommendItemsQuery, IRecommendItemsQueryOptions> {
        return new DataQuery(this.config, this.queryService, (xConfig, xService, data) => {
            return new RecommendItemsQuery(xConfig, xService, data);
        });
    }
}
