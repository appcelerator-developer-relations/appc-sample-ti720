/**
 * Constructor, to be called after the initial window opened.
 */
(function () {
	$.getView().open();
}());

// check the status
function checkStatus() {
	const isOptedOut = Ti.Analytics.optedOut;

	// send status to logs
	Ti.API.info('Status: ' + isOptedOut);
	if (isOptedOut === true) {
		// optedOut is true here
		$.resetClass($.status, [ 'status_disabled' ]);
		$.resetClass($.toggleButton, [ 'button_enable' ]);
	} else {
		// optedOut is false or not defined, both reflect an optIn
		$.resetClass($.status, [ 'status_enabled' ]);
		$.resetClass($.toggleButton, [ 'button_disable' ]);
	}

	const result = Ti.Analytics.featureEvent('isActive', { active: isOptedOut });
	Ti.API.info('Analytics result: ' + result);
}

function handleToggleOptOutButton() {
	const isOptedOut = Ti.Analytics.optedOut;

	// Toogle opt status
	Ti.Analytics.optedOut = !isOptedOut;
	checkStatus();
}
