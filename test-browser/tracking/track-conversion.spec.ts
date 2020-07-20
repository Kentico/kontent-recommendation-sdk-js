import { EmptyResponse, TrackConversionQuery } from '../../lib';
import { getTestClientWithJson } from '../setup';
import * as fakeResponse from './fake-empty-response.json';

describe('Track conversion', () => {
    let response: EmptyResponse;
    let query: TrackConversionQuery;

    beforeAll((done) => {
        query = getTestClientWithJson(fakeResponse)
            .trackConversion()
            .withData({
                visitId: 'x',
                currentItemCodename: 'movie'
            });

            query.toObservable()
            .subscribe((result) => {
                response = result;
                done();
            });
    });

    it(`url should be correct`, () => {
        const url = query.getUrl();

        expect(url).toEqual(
            `https://recommender-api-v2.azurewebsites.net/api/v2/track/conversion`
        );
    });

    it(`request data should be correct`, () => {
        const data = query.data;

        expect(data).toEqual({
            visitId: 'x',
            currentItemCodename: 'movie'
        });
    });

    it(`response should be instance of EmptyResponse class`, () => {
        expect(response).toEqual(jasmine.any(EmptyResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain no data`, () => {
        expect(response.data).toBeUndefined();
    });
});
