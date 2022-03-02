import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    FormText,
} from 'reactstrap';
import axios from "axios";



function SearchBar() {
    return(
        <div>
            <Form className={"FormCss"}>
                <FormGroup>
                    <Label for="nome">Cidade</Label>
                    <Input
                        style={{
                            background: 'white',
                            color: 'black',
                        }}
                        id="input-city"
                        type="message"
                        placeholder="Brasilia"
                    />
                    <FormText className={"FormText"}>Digite o nome de alguma Cidade</FormText>
                    <Button onClick={GetUserCiy}>Submit</Button>
                </FormGroup>
            </Form>
        </div>
    );
}

export function GetUserCiy() {
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



export default SearchBar;