/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateComponent(){
  var body = {};
  const navigate = useNavigate();
  const params = useParams();

  const [name, setName] = useState('');

  useEffect(()=>{
    async function fetchData(){
      const url = import.meta.env.VITE_BASE_URL;
      var response = await fetch(url);
      var responseData = await response.json();

      for (let i = 0; i < responseData.length; i++) {
        if (responseData[i].id == params.id) {
          setName(responseData[i].name);
        }
      }
    }
    fetchData();
  },[params.id]);

    async function fetchPut(){
        const url = import.meta.env.VITE_BASE_URL+'/'+params.id;
        await fetch(url, {
            method: 'PUT',
            body: body,
            headers: {
              'Content-Type': 'application/json'
            }
          });
    }

    function onUpdate(event){
        event.preventDefault();
        body = JSON.stringify({
          id: params.id,
          name: event.target.elements.name.value,
          email: event.target.elements.email.value,
          phone: event.target.elements.phone.value,
          birth_date: event.target.elements.birth_date.value,
          subscribed: event.target.elements[4].checked?true:false,
        });           
        fetchPut();
        navigate('/read');
    }

    return(
        <div className='bg-dark text-white d-flex flex-column' id='forms-container'>
        <h2 className='mt-3 text-center'>{name} adatainak szerkesztése</h2>
        <Form className='mx-auto mb-5 d-flex flex-column w-75 justify-content-center' onSubmit={onUpdate}>
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
          <Form.Control name='birth_date' type="datetime-local" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check name='subscribed' type="checkbox" label="Iratkozz fel egy kattintással!" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Változtatások mentése
        </Button>
        </Form>
        </div>
    );
}