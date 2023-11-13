import axios from "axios";

const APIKEY = "fbf712a5a83d7305c3cda4ca8fe7ef29";

export async function getWeatherData(cityName){
    // https://history.openweathermap.org/data/2.5/history/${cityName}?lat=${}&lon=${}&appid={APIKEY}
    const Url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${APIKEY}`
    const response = await axios.get(Url)
    return response;
}

export async function getCoordinates(cityName){
    console.log(cityName);
    const Url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${APIKEY}`
    const response = await axios.get(Url)
    return response;
}