function doClick(e) {
	alert($.label.text);
}

$.getView().open();

function checkStatus(){
	var status = Ti.Analytics.getOptedOut();
	Ti.API.info('status: ' + status);
	if (status === true){
		$.resetClass($.status, ['status_disabled']);
		$.resetClass($.toggleButton, ['button_enable']);
	} else {
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
