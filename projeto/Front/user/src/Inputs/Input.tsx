import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './input.css'

export default function Input() {
    return(
        <div>
            <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-usuario">Usuario</InputGroup.Text>
            <Form.Control
            aria-label="Usuario"
            aria-describedby="inputGroup-sizing-usuario"
            />
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-senha">
            Senha
            </InputGroup.Text>
            <Form.Control
            aria-label="Senha"
            aria-describedby="inputGroup-sizing-senha"
            />
            </InputGroup>
        </div>
    )

}