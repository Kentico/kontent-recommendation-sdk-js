import { HttpService } from '@kentico/kontent-core';

import { IRecommendationClientConfig as IRecommendationClientConfig } from '../config';
import { IRecommendItemsQueryOptions, ITrackVisitQueryOptions, ITrackVisitorQueryOptions, ITrackPortionQueryOptions, ITrackConversionQueryOptions } from '../models';
import { DataQuery, RecommendItemsQuery, TrackVisitQuery, TrackConversionQuery, TrackPortionQuery, TrackVisitorQuery } from '../queries';
import { sdkInfo } from '../sdk-info.generated';
import { IMappingService, MappingService, RecommendationQueryService } from '../services';
import { IRecommendationClient } from './irecommendation-client.interface';

export class RecommendationClient implements IRecommendationClient {
    private readonly queryService: RecommendationQueryService;

    public readonly mappingService: IMappingService = new MappingService();

    constructor(protected readonly config: IRecommendationClientConfig) {
        this.queryService = new RecommendationQueryService(
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

    trackVisit(): DataQuery<TrackVisitQuery, ITrackVisitQueryOptions> {
        return new DataQuery(this.config, this.queryService, (xConfig, xService, data) => {
            return new TrackVisitQuery(xConfig, xService, data);
        });
    }

    trackConversion(): DataQuery<TrackConversionQuery, ITrackConversionQueryOptions> {
        return new DataQuery(this.config, this.queryService, (xConfig, xService, data) => {
            return new TrackConversionQuery(xConfig, xService, data);
        });
    }

    trackPortion(): DataQuery<TrackPortionQuery, ITrackPortionQueryOptions> {
        return new DataQuery(this.config, this.queryService, (xConfig, xService, data) => {
            return new TrackPortionQuery(xConfig, xService, data);
        });
    }

    trackVisitor(): DataQuery<TrackVisitorQuery, ITrackVisitorQueryOptions> {
        return new DataQuery(this.config, this.queryService, (xConfig, xService, data) => {
            return new TrackVisitorQuery(xConfig, xService, data);
        });
    }
}
