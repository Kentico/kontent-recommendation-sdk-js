import { IHttpService, ISDKInfo } from '@kentico/kontent-core';
import { map } from 'rxjs/operators';

import { IRecommendationClientConfig } from '../config/recommendation-client-config.interface';
import { IRecommendedContentItemContract } from '../contracts';
import { recommendItemsMapper, baseMapper } from '../mappers';
import { IRecommendationQueryConfig, IRecommendItemsQueryOptions, ITrackConversionQueryOptions, ITrackPortionQueryOptions, ITrackVisitQueryOptions } from '../models';
import { RecommendItemsResponse, EmptyResponse } from '../responses';
import { BaseRecommendationQueryService } from './base-recommendation-service.class';
import { Observable } from 'rxjs';

export class RecommendationQueryService extends BaseRecommendationQueryService {
    constructor(
        protected config: IRecommendationClientConfig,
        protected httpService: IHttpService,
        protected sdkInfo: ISDKInfo
    ) {
        super(config, httpService, sdkInfo);
    }

    recommendItems(
        url: string,
        data: IRecommendItemsQueryOptions,
        config: IRecommendationQueryConfig
    ): Observable<RecommendItemsResponse> {
        return this.postResponse<IRecommendedContentItemContract[]>(url, data, {}, config).pipe(
            map((response) => {
                return recommendItemsMapper.recommendItemsResponse(response);
            })
        );
    }

    trackVisit(
        url: string,
        data: ITrackVisitQueryOptions,
        config: IRecommendationQueryConfig
    ): Observable<EmptyResponse> {
        return this.postResponse<void>(url, data, {}, config).pipe(
            map((response) => {
                return baseMapper.getEmptyResponse(response);
            })
        );
    }

    trackConversion(
        url: string,
        data: ITrackConversionQueryOptions,
        config: IRecommendationQueryConfig
    ): Observable<EmptyResponse> {
        return this.postResponse<void>(url, data, {}, config).pipe(
            map((response) => {
                return baseMapper.getEmptyResponse(response);
            })
        );
    }

    trackPortion(
        url: string,
        data: ITrackPortionQueryOptions,
        config: IRecommendationQueryConfig
    ): Observable<EmptyResponse> {
        return this.postResponse<void>(url, data, {}, config).pipe(
            map((response) => {
                return baseMapper.getEmptyResponse(response);
            })
        );
    }

    trackVisitor(
        url: string,
        config: IRecommendationQueryConfig
    ): Observable<EmptyResponse> {
        return this.postResponse<void>(url, {}, {}, config).pipe(
            map((response) => {
                return baseMapper.getEmptyResponse(response);
            })
        );
    }
}
