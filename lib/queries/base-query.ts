import { IQueryParameter, Parameters, IHeader } from '@kentico/kontent-core';

import { IRecommendationClientConfig } from '../config/recommendation-client-config.interface';
import { RecommendationApiEndpoints, recommendationApiEndpoints, IRecommendationQueryConfig } from '../models';
import { BaseResponses } from '../responses';
import { RecommendationQueryService } from '../services';
import { Observable } from 'rxjs';

export abstract class BaseQuery<TResponse extends BaseResponses.IRecommendationResponse> {
    protected readonly queryConfig: IRecommendationQueryConfig = {
        headers: []
    };
    protected readonly parameters: IQueryParameter[] = [];
    protected readonly apiEndpoints: RecommendationApiEndpoints = recommendationApiEndpoints;
    protected customUrl?: string;

    constructor(
        protected config: IRecommendationClientConfig,
        protected queryService: RecommendationQueryService
    ) {}

    /**
     * Gets url for this query
     */
    getUrl(): string {
        // use custom URL if user specified it
        if (this.customUrl) {
            return this.customUrl;
        }

        // use original url
        return this.queryService.getFullUrl(this.getAction(), this.getParameters(), false);
    }

    /**
     * Gets Promise to resolve this query
     */
    toPromise(): Promise<TResponse> {
        return this.toObservable().toPromise();
    }

    /**
     * Adds header to request
     * @param header Header to add
     */
    withHeader(header: IHeader): this {
        this.queryConfig.headers.push(header);
        return this;
    }

     /**
     * Adds headers to request
     * @param headers Headers to add
     */
    withHeaders(headers: IHeader[]): this {
        this.queryConfig.headers.push(...headers);
        return this;
    }

    /**
     * Gets array of currently set headers
     */
    getHeaders(): IHeader[] {
        return this.queryConfig.headers;
    }

    /**
     * Sets custom query parmeter that will be added to URL
     * @param name Parameter name
     * @param value Parameter value
     */
    withCustomParameter(name: string, value: string): this {
        this.parameters.push(new Parameters.CustomParameter(name, value));
        return this;
    }

    /**
     * Overrides default url resolver and resolves this query with a custom one
     * @param url Custom url to resolve query
     */
    withUrl(url: string): this {
        this.customUrl = url;
        return this;
    }

    /**
     * Gets parameters assigned to this query
     */
    getParameters(): IQueryParameter[] {
        return this.parameters;
    }

    /**
     * Gets Observable to resolve this query
     */
    abstract toObservable(): Observable<TResponse>;

    /**
     * Gets action for this query
     */
    protected abstract getAction(): string;
}
