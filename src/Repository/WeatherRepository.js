const axios = require('axios');

const API_URL = `https://dataservice.accuweather.com`;
const API_KEY = `YCvJYwQiW9BIu2zKBQuEbx0Mx1MSXUCG`;


const WeatherRepository = {

    async getCityFromCityName(cityName) {
        const response = await axios.get(`${API_URL}/locations/v1/cities/search?apikey=%20${API_KEY}&q=${cityName}`)
        return response.data[0]
    },

    async getCurrentConditionsFromCityKey(cityKey) {
        const response = await axios.get(`${API_URL}/currentconditions/v1/${cityKey}?apikey=${API_KEY}`)
        return response.data[0]
    },

    async getCurrentConditionsFromCityName(cityName) {
        const city = await WeatherRepository.getCityFromCityName(cityName)
        const currentConditions = await WeatherRepository.getCurrentConditionsFromCityKey(city[`Key`])

        return {
            englishCityName: city[`EnglishName`],
            temperature: currentConditions[`Temperature`],
            weatherText: currentConditions[`WeatherText`],
            weatherIcon: currentConditions[`WeatherIcon`]
        }
    }

}

module.exports = WeatherRepository
