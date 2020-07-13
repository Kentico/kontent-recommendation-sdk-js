import { Observable } from 'rxjs';

import { IRecommenderClientConfig } from '../../config';
import { IRecommendItemsQueryOptions } from '../../models';
import { RecommendItemsResponse } from '../../responses';
import { RecommenderQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class RecommendItemsQuery extends BaseQuery<RecommendItemsResponse> {

  constructor(
    protected config: IRecommenderClientConfig,
    protected queryService: RecommenderQueryService,
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
