import { IBaseResponse } from '@kentico/kontent-core';

import { BaseMapper } from './base-mapper';
import { IRecommendedContentItemContract } from '../contracts';
import { RecommendItemsResponse } from '../responses';
import { RecommendedContentItem } from '../models';

export class RecommendItemsMapper extends BaseMapper {

    recommendItemsResponse(response: IBaseResponse<IRecommendedContentItemContract[]>): RecommendItemsResponse {
        return new RecommendItemsResponse(
            super.mapResponseDebug(response),
            response.data,
            response.data.map(m => new RecommendedContentItem({
                _raw: m,
                codename: m.codename
            })),
        );
    }

}

export const recommendItemsMapper = new RecommendItemsMapper();
