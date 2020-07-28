import { RecommendItemsResponse, RecommendItemsQuery } from '../../lib';
import * as fakeResponse from './recommend-items-fake-ok-response.json';
import { getTestClientWithJson } from '../setup';

describe('Recommend items', () => {
    let response: RecommendItemsResponse;
    let query: RecommendItemsQuery;

    beforeAll((done) => {
        query = getTestClientWithJson(fakeResponse).recommendItems().withData({
            visitId: 'x',
            currentItemCodename: 'warrior',
            requestedTypeCodename: 'movie',
            responseLimit: 5
        });

        query.toObservable().subscribe((result) => {
            response = result;
            done();
        });
    });

    it(`url should be correct`, () => {
        const url = query.getUrl();

        expect(url).toEqual(`https://recommend.kontent.ai/api/v2/recommend/items`);
    });

    it(`request data should be correct`, () => {
        const data = query.data;

        expect(data).toEqual({
            visitId: 'x',
            currentItemCodename: 'warrior',
            requestedTypeCodename: 'movie',
            responseLimit: 5
        });
    });

    it(`response should be instance of RecommendItemsResponse class`, () => {
        expect(response).toEqual(jasmine.any(RecommendItemsResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
    });

    it(`data should be mapped`, () => {
        expect(response.data.length).toEqual(fakeResponse.length);

        const originalData = fakeResponse.map((m) => m.codename);

        for (const recommendedItem of response.data) {
            expect(originalData).toContain(recommendedItem.codename);
        }
    });
});
