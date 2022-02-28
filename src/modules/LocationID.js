const axios = require("axios");

async function LocationID() {

    const API_KEY = "Dt3kfkqDKvwUBoV0ErhMNgoZySAl7LiG";
    const city = "Brasilia";

    let res = await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${city}`);

    let location = res.data

    console.log(location);
}
LocationID();
