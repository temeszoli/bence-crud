/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

export default function CreateComponent({lastID}){

    var body = {};
    const navigate = useNavigate();

    async function fetchPost(){
        const url = import.meta.env.VITE_BASE_URL;
        await fetch(url, {
            method: 'POST',
            body: body,
            headers: {
              'Content-Type': 'application/json'
            }
          });
    }

    function onCreate(event){
        event.preventDefault();
        
        body = JSON.stringify({
            id: lastID++,
            name: event.target.elements.name.value,
            email: event.target.elements.email.value,
            phone: event.target.elements.phone.value,
            birth_date: event.target.elements.birth_date.value,
            subscribed: event.target.elements[4].checked?true:false,
        })

        fetchPost();
        navigate('/read');
    }

    return(
        <div id='createComponent'>
        <h1 className='d-flex justify-content-center mt-3'>Új rekord</h1>
        <Form className='mx-auto mb-5 d-flex flex-column w-25 justify-content-center' onSubmit={onCreate}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Name:</Form.Label>
          <Form.Control name='name' type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address:</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control name='phone' type="tel" pattern="([0-9]{3}) [0-9]{3}-[0-9]{4}" required placeholder="e.g. (123) 456-7891" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicBirthDate">
          <Form.Label>Birth date:</Form.Label>
          <Form.Control name='birth_date' type="datetime-local" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check name='subscribed' type="checkbox" label="Want to subscribe? Check me out!" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </Form>
        </div>   
    );
}