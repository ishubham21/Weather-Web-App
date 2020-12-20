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


//add to home screen button
let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can add to home screen
    addBtn.style.display = 'block';

    addBtn.addEventListener('click', (e) => {
        // hide our user interface that shows our A2HS button
        addBtn.style.display = 'none';
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('Installing...');
            } else {
                console.log('As you wish.');
            }
            deferredPrompt = null;
        });
    });
});

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