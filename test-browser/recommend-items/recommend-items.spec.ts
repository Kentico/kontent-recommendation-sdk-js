import { RecommendItemsResponse } from '../../lib';
import * as fakeResponse from './recommend-items-fake-ok-response.json';
import { liveClient, getTestClientWithJson } from '../setup';

describe('Recommend items', () => {
    let response: RecommendItemsResponse;

    beforeAll((done) => {
        getTestClientWithJson(fakeResponse).recommendItems()
            .withData({
                visitId: 'x',
                currentItemCodename: 'warrior',
                requestedTypeCodename: 'movie',
                responseLimit: 5
            })
            .toObservable()
            .subscribe(result => {
                response = result;
                done();
            });
    });

    it(`url should be correct`, () => {
        const url = liveClient.recommendItems().withData({} as any).getUrl();

        expect(url).toEqual(`https://recommender-api-v2.azurewebsites.net/api/v2/recommend/items`);
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

        const originalData = fakeResponse.map(m => m.codename);

        for (const recommendedItem of response.data) {
            expect(originalData).toContain(recommendedItem.codename);
        }
    });
});

