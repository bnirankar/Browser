const defaultFilters = [
	"*://*.ebay.com/*",
	"*://pune.craigslist.org//*",
	"*://*.gumtree.com/*",
	"*://*.gumtree.com/*",
	"*://oodle.com/*",
	"*://*.adpost.com/*",
	"*://*.hoobly.com/*",
	"*://*.salespider.com/*",
	"*://*.adsglobe.com/*",
	"*://*.yakaz.com/*",
	//add your custom sites here
]

chrome.webRequest.onBeforeRequest.addListener(         //calling google api that contain web request
	                                                   //that too before sending data
    function(details) { return { cancel: true }},     //3 argument 1)function callback that contains detailsthat we are sending
                                                      //cancel true will block all the reqest
    { urls: defaultFilters },         // filter that contails which sites we want to block
    ["blocking"]                      // pass blocking option array
)

//Nirankar Nath Singh