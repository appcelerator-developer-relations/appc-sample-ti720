# Sample App for Titianum SDK 7.2.0

This sample is for showing how to let users opt out from Analytics, following the GDPR compliance.

## Analytics opt-out

Using `Ti.Analytics`  you can let users opt out of your app. This is demonstrated in the index controller. 
For this you can use the `Ti.Analytics.optedOut` property (getter and setter). 

When the user has opted-out, no Analytics events will be send to the server.

## External Modules

There are many other components of app-development that should become GDPR-complient as well. Some modules that are
already GDPR complient:

- [Ti.Admob](https://github.com/appcelerator-modules/ti.admob)
- [Ti.Firebase](https://github.com/hansemannn/titanium-firebase) 

## Linting

This project uses the [`axway/env-alloy`](https://github.com/appcelerator/eslint-config-axway#alloy-apps) NPM plugin
to lint the source. You can lint the source yourself using `npm run lint`.

## Support

Make sure to reach out to the [Titanium Slack community](http://tislack.org) for questions or file a [JIRA ticket](https://jira.appcelerator.org)
if you run into any issues.

## Author

Rene Pot, Axway Appcelerator

## License

Apache 2