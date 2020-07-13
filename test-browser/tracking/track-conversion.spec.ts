import { EmptyResponse } from '../../lib';
import { getTestClientWithJson, liveClient } from '../setup';
import * as fakeResponse from './fake-empty-response.json';

describe('Track conversion', () => {
    let response: EmptyResponse;

    beforeAll((done) => {
        getTestClientWithJson(fakeResponse)
            .trackConversion()
            .withData({
                visitId: 'x',
                contentItemId: 'movie'
            })
            .toObservable()
            .subscribe((result) => {
                response = result;
                done();
            });
    });

    it(`url should be correct`, () => {
        const url = liveClient
            .trackConversion()
            .withData({
                visitId: 'x',
                contentItemId: 'movie'
            })
            .getUrl();

        expect(url).toEqual(
            `https://recommender-api-v2.azurewebsites.net/api/v2/track/conversion?visitId=x&contentItemId=movie`
        );
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
