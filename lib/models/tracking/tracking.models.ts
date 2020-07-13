export interface ITrackVisitQueryOptions {
    visitId: string;
    contentItemId: string;
}

export interface ITrackConversionQueryOptions {
    visitId: string;
    contentItemId: string;
}

export interface ITrackPortionQueryOptions {
    visitId: string;
    contentItemId: string;
    portionPercentage?: number;
}

export interface ITrackVisitorQueryOptions {
    visitId: string;
}
