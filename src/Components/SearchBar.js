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
import './SearchScript'
import {GetUserCiy} from "./SearchScript";
import './SearchBar.css'



function SearchBar() {

    function boxC() {
        return <p>Me mama</p>
    }


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
                    <Button className={"bt-01"} onClick={GetUserCiy}>Submit</Button>
                </FormGroup>
            </Form>
            <div className="div-02"></div>
        </div>
    );
}



export default SearchBar;