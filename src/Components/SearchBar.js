import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
} from 'reactstrap';
import './SearchScript'
import {GetUserCiy} from "./SearchScript";

function SearchBar() {

    return(
        <div>
            <Form className={"FormCss"}>
                <FormGroup>
                    <Label className={"lb-01"} for="nome">Digite sua cidade</Label>
                    <Input
                        style={{
                            background: 'white',
                            color: 'black',
                        }}
                        id="input-city"
                        type="message"
                        placeholder="Ex: Fortaleza, Sao Paulo"
                        className={"imp-01"}
                    />
                    <Button className={"bt-01"} type="submit"}>Submit</Button>
                </FormGroup>
            </Form>
            <div className="div-02">
            </div>
        </div>

    );
}



export default SearchBar;
//<Button className={"bt-01"} onClick={GetUserCiy}>Submit</Button>