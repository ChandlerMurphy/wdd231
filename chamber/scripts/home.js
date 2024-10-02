// Toggle for Hambuger Menu vvv
const hamButton = document.querySelector("#hamburger");
const ul = document.querySelector("ul");

hamButton.addEventListener("click", () => {
    ul.classList.toggle("open-nav");
    hamButton.classList.toggle("open-ham");
});

// Footer Current Year vvv
const year = document.querySelector('#currentyear');
const today = new Date();
year.innerHTML = today.getFullYear();

// Footer Last Modified vvv
const lastUpdated = document.querySelector("#lastUpdated");
lastUpdated.innerHTML = (document.lastModified);

// Current Weather Card
const cardImg = document.querySelector("#card-img");
const cardTemp = document.querySelector("#card-temp");
const cardCloud = document.querySelector("#card-cloud");
const cardHigh = document.querySelector("#card-high");
const cardLow = document.querySelector("#card-low");
const cardHumidity = document.querySelector("#card-humidity");
const cardSunrise = document.querySelector("#card-sunrise");
const cardSunset = document.querySelector("#card-sunset");

const myKey = "eb728d14d471fc57db5219f45b06a8f2";
const myLat = "39.36";
const myLong = "-111.59";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

async function weatherapiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayWeatherCard(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayWeatherCard(data) {
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    cardImg.setAttribute("src", iconsrc);
    cardImg.setAttribute("alt", data.weather[0].description);
    cardTemp.innerHTML = `<b>${data.main.temp}&deg;</b> F`;
    cardCloud.innerHTML = `${data.weather[0].description}`;
    cardHigh.innerHTML = `High: ${data.main.temp_max}&deg;`;
    cardLow.innerHTML = `Low: ${data.main.temp_min}&deg;`;
    cardHumidity.textContent = `Humidity: ${data.main.humidity}%`;

    const sunrise = data.sys.sunrise;
    const sunset = data.sys.sunset;
    function createSunstamp(timeStamp) {
        const date = new Date(timeStamp * 1000);
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        const minutesString = minutes < 10 ? '0' + minutes : minutes;
        return `${hours}:${minutesString}${ampm}`;
    }
    const sunriseTime = createSunstamp(sunrise);
    const sunsetTime = createSunstamp(sunset);

    cardSunrise.textContent = `Sunrise: ${sunriseTime}`;
    cardSunset.textContent = `Sunset: ${sunsetTime}`;
}

weatherapiFetch();

// Weather Forecast Card
    // Variables for the Latitude and Longitude were created previously and do not need to be made again
const forecasturl = `api.openweathermap.org/data/2.5/forecast/daily?lat=${myLat}&lon=${myLong}&cnt={3}&appid=${myKey}`;

