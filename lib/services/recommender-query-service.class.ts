import { IHttpService, ISDKInfo } from '@kentico/kontent-core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IRecommenderClientConfig } from '../config/imanagement-client-config.interface';
import { TaxonomyContracts } from '../contracts';
import { taxonomyMappper } from '../mappers';
import { IRecommenderQueryConfig, TaxonomyModels } from '../models';
import { TaxonomyResponses } from '../responses';
import { BaseContentManagementQueryService } from './base-recommender-service.class';

export class RecommenderQueryService extends BaseContentManagementQueryService {
    constructor(
        protected config: IRecommenderClientConfig,
        protected httpService: IHttpService,
        protected sdkInfo: ISDKInfo
    ) {
        super(config, httpService, sdkInfo);
    }

    addTaxonomy(
        url: string,
        data: TaxonomyModels.IAddTaxonomyRequestModel,
        config: IRecommenderQueryConfig
    ): Observable<TaxonomyResponses.AddTaxonomyResponse> {
        return this.postResponse<TaxonomyContracts.IAddTaxonomyResponseContract>(url, data, {}, config).pipe(
            map((response) => {
                return taxonomyMappper.mapAddTaxonomyResponse(response);
            })
        );
    }

    listTaxonomies(
        url: string,
        config: IRecommenderQueryConfig
    ): Observable<TaxonomyResponses.TaxonomyListResponse> {
        return this.getResponse<TaxonomyContracts.ITaxonomyContract[]>(url, {}, config).pipe(
            map((response) => {
                return taxonomyMappper.mapListingTaxonomysResponse(response);
            })
        );
    }
}
