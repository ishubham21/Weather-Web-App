if("serviceWorker" in navigator) {
    //regestering service worker
    //service worker is a file which is used to catch data
    navigator.serviceWorker.register("./service-worker.js")
    .then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
    })
    .catch(err => {
        //registration failed 
        console.log('ServiceWorker registration failed: ', err);
    });
} 
else {
    console.log('No service-worker on this browser');
}
