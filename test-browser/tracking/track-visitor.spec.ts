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
                visitor: {
                    ip: 'y',
                    custom: 'c',
                    location: {
                        city: 'LA',
                        country: 'US',
                        timezone: 'PST'
                    },
                    referer: 'x'
                }
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
            `https://recommend.kontent.ai/api/v2/track/visitor`
        );
    });

    it(`request data should be correct`, () => {
        const data = query.data;

        expect(data).toEqual({
            visitId: 'x',
            visitor: {
                ip: 'y',
                custom: 'c',
                location: {
                    city: 'LA',
                    country: 'US',
                    timezone: 'PST'
                },
                referer: 'x'
            }
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
