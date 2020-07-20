[![npm version](https://badge.fury.io/js/%40kentico%2Fkontent-recommender.svg)](https://badge.fury.io/js/%40kentico%2Fkontent-recommender)
[![Build Status](https://api.travis-ci.com/Kentico/kontent-recommender-sdk-js.svg?branch=master)](https://travis-ci.com/Kentico/kontent-recommender-sdk-js)
[![CircleCI](https://circleci.com/gh/Kentico/kontent-recommender-sdk-js/tree/master.svg?style=svg)](https://circleci.com/gh/Kentico/kontent-recommender-sdk-js/tree/master)
[![Known Vulnerabilities](https://snyk.io/test/github/Kentico/kontent-recommender-sdk-js/badge.svg)](https://snyk.io/test/github/kentico/kontent-recommender-sdk-js)
[![GitHub license](https://img.shields.io/github/license/Kentico/kontent-recommender-sdk-js.svg)](https://github.com/Kentico/kontent-recommender-sdk-js)
![Gzip browser bundle](https://img.badgesize.io/https://cdn.jsdelivr.net/npm/@kentico/kontent-recommender/_bundles/kontent-recommender.browser.umd.min.js?compression=gzip)

# Kontent Recommender Javascript SDK

> Javascript SDK for the `Kontent Recommendation SDK`. Works in `node.js` and `browsers`.

## Getting started

To get started, you'll first need to have access to your [Kentico Kontent](https://kontent.ai/) project and setup recommendation.

### Installation

```
npm i rxjs --save
npm i @kentico/kontent-recommender --save
```

### API

#### Recommend Items 

```typescript
const client = new RecommenderClient({
    projectId: 'xxx',
    apiKey: 'yyy'
});

 await client.recommendItems()
    .withData({
        currentItemCodename: 'x',
        requestedTypeCodename: 'y',
        responseLimit: 5,
        visitId: 'z',
        recommendationSettings: {
            // settings configuration
        }
        }).toPromise();
```

#### Track Conversion 

```typescript
const client = new RecommenderClient({
    projectId: 'xxx',
    apiKey: 'yyy'
});

await client.trackConversion()
    .withData({
        visitId: 'z',
        currentItemCodename: 'x'
    }).toPromise();
```

#### Track Portion 

```typescript
const client = new RecommenderClient({
    projectId: 'xxx',
    apiKey: 'yyy'
});

await client.trackPortion()
    .withData({
        visitId: 'z',
        currentItemCodename: 'x',
        portionPercentage: 50
    }).toPromise();
```

#### Track Visit 

```typescript
const client = new RecommenderClient({
    projectId: 'xxx',
    apiKey: 'yyy'
});

await client.trackVisit()
    .withData({
        visitId: 'z',
        currentItemCodename: 'x',
    }).toPromise();
```

#### Track Visitor 

```typescript
const client = new RecommenderClient({
    projectId: 'xxx',
    apiKey: 'yyy'
});

await client.trackVisitor()
    .withData({
        visitId: 'z',
    }).toPromise();
```

If you are using `UMD` bundles directly in browsers, you can find this library under `KontentRecommender` global variable. 


### Configuration

The `RecommenderClient` contains several configuration options:

```typescript
const client = new RecommenderClient({
    // configuration options
});
```

| Option  | Default | Description |
| ------------- | ------------- | ------------- |
| `projectId` | N/A | **Required** - Id of your Kentico Kontent project  |
| `apiKey` | N/A  | **Required** - Recommendation API Token  |
| `baseUrl` | https://recommender-api-v2.azurewebsites.net/api/v2  | Base URL of REST api. Can be useful if you are using custom proxy or for testing purposes. |
| `retryStrategy` | undefined |  Retry strategy configuration. If not set, default strategy is used. |
| `httpService` | HttpService  | Used to inject implementation of `IHttpService` used to make HTTP request across network. Can also be useful for testing purposes by returning specified responses. |
| `isDeveloperMode` | false  | Enable to log extra details in console log|

### Troubleshooting & feedback

If you have any issues or want to share your feedback, please feel free to [create an issue](https://github.com/Enngage/recommender-js-sdk/issues/new/choose) in this GitHub repository.

### Contributions

Contributions are welcomed. If you have an idea of what you would like to implement, let us know and lets discuss details of your PR.

![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/kontent-recommender-sdk-js/master/packages/recommender?pixel)
