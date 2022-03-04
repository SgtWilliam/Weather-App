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
import '../../Modules/SearchScript'
import {GetUserCity} from "../../Modules/SearchScript";
// import {handleClick} from "../BoxInfo/BoxInfo"


function BoxInput() {

    const [showConditionOneText, setShowConditionOneText] = useState(false)

    const handleClick = () =>
        setShowConditionOneText(showConditionOneText => !showConditionOneText)

    return(
        <div>
            <Form className={"FormCss"}>
                <FormGroup>
                    <Label className={"lb-01"} for="nome">Cidade</Label>
                    <Input
                        style={{
                            background: 'white',
                            color: 'black',
                        }}
                        id="input-city"
                        type="message"
                        placeholder="Brasilia"
                        className={"imp-01"}
                    />
                    <Button className={"bt-01"} onClick={handleClick}>Submit</Button>
                </FormGroup>
            </Form>
            {showConditionOneText ? ('') : (<div>

                <h1>O texto deve estar aqui meu nobre :)</h1>
                <h2>Fala pro bajira para de jogar crypto conflicts</h2>

            </div>)}
        </div>
    );
}

export default BoxInput;