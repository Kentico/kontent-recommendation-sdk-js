import { EmptyResponse, TrackConversionQuery, SharedModels } from '../../lib';
import { getTestClientWithError } from '../setup';
import * as recommendationErrorJson from './recommendation-error.json';

describe('Recommendation error', () => {
    let response: EmptyResponse;
    let query: TrackConversionQuery;
    let responseError: SharedModels.RecommendationBaseError | any;

    beforeAll((done) => {
        query = getTestClientWithError(recommendationErrorJson)
            .trackConversion()
            .withData({
                visitId: 'x',
                currentItemCodename: 'movie'
            });

            query.toObservable()
            .subscribe((result) => {
                response = result;
                done();
            }, (error) => {
                responseError = error;
                done();
            });
    });

    it(`error should be set & mapped`, () => {
        expect(responseError).toEqual(jasmine.any(SharedModels.RecommendationBaseError));

        if (responseError instanceof SharedModels.RecommendationBaseError) {
            expect(responseError.traceId).toEqual(recommendationErrorJson.traceId);
            expect(responseError.type).toEqual(recommendationErrorJson.type);
            expect(responseError.status).toEqual(recommendationErrorJson.status);
            expect(responseError.instance).toEqual(recommendationErrorJson.instance);
            expect(responseError.errors).toEqual(recommendationErrorJson.errors);
            expect(responseError.detail).toEqual(recommendationErrorJson.detail);

        }

    });
});
