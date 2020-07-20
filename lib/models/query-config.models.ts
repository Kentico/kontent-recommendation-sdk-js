import { HttpResponseType, IHeader } from '@kentico/kontent-core';

export interface IRecommendationQueryConfig {
    headers: IHeader[];
}

export interface IRecommendationInternalQueryConfig {
    responseType?: HttpResponseType;
}
