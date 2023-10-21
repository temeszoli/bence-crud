/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserForm from './UserForm';

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
          setName(responseData[i].name + ' adatainak szerkesztése');
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
        <UserForm name={name} onSubmit={onUpdate}/>
    );
}