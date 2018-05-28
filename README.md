# Sample app for TiSDK 7.2.0.GA

This sample is for showing how to let users opt out from Analytics, following the GPDR laws, and how to let users give consent using ti.admob

## Analytics opt-out

Using `Ti.Analytics`  you can let users opt out of your app. This is demonstrated in the index controller. For this you can use the `Ti.Analytics.getOptedOut()` method.

Opting the user out is done with the related setter. `Ti.Analytics.setOptedOut(true)`. Opting in again of course replaces `true` with `false`.

How to implement this is demonstrated in this sample app.
