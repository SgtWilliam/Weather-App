import axios from "axios";
import './SearchBar'

export function GetUserCiy() {
    let information = document.getElementById("input-city").value;
    if (information) {


        async function apiCalls() {

            const API_KEY = "U6DZXZvrOo05Z1ExG9ueYusnSZeLrv9b";


            let res = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${information}`);
            const cityId = res.data[0].Key


            let response = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${cityId}?apikey=${API_KEY}`);
            const fullData = response.data;
            const localTemperature = response.data[0].Temperature.Metric.Value;
            const isDayTime = response.data[0].IsDayTime;
            const dateTime = response.data[0].LocalObservationDateTime;
            const icon = response.data[0].WeatherIcon;
            const iconURL = "https://www.accuweather.com/images/weathericons/" + icon + ".svg";

            console.log(fullData)
            console.log(localTemperature)
            console.log(dateTime)
            console.log(icon)
            console.log(iconURL)
            console.log(isDayTime)

        };
        apiCalls();


    }
};

