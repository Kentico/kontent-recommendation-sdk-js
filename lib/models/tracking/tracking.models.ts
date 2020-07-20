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
