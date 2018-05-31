$.getView().open();

// check the status
function checkStatus() {
	const optedOut = Ti.Analytics.getOptedOut();

	// send status to logs
	Ti.API.info('status: ' + optedOut);
	if (optedOut === true) {
		// optedOut is true here
		$.resetClass($.status, ['status_disabled']);
		$.resetClass($.toggleButton, ['button_enable']);
	} else {
		// optedOut is false or not defined, both reflect an optIn
		$.resetClass($.status, ['status_enabled']);
		$.resetClass($.toggleButton, ['button_disable']);
	}

	const result = Ti.Analytics.featureEvent('isActive', { active: optedOut });
	Ti.API.info('analytics result: ' + result);
}

function handleToggleOptoutButton() {
	const status = Ti.Analytics.getOptedOut();

	// inverse boolean value
	Ti.Analytics.setOptedOut(!status);
	checkStatus();
}

// start app with checking status
checkStatus();
