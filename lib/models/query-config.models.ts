import { HttpResponseType, IHeader } from '@kentico/kontent-core';

export interface IRecommenderQueryConfig {
    headers: IHeader[];
}

export interface IRecommenderInternalQueryConfig {
    responseType?: HttpResponseType;
}
