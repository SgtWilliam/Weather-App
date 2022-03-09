import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, FormGroup, Input, Label,} from 'reactstrap';
import './Style.css';
import WeatherRepository from "../../Repository/WeatherRepository";


const BoxInput = () => {

    const [cityName, setCityName] = useState("");
    const [currentConditions, setCurrentConditions] = useState();
    const [error, setError] = useState();
    const [localizedName, setLocalizedName] = useState();

    const handleInput = (entrada) => {
        setCityName(entrada.target.value);
    };

    const getCurrentConditions = async (e) => {
        e.preventDefault();
        if (cityName === "") {
            return
        }

        try {
            const currentConditions = await WeatherRepository.getCurrentConditionsFromCityName(cityName)
            setLocalizedName(currentConditions.englishCityName)
            setCurrentConditions(currentConditions);
            setError(null);

        } catch (error) {
            setError(error.message);
            setCurrentConditions(null);
        }

    };


    return (
        <div>
            <div>
                <Form className={"FormCss"} onSubmit={getCurrentConditions}>
                    <FormGroup>
                        <Label className={"lb-01"} for="nome">Cidade</Label>
                        <Input
                            style={{
                                background: 'white',
                                color: 'black',
                            }}
                            onChange={handleInput}
                            id="input-city"
                            type="text"
                            placeholder="Digite o nome de alguma cidade. ex: Brasilia, Fortaleza, Natal"
                            className={"imp-01"}
                        />
                        <Button className={"bt-01"} type={"submit"}>Submit</Button>
                    </FormGroup>
                </Form>
            </div>


            {error && (
                <div className="error__container">
                    <p>City not found!</p>
                </div>
            )}


            {currentConditions && (
                <div className="Box-Infos">
                    <h2 className={"cityName"}>{localizedName}</h2>
                    <div className='box-temp'>
                        <p className={"emoji"}/>
                        <p className={"Temperature"}>{currentConditions.temperature.Metric.Value} °C</p>
                        <img className="iconImg"
                             src={`https://www.accuweather.com/images/weathericons/${currentConditions.weatherIcon}.svg`}/>
                        <p className="condition">{currentConditions.weatherText}</p>
                    </div>
                    <div/>
                </div>
            )}

        </div>
    );
};


export default BoxInput;
