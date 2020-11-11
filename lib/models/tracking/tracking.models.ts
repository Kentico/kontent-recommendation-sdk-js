export interface ITrackVisitQueryOptions {
    visitId: string;
    currentItemCodename: string;
}

export interface ITrackConversionQueryOptions {
    visitId: string;
    currentItemCodename: string;
}

export interface ITrackPortionQueryOptions {
    visitId: string;
    currentItemCodename: string;
    portionPercentage?: number;
}

export interface ITrackVisitorQueryOptions {
    visitId: string;
}

export interface ITrackVisitorLocationDetailsOptions {
    city?: string;
    country?: string;
    timezone?: string;
}

export interface ITrackVisitorVisitorOptions {
    ip?: string;
    referer?: string;
    location?: ITrackVisitorLocationDetailsOptions;
    custom?: any;
}


export interface ITrackVisitorQueryOptions {
    visitId: string;
    visitor: ITrackVisitorVisitorOptions;
}
