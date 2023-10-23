/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useEffect, useRef } from "react";

export default function UserForm({title, id, name, email, phone, subscribed, onSubmit}){

    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const birthDateRef = useRef();
    const subscribedRef = useRef();

    useEffect(()=>{
      nameRef.current.value = name;
      emailRef.current.value = email;
      phoneRef.current.value = phone;
      subscribedRef.current.checked = subscribed;
    },[name, email, phone, subscribed])
    
    const handleSubmit = (e) => {
      e.preventDefault();
      const body = JSON.stringify({
        id: id,
        name: nameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
        birth_date: birthDateRef.current.value,
        subscribed: subscribedRef.current.checked
      });
      onSubmit(body);
    }
    
    return(
        <div className='bg-dark text-white d-flex flex-column' id='forms-container'>
        <h2 className='mt-3 text-center'>{title}</h2>
        <Form className='mx-auto mb-5 d-flex flex-column w-75 justify-content-center' onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Név:</Form.Label>
          <Form.Control ref={nameRef} name='name' type="text" placeholder="Itt add meg a neved!" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email cím:</Form.Label>
          <Form.Control ref={emailRef} name='email' type="email" placeholder="Itt pedig az email címed!" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
          <Form.Label>Telefonszám:</Form.Label>
          <Form.Control ref={phoneRef} name='phone' type="tel" required placeholder="pl. (123) 456-7891" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicBirthDate">
          <Form.Label>Születési dátum:</Form.Label>
          <Form.Control ref={birthDateRef} name='birth_date' type="date" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check ref={subscribedRef} name='subscribed' type="checkbox" label="Iratkozz fel egy kattintással!" />
        </Form.Group>
        <Button variant="primary" type="submit" >
          Küldés
        </Button>
        </Form>
        </div>
    );
}