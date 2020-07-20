import { Observable } from 'rxjs';

import { IRecommendationClientConfig } from '../../config';
import { IRecommendItemsQueryOptions } from '../../models';
import { RecommendItemsResponse } from '../../responses';
import { RecommendationQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class RecommendItemsQuery extends BaseQuery<RecommendItemsResponse> {

  constructor(
    protected config: IRecommendationClientConfig,
    protected queryService: RecommendationQueryService,
    public data: IRecommendItemsQueryOptions,
  ) {
    super(config, queryService);
  }

  toObservable(): Observable<RecommendItemsResponse> {
    return this.queryService.recommendItems(this.getUrl(), this.data, this.queryConfig);
  }

  protected getAction(): string {
      return this.apiEndpoints.recommendItems();
  }
}
