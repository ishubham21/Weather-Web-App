if("serviceWorker" in navigator) {
    //regestering service worker
    //service worker is a file which is used to catch data
    navigator.serviceWorker.register("/service-worker.js")
}