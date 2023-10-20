/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

export default function UpdateComponent(){
    var body = {};
    const navigate = useNavigate();

    async function fetchPut(){
        const url = import.meta.env.VITE_BASE_URL+'/hogy szerzem meg ide az id-t';
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

        //fetchPut();
        //navigate('/read');
    }


    return(
        <>
        <h1 className='d-flex justify-content-center mt-3'>Rekord szerkesztése</h1>
        <Form className='mx-auto mb-5 d-flex flex-column w-25 justify-content-center' onSubmit={onUpdate}>
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
        </>
    );
}