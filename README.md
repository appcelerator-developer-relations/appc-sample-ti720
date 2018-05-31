# Sample app for Titianum SDK 7.2.0

This sample is for showing how to let users opt out from Analytics, following the GDPR laws

## Analytics opt-out

Using `Ti.Analytics`  you can let users opt out of your app. This is demonstrated in the index controller. For this you can use the `Ti.Analytics.getOptedOut()` method.

Opting the user out is done with the related setter. `Ti.Analytics.setOptedOut(true)`. Opting in again of course replaces `true` with `false`.

How to implement this is demonstrated in this sample app.

When the user has opted-out, no analytics events will be send to the server.
