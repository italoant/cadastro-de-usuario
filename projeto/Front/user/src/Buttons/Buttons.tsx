import React from 'react';
import Button from 'react-bootstrap/Button';
import './button.css'

export default function Buttons() {
    return (
        <div className='buttons'>
            <Button variant="primary">Enviar</Button>
            <Button variant="secondary">Cancelar</Button>        
        </div>
    )


}
