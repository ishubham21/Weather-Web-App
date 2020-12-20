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

function getWeather(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&apikey=946c870db6ca82b017d54a8aa62c349a`)
        .then(weatherObj => weatherObj.json())
        .then((weatherData) => {
            printData(weatherData.main.temp, weatherData.main.feels_like)
        })
        .catch((err) => {
            alert('Server error:', err)
        })
}

function printData(temp, feels_like){
    var tempR = document.querySelector('#tempR')
    tempR.innerHTML = `${temp}`

    var flsLike = document.querySelector('#feels-like')
    flsLike.innerHTML = ` ${feels_like} °C`
}

//calling weather of ajmer
getWeather('ajmer')