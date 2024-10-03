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
const forecasturl = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

async function forecastapiFetch() {
    try {
        const response = await fetch(forecasturl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecastCard(data.list);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayForecastCard(data) {
    // Create variables with dats for the Forecasted Days
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const dayAfter = new Date();
    dayAfter.setDate(today.getDate() + 2);

    // Store a list of the next three days that are different in our Forecast 
    const dailyForecasts = [];

    data.forEach(day => {
        const forecastDate = new Date(day.dt * 1000);

        if (
            forecastDate.getFullYear() === today.getFullYear() &&
            forecastDate.getMonth() === today.getMonth() &&
            forecastDate.getDate() === today.getDate() &&
            !dailyForecasts.includes("today")
        ) {
            dailyForecasts[0] = day;
        } else if (
            forecastDate.getFullYear() === tomorrow.getFullYear() &&
            forecastDate.getMonth() === tomorrow.getMonth() &&
            forecastDate.getDate() === tomorrow.getDate() &&
            !dailyForecasts.includes("tomorrow")
        ) {
            dailyForecasts[1] = day;
        } else if (
            forecastDate.getFullYear() === dayAfter.getFullYear() &&
            forecastDate.getMonth() === dayAfter.getMonth() &&
            forecastDate.getDate() === dayAfter.getDate() &&
            !dailyForecasts.includes("dayAfter")
        ) {
            dailyForecasts[2] = day;
        }
    })

    // With different days in the dailyForcasts[] array we can properly call the temp data for new days to display
    document.querySelector("#forecastOne").innerHTML = `Today: <b>${dailyForecasts[0].main.temp}&deg;F</b>`;
    document.querySelector("#forecastTwo").innerHTML = `Tommorrow: <b>${dailyForecasts[1].main.temp}&deg;F</b>`;
    document.querySelector("#forecastThree").innerHTML = `Day After: <b>${dailyForecasts[2].main.temp}&deg;F</b>`;
}

forecastapiFetch();