$.getView().open();

// check the status
function checkStatus(){
	var optOut = Ti.Analytics.getOptedOut();

	// send status to logs
	Ti.API.info('status: ' + optOut);
	if (optOut === true){
		// optOut is true here
		$.resetClass($.status, ['status_disabled']);
		$.resetClass($.toggleButton, ['button_enable']);
	} else {
		// optOut is false or not defined, both reflect an optIn
		$.resetClass($.status, ['status_enabled']);
		$.resetClass($.toggleButton, ['button_disable']);
	}
}

function handleToggleOptoutButton(){
	var status = Ti.Analytics.getOptedOut();

	// inverse boolean value
	Ti.Analytics.setOptedOut(!status);
	checkStatus();
}

// start app with checking status
checkStatus();
