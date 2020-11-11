import {
    headerHelper,
    IBaseResponse,
    IHeader,
    IHttpService,
    IQueryParameter,
    ISDKInfo,
    urlHelper,
} from '@kentico/kontent-core';
import { catchError } from 'rxjs/operators';
import { AxiosError } from 'axios';

import { IRecommendationClientConfig } from '../config/recommendation-client-config.interface';
import { IRecommendationInternalQueryConfig, IRecommendationQueryConfig, SharedModels } from '../models';
import { Observable, throwError } from 'rxjs';
import { IRecommendationErrorResponseRaw } from '../responses/shared/shared-responses';

export abstract class BaseRecommendationQueryService {

    /**
     * Default base url
     */
    private readonly defaultBaseCMUrl: string = 'https://recommend.kontent.ai/api/v2/';

    constructor(
        protected readonly config: IRecommendationClientConfig,
        protected readonly httpService: IHttpService,
        protected readonly sdkInfo: ISDKInfo
    ) {}

    /**
     * Gets url based on the action, query configuration and options (parameters)
     * @param action Action (= url part) that will be hit
     * @param options Query options
     * @param addSlash Indicates if slash is added to query
     */
    getFullUrl(action: string, options?: IQueryParameter[], addSlash: boolean = true): string {
        return urlHelper.addOptionsToUrl(this.getBaseUrl() + (addSlash ? '/' : '') + action, options);
    }

    /**
     * Gets proper set of headers for given request.
     * @param config Query config
     */
    getHeaders(config: IRecommendationQueryConfig): IHeader[] {
        const headers: IHeader[] = [
            // sdk tracking header
            headerHelper.getSdkIdHeader({
                host: this.sdkInfo.host,
                name: this.sdkInfo.name,
                version: this.sdkInfo.version
            }),
            // add authorization header
            this.getAuthorizationHeader(this.config.apiKey)
        ];

        // add query headers
        headers.push(...config.headers);

        return headers;
    }

    /**
     * Http PATCH response
     * @param url Url of request
     * @param config Query configuration
     */
    protected patchResponse<TRawData>(
        url: string,
        body: any,
        internalConfig: IRecommendationInternalQueryConfig,
        config: IRecommendationQueryConfig
    ): Observable<IBaseResponse<TRawData>> {

        return this.httpService
            .patch<TRawData>(
                {
                    url: url,
                    body: body
                },
                {
                    retryStrategy: this.config.retryStrategy,
                    headers: this.getHeaders(config),
                    logErrorToConsole: this.config.isDeveloperMode,
                    responseType:
                        internalConfig && internalConfig.responseType ? internalConfig.responseType : undefined
                }
            )
            .pipe(
                catchError((error: any) => {
                    return throwError(this.mapRecommendationError(error));
                }),
            );
    }

    /**
     * Http GET response
     * @param url Url of request
     * @param config Query configuration
     */
    protected getResponse<TRawData>(
        url: string,
        internalConfig: IRecommendationInternalQueryConfig,
        config: IRecommendationQueryConfig
    ): Observable<IBaseResponse<TRawData>> {

        return this.httpService
            .get<TRawData>(
                {
                    url: url,
                },
                {
                    retryStrategy: this.config.retryStrategy,
                    headers: this.getHeaders(config),
                    logErrorToConsole: this.config.isDeveloperMode,
                    responseType:
                        internalConfig && internalConfig.responseType ? internalConfig.responseType : undefined
                }
            )
            .pipe(
                catchError((error: any) => {
                    return throwError(this.mapRecommendationError(error));
                })
            );
    }

    /**
     * Http POST response
     * @param url Url of request
     * @param body Body of the request (names and values)
     * @param config Query configuration
     */
    protected postResponse<TRawData>(
        url: string,
        body: any,
        internalConfig: IRecommendationInternalQueryConfig,
        config: IRecommendationQueryConfig,
    ): Observable<IBaseResponse<TRawData>> {
        return this.httpService
            .post<TRawData>(
                {
                    url: url,
                    body: body,
                },
                {
                    retryStrategy: this.config.retryStrategy,
                    headers: this.getHeaders(config),
                    logErrorToConsole: this.config.isDeveloperMode,
                    responseType:
                        internalConfig && internalConfig.responseType ? internalConfig.responseType : undefined
                }
            )
            .pipe(
                catchError((error: any) => {
                    return throwError(this.mapRecommendationError(error));
                })
            );
    }

    /**
     * Http PUT response
     * @param url Url of request
     * @param body Body of the request (names and values)
     * @param config Query configuration
     */
    protected putResponse<TRawData>(
        url: string,
        body: any,
        internalConfig: IRecommendationInternalQueryConfig,
        config: IRecommendationQueryConfig
    ): Observable<IBaseResponse<TRawData>> {
        return this.httpService
            .put<TRawData>(
                {
                    url: url,
                    body: body,
                },
                {
                    retryStrategy: this.config.retryStrategy,
                    headers: this.getHeaders(config),
                    logErrorToConsole: this.config.isDeveloperMode,
                    responseType:
                        internalConfig && internalConfig.responseType ? internalConfig.responseType : undefined
                }
            )
            .pipe(
                catchError((error: any) => {
                    return throwError(this.mapRecommendationError(error));
                })
            );
    }

    /**
     * Http Delete response
     * @param url Url of request
     * @param body Body of the request (names and values)
     * @param config Query configuration
     */
    protected deleteResponse<TRawData>(
        url: string,
        internalConfig: IRecommendationInternalQueryConfig,
        config: IRecommendationQueryConfig,
    ): Observable<IBaseResponse<TRawData>> {

        return this.httpService
            .delete<TRawData>(
                {
                    url: url,
                },
                {
                    retryStrategy: this.config.retryStrategy,
                    headers: this.getHeaders(config),
                    logErrorToConsole: this.config.isDeveloperMode,
                    responseType:
                        internalConfig && internalConfig.responseType ? internalConfig.responseType : undefined
                }
            )
            .pipe(
                catchError((error: any) => {
                    return throwError(this.mapRecommendationError(error));
                })
            );
    }

    private mapRecommendationError(
        error: any
    ): SharedModels.RecommendationBaseError | any {
        let axiosError: AxiosError | undefined;

        if (error.error) {
            axiosError = error.error;
        } else {
            axiosError = error;
        }

        if (!axiosError || !axiosError.isAxiosError) {
            return error;
        }

        const recommendationErrorData = axiosError.response?.data as IRecommendationErrorResponseRaw;

        if (!recommendationErrorData || !recommendationErrorData.traceId) {
            return error;
        }

        return new SharedModels.RecommendationBaseError({
            traceId: recommendationErrorData.traceId,
            errors: recommendationErrorData.errors,
            detail: recommendationErrorData.detail,
            instance: recommendationErrorData.instance,
            status: recommendationErrorData.status,
            type: recommendationErrorData.type
        });
    }

    /**
     * Gets authorization header. This is used for 'preview' functionality
     */
    private getAuthorizationHeader(key?: string): IHeader {
        if (!key) {
            throw Error(`Cannot get authorization header because key is undefined`);
        }
        // authorization header required for preview mode
        return {
            header: 'authorization',
            value: `bearer ${key}`
        };
    }
    /**
     * Gets base URL of the request
     */
    private getBaseUrl(): string {
        return this.GetEndpointUrl();
    }

    /**
     * Gets API endpoint url
     */
    private GetEndpointUrl(): string {
        if (this.config.baseUrl) {
            return this.config.baseUrl;
        }
        return this.defaultBaseCMUrl;
    }
}
