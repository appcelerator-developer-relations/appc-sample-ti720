$.getView().open();

// check the status
function checkStatus() {
	let optOut = Ti.Analytics.getOptedOut();

	// send status to logs
	Ti.API.info('status: ' + optOut);
	if (optOut === true) {
		// optOut is true here
		$.resetClass($.status, ['status_disabled']);
		$.resetClass($.toggleButton, ['button_enable']);
	} else {
		// optOut is false or not defined, both reflect an optIn
		$.resetClass($.status, ['status_enabled']);
		$.resetClass($.toggleButton, ['button_disable']);
	}

	let result = Ti.Analytics.featureEvent('isActive', {active: optOut});
	Ti.API.info('analytics result: ' + result);
}

function handleToggleOptoutButton() {
	let status = Ti.Analytics.getOptedOut();

	// inverse boolean value
	Ti.Analytics.setOptedOut(!status);
	checkStatus();
}

// start app with checking status
checkStatus();
