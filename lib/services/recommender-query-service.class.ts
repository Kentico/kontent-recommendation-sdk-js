import { IHttpService, ISDKInfo } from '@kentico/kontent-core';
import { map } from 'rxjs/operators';

import { IRecommenderClientConfig } from '../config/imanagement-client-config.interface';
import { IRecommendedContentItemContract } from '../contracts';
import { recommendItemsMapper, baseMapper } from '../mappers';
import { IRecommenderQueryConfig, IRecommendItemsQueryOptions } from '../models';
import { RecommendItemsResponse, EmptyResponse } from '../responses';
import { BaseContentManagementQueryService } from './base-recommender-service.class';
import { Observable } from 'rxjs';

export class RecommenderQueryService extends BaseContentManagementQueryService {
    constructor(
        protected config: IRecommenderClientConfig,
        protected httpService: IHttpService,
        protected sdkInfo: ISDKInfo
    ) {
        super(config, httpService, sdkInfo);
    }

    recommendItems(
        url: string,
        data: IRecommendItemsQueryOptions,
        config: IRecommenderQueryConfig
    ): Observable<RecommendItemsResponse> {
        return this.postResponse<IRecommendedContentItemContract[]>(url, data, {}, config).pipe(
            map((response) => {
                return recommendItemsMapper.recommendItemsResponse(response);
            })
        );
    }

    trackVisit(
        url: string,
        config: IRecommenderQueryConfig
    ): Observable<EmptyResponse> {
        return this.postResponse<void>(url, {}, {}, config).pipe(
            map((response) => {
                return baseMapper.getEmptyResponse(response);
            })
        );
    }

    trackConversion(
        url: string,
        config: IRecommenderQueryConfig
    ): Observable<EmptyResponse> {
        return this.postResponse<void>(url, {}, {}, config).pipe(
            map((response) => {
                return baseMapper.getEmptyResponse(response);
            })
        );
    }

    trackPortion(
        url: string,
        config: IRecommenderQueryConfig
    ): Observable<EmptyResponse> {
        return this.postResponse<void>(url, {}, {}, config).pipe(
            map((response) => {
                return baseMapper.getEmptyResponse(response);
            })
        );
    }

    trackVisitor(
        url: string,
        config: IRecommenderQueryConfig
    ): Observable<EmptyResponse> {
        return this.postResponse<void>(url, {}, {}, config).pipe(
            map((response) => {
                return baseMapper.getEmptyResponse(response);
            })
        );
    }
}
