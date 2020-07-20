import { EmptyResponse } from '../../lib';
import { getTestClientWithJson, liveClient } from '../setup';
import * as fakeResponse from './/fake-empty-response.json';

describe('Track visit', () => {
    let response: EmptyResponse;

    beforeAll((done) => {
        getTestClientWithJson(fakeResponse)
            .trackVisit()
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
            .trackVisit()
            .withData({
                visitId: 'x',
                contentItemId: 'movie'
            })
            .getUrl();

        expect(url).toEqual(
            `https://recommender-api-v2.azurewebsites.net/api/v2/track/visit`
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
