import axios from "axios";
import './SearchBar'

export function GetUserCiy(localTemperature, isDayTime, dateTime, icon) {
    let information = document.getElementById("input-city").value;
    if(information) {


        async function idQuery() {

            const API_KEY = "UDbfVDhLCwO5iPDrK8KqXdW6KSmUxvaf";
            const UserInput = information;
            let res = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${UserInput}`);

            let inform = res.data[0].Key


            let response = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${inform}?apikey=${API_KEY}`);

            let fullData = response.data;
            let localTemperature = response.data[0].Temperature.Metric.Value
            let isDayTime = response.data[0].IsDayTime
            let dateTime = response.data[0].LocalObservationDateTime
            let icon = response.data[0].WeatherIcon


            console.log(fullData)
            console.log(localTemperature)
            console.log(isDayTime)
            console.log(dateTime)
            console.log(icon)


        };
        idQuery();
    }
};



