/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import UserForm from './UserForm';

export default function CreateComponent({lastID}){

    let body = {};
    const navigate = useNavigate();

    async function fetchPost(){
        const url = import.meta.env.VITE_BASE_URL;
        const response = await fetch(url, {
            method: 'POST',
            body: body,
            headers: {
              'Content-Type': 'application/json'
            }
          });

          if(response.status == 201){
            console.log('Létrehozás sikeres!');
          }else{
            alert('Létrehozás sikertelen!');
          }
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
        <UserForm name={'Új személy hozzáadása'} onSubmit={onCreate}/> 
    );
}