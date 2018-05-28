function doClick(e) {
	alert($.label.text);
}

$.getView().open();

function checkStatus(){
	var status = Ti.Analytics.getOptedOut();
	Ti.API.info('status: ' + status);
	if (status === 1){
		$.resetClass($.status, ['status_disabled']);
	} else {
		$.resetClass($.status, ['status_enabled']);
	}
}

checkStatus();
