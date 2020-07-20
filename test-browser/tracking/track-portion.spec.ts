import { EmptyResponse } from '../../lib';
import { getTestClientWithJson, liveClient } from '../setup';
import * as fakeResponse from './fake-empty-response.json';

describe('Track portion', () => {
    let response: EmptyResponse;

    beforeAll((done) => {
        getTestClientWithJson(fakeResponse)
            .trackPortion()
            .withData({
                visitId: 'x',
                contentItemId: 'movie',
                portionPercentage: 9
            })
            .toObservable()
            .subscribe((result) => {
                response = result;
                done();
            });
    });

    it(`url should be correct`, () => {
        const url = liveClient
            .trackPortion()
            .withData({
                visitId: 'x',
                contentItemId: 'movie',
                portionPercentage: 9
            })
            .getUrl();

        expect(url).toEqual(
            `https://recommender-api-v2.azurewebsites.net/api/v2/track/portion`
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
