//TODO: 1. Find way to use URLS from a file in pattern

// Issue is I can fetch the URLs from the internet. But the onBeforeRequest event
// triggers before the fetch is complete. I might try getting the URLs downloaded when the extension is installed
// and then getting them from a file, instead of waiting for them to be fetched.
// But this still might break, if the event will trigure before the data in the file is loaded into a variable here.
// I need to find a way to make the event wait for the parameter to be resolved, before it tries to use it.


// const dl = require('downloadjs');
// download(getList(), "test", "text/plain");

const URLListLocation = "https://raw.githubusercontent.com/AidanSpeakss/AntiRickRoll/main/rickrollurls.txt"
async function getList() {
    const response = await fetch(URLListLocation, {});
    const text = await response.text()
    console.log(text.split(','));
    return text.split(',');
}

function logURL(requestDetails) {
    console.log("Loading: " + requestDetails.url);
}

browser.webRequest.onBeforeRequest.addListener(
    logURL,
    {urls: "fix me, todo"}
);