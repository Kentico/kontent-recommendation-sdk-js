import { IRecommendationClient, RecommendationClient } from '../../lib';
import { TestHttpService } from '@kentico/kontent-core';

export const testProjectId: string = 'b259760f-81c5-013a-05e7-69efb4b954e5';

// tslint:disable-next-line:max-line-length
export const testProjectIdApiKey: string = '';

export function useLiveTesting(): boolean {
    if (this.testProjectIdApiKey) {
        return true;
    }
    return false;
}

export const liveClient: IRecommendationClient = new RecommendationClient({
    projectId: testProjectId,
    // tslint:disable-next-line:max-line-length
    apiKey: testProjectIdApiKey
});

export const getTestClient = (projectId: string, apiKey: string) => new RecommendationClient({
    apiKey: apiKey,
    projectId: projectId
});

export const getTestClientWithInvalidApiKey: IRecommendationClient = new RecommendationClient({
    projectId: testProjectId,
    // tslint:disable-next-line:max-line-length
    apiKey: 'xxx'
});

export const getTestClientWithError: (errorJson: any) => IRecommendationClient = (errorJson: any) => new RecommendationClient({
    projectId: testProjectId,
    apiKey: 'xxx',
    httpService: new TestHttpService({
        fakeResponseJson: undefined,
        throwError: true,
        errorJson: errorJson,
        isAxiosError: true
    })
});

export const getTestClientWithJson: (json: any) => IRecommendationClient = (json: any) => new RecommendationClient({
    projectId: testProjectId,
    apiKey: 'xxx',
    httpService: new TestHttpService({
        fakeResponseJson: json,
        throwError: false
    })
});
