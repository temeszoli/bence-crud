/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

export default function UserForm({name, onSubmit}){
    
    return(
        <div className='bg-dark text-white d-flex flex-column' id='forms-container'>
        <h2 className='mt-3 text-center'>{name}</h2>
        <Form className='mx-auto mb-5 d-flex flex-column w-75 justify-content-center' onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Név:</Form.Label>
          <Form.Control name='name' type="text" placeholder="Itt add meg a neved!" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email cím:</Form.Label>
          <Form.Control name='email' type="email" placeholder="Itt pedig az email címed!" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
          <Form.Label>Telefonszám:</Form.Label>
          <Form.Control name='phone' type="tel" pattern="([0-9]{3}) [0-9]{3}-[0-9]{4}" required placeholder="pl. (123) 456-7891" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicBirthDate">
          <Form.Label>Születési dátum:</Form.Label>
          <Form.Control name='birth_date' type="date" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check name='subscribed' type="checkbox" label="Iratkozz fel egy kattintással!" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Küldés
        </Button>
        </Form>
        </div>
    );
}