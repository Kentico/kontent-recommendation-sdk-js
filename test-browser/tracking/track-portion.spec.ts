import { EmptyResponse, TrackPortionQuery } from '../../lib';
import { getTestClientWithJson } from '../setup';
import * as fakeResponse from './fake-empty-response.json';

describe('Track portion', () => {
    let response: EmptyResponse;
    let query: TrackPortionQuery;

    beforeAll((done) => {
        query = getTestClientWithJson(fakeResponse)
            .trackPortion()
            .withData({
                visitId: 'x',
                currentItemCodename: 'movie',
                portionPercentage: 9
            });

        query
            .toObservable()
            .subscribe((result) => {
                response = result;
                done();
            });
    });

    it(`url should be correct`, () => {
        const url = query.getUrl();

        expect(url).toEqual(
            `https://recommend.kontent.ai/api/v2/track/portion`
        );
    });

    it(`request data should be correct`, () => {
        const data = query.data;

        expect(data).toEqual({
            visitId: 'x',
            currentItemCodename: 'movie',
            portionPercentage: 9
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
