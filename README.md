# Kontent Recommender Javascript SDK

> Javascript SDK for the [Kontent Recommendation SDK](https://developer.kenticocloud.com/v1/reference#content-management-api-v2). Helps you manage content in your [Kentico Kontent](https://kontent.ai/) projects. Supports both `node.js` and `browsers`.

## Getting started

To get started, you'll first need to have access to your [Kentico Kontent](https://kontent.ai/) project where you need to enable Content management API and generate `access token` that will be used to authenticate all requests made by this library.

### Installation

This library has a peer dependency on `rxjs`which means you need to install it as well. You install it using `npm` or use it directly in browser using one of the `cdn` bundles. 

#### npm

```
npm i rxjs --save
npm i todo --save
```

### Making the first request

The following code example shows how to create new content item in your Kentico Kontent project.

```javascript
todo
```

If you are using `UMD` bundles directly in browsers, you can find this library under `KontentRecommender` global variable. 


### Configuration

The `ManagementClient` contains several configuration options:

```javascript
const client = new ManagementClient({
    // configuration options
});
```

| Option  | Default | Description |
| ------------- | ------------- | ------------- |
| `projectId` | N/A | **Required** - Id of your Kentico Kontent project  |
| `apiKey` | N/A  | **Required** - Content management API Token  |
| `baseUrl` | https://manage.kontent.ai/v2/projects  | Base URL of REST api. Can be useful if you are using custom proxy or for testing purposes |
| `retryStrategy` | undefined |  Retry strategy configuration. If not set, default strategy is used. |
| `httpService` | HttpService  | Used to inject implementation of `IHttpService` used to make HTTP request across network. Can also be useful for testing purposes by returning specified responses. |

### Testing

> If you want to mock http responses, it is possible to use [external implementation of configurable Http Service](../core/README.md#testing) as a part of the [client configuration](#configuration).

### Troubleshooting & feedback

If you have any issues or want to share your feedback, please feel free to [create an issue](https://github.com/Enngage/recommender-js-sdk/issues/new/choose) in this GitHub repository.

### Contributions

Contributions are welcomed. If you have an idea of what you would like to implement, let us know and lets discuss details of your PR.
