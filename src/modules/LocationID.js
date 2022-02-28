const axios = require("axios");
const API_KEY = "Dt3kfkqDKvwUBoV0ErhMNgoZySAl7LiG"

function LocationID() {

    const city = "Brasilia";

    //let res = axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${city}`);
    let res = axios.get("http://dataservice.accuweather.com/locations/v1/cities/search?apikey=Dt3kfkqDKvwUBoV0ErhMNgoZySAl7LiG&q=Brasilia");
    let data = res.date;

    console.log(data);
}
LocationID();