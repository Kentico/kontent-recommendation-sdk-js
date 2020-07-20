import { EmptyResponse, TrackVisitorQuery } from '../../lib';
import { getTestClientWithJson } from '../setup';
import * as fakeResponse from './fake-empty-response.json';

describe('Track visitor', () => {
    let response: EmptyResponse;
    let query: TrackVisitorQuery;

    beforeAll((done) => {
        query = getTestClientWithJson(fakeResponse)
            .trackVisitor()
            .withData({
                visitId: 'x',
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
            `https://recommender-api-v2.azurewebsites.net/api/v2/track/visitor?visitId=x`
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
