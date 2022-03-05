import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    FormText,
} from 'reactstrap';
import './Style.css';



const BoxInput = () => {

    const [city, setCity] = useState("");
    const [info, setInfo] = useState();
    const [error, setError] = useState();
    const [localizedName, setLocalizedName] = useState();

    const apiURL = "http://dataservice.accuweather.com";
    const apikey = "CC4Zp7rFaDVpDOrtIVTFkAZhfPVT7Nca";



    const handleInput = (entrada) => {
        setCity(entrada.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (city === "") return;
        else {
            try {
                const response = await fetch(
                    `${apiURL}/locations/v1/cities/search?apikey=%20${apikey}&q=${city}`
                );
                const data = await response.json();

                const cityKey = data[0].Key;
                setLocalizedName(data[0].EnglishName);
                const response2 = await fetch(
                    `${apiURL}/currentconditions/v1/${cityKey}?apikey=${apikey}`
                );
                const data2 = await response2.json();
                setInfo(data2);
                setError(null);


            } catch (error) {
                setError(error.message);
                setInfo(null);
            }
        }
    };


    return(
        <div>
            <div>
                <Form className={"FormCss"}>
                    <FormGroup>
                        <Label className={"lb-01"} for="nome">Cidade</Label>
                        <Input
                            style={{
                                background: 'white',
                                color: 'black',
                            }}
                            onChange={handleInput}
                            id="input-city"
                            type="message"
                            placeholder="Digite o nome de alguma cidade. ex: Brasilia, Fortaleza, Natal"
                            className={"imp-01"}
                        />
                        <Button className={"bt-01"} onClick={handleSubmit}>Submit</Button>
                    </FormGroup>
                </Form>
            </div>


            {error && (
                <div className="error__container">
                    <p>City not found!</p>
                </div>
            )}


            {info && (
                <div className="Box-Infos">
                    <h2 className={"cityName"}>{localizedName}</h2>
                    <div className='box-temp'>
                        <p className={"emoji"}></p>
                        <p className={"Temperature"}>{info[0].Temperature.Metric.Value} °C</p>
                    </div>
                    <div></div>
                </div>
            )}

        </div>
    );
};




export default BoxInput;