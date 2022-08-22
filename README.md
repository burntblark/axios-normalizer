# Axios Normalizer
This is an utility library that works with the [Axios Library](https://axios-http.com/) to normalize responses returned by the library. It helps abstract the typical workflow needed after receiving a response from an axios call.

Axios wraps its responses around a `data` attribute of its response object (i.e `response.data`). This is slightly different when an error response is received. The errors here might be a desirable response from the resource you are consuming, however axios treats the errors as an exception. This library helps flattens the two scenarios.

## How to use this
Install via `npm install axios-normalizer --save` into your project.

At every call necessary to axios, use as depicted in the sample below.

```js
axiosInstance.post(
  url, data,
).then(normalizeResponse)
 .catch(normalizeError);
```
This ensures that the response you get matches the response dictated by the API you are consuming.

When an error occurs, it weighs between errors defined on the API and errors due to a network call. It only normalizes the errors it perceives to be from the API. Otherwise, it rethrows the error for the caller to handle programmatically.

> Please refer to the [axios documentation](https://axios-http.com/docs/intro) to learn how to use the library.
