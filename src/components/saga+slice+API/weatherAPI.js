import axios from "axios";

const APIKEY = "fbf712a5a83d7305c3cda4ca8fe7ef29";

export async function getWeatherData(cityName){
    const Url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${APIKEY}`
    const response = await axios.get(Url)
    return response;
}