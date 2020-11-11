import { IRecommendedContentItemContract } from '../../contracts';
import { SharedModels } from '../shared/shared-models';

export class RecommendedContentItem implements SharedModels.IBaseModel<IRecommendedContentItemContract> {
    public codename: string;
    public _raw: IRecommendedContentItemContract;

    constructor(data: { codename: string; _raw: IRecommendedContentItemContract }) {
        this.codename = data.codename;
        this._raw = data._raw;
    }
}

export interface IRecommendationSettingsOptions {
    filter?: string;
    booster?: string;
    scenario?: string;
}

export interface IRecommendItemsQueryOptions {
    visitId: string;
    currentItemCodename: string;
    responseLimit: number;
    requestedTypeCodename: string;
    recommendationSettings?: IRecommendationSettingsOptions;
}
