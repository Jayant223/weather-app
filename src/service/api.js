import axios from 'axios';

const API_KEY = 'c4d54362a1accbccf49c579a1be66926';
const URL = 'http://api.openweathermap.org/data/2.5/weather';


export const getWeather = async(city, country) => {
    const data = await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}`)
    return data;
}