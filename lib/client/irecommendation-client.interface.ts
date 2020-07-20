import { IRecommendItemsQueryOptions, ITrackVisitQueryOptions, ITrackConversionQueryOptions, ITrackPortionQueryOptions, ITrackVisitorQueryOptions } from '../models';
import { DataQuery, RecommendItemsQuery, TrackVisitQuery, TrackConversionQuery, TrackPortionQuery, TrackVisitorQuery } from '../queries';
import { IMappingService } from '../services';

export interface IRecommendationClient {
    mappingService: IMappingService;

    recommendItems(): DataQuery<RecommendItemsQuery, IRecommendItemsQueryOptions>;
    trackVisit(): DataQuery<TrackVisitQuery, ITrackVisitQueryOptions>;
    trackConversion(): DataQuery<TrackConversionQuery, ITrackConversionQueryOptions>;
    trackPortion(): DataQuery<TrackPortionQuery, ITrackPortionQueryOptions>;
    trackVisitor(): DataQuery<TrackVisitorQuery, ITrackVisitorQueryOptions>;
}
