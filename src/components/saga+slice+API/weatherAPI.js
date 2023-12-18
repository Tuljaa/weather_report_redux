import axios from "axios";

const APIKEY = "fbf712a5a83d7305c3cda4ca8fe7ef29";

export async function getWeatherData({lat, lon}) {
    const Url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=12&units=metric&appid=${APIKEY}`
    const response = await axios.get(Url)
    return response;
}

export async function getCoordinates(cityName) {
    const Url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${APIKEY}`
    const response = await axios.get(Url)
    return response;
}

export async function downloadWeatherReports({ cityLocDetails : {lat, lon} }) {
    const Url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${APIKEY}`
    const response = await axios.get(Url)
    return response;
}