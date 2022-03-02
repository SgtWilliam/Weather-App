import React, {useState} from 'react';
import Axios from 'axios';


function SearchScript() {

    const [city, setCity] = useState([])

    const getCity = () => {
        Axios.get("http://dataservice.accuweather.com/locations/v1/cities/search?apikey=0TAA4kGUJNUewUdC85Or0NulJc4trMyi&q=fortaleza").then(
            (response) => {
                setCity(response.data[0].Key);
            }
        );
    };
}

export default SearchScript