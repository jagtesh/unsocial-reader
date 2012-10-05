function convertReaderLinks() {
	chrome.windows.getCurrent(function(t){
		console.log(t);
	})
}

convertReaderLinks();