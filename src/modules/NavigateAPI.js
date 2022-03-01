const axios = require("axios");

const API_KEY = "4d8fb5b93d4af21d66a2948710284366";
const id = "Brasilia";


async function TemperatureQuery() {
    let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${id}&appid=${API_KEY}&units=metric`);

    let Info_All = res.data.main.temp ;

    console.log(Info_All);
};
TemperatureQuery();