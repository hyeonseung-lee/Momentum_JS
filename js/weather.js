const weatherSpanc = document.querySelector(".js-weather");

const API_KEY = "8161b9f105b2ffb0d4a583439cf49fe1";
const COORDS = 'coords';

function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        ).then(function(response){
            return response.json();
        }).then(function(json){
            const temperature = json.main.temp;
            const place = json.name;
            const weather = json.weather[0]["main"];
            const weatherDescription = json.weather[0]["description"];
            weatherSpanc.innerHTML = `<a> ${temperature} @ ${place} </a> <br/> <a> ${weather} @ ${weatherDescription} </a>`;

        });
    
    // then 을 쓰면, fetch의 실행이 끝나고 다음 함수가 실행된다.

}


function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log('cant access geo location')
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    } else {
        const paresedCoords = JSON.parse(loadedCords);
        getWeather(paresedCoords.latitude, paresedCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init()