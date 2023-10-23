/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserForm from './UserForm';

export default function UpdateComponent({refreshData}){
  let body = {};
  const navigate = useNavigate();
  const params = useParams();

  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(()=>{
    async function fetchData(){
      const url = import.meta.env.VITE_BASE_URL;
      const response = await fetch(url);
      if (response.status == 200) {
        const responseData = await response.json();

        for (let i = 0; i < responseData.length; i++) {
          if (responseData[i].id == params.id) {
            setTitle(responseData[i].name + ' adatainak szerkesztése');
            setName(responseData[i].name);
            setEmail(responseData[i].email);
            setPhone(responseData[i].phone);
            setSubscribed(responseData[i].subscribed)
          }

        }
      }else{
        alert('Adatbekérés sikertelen!')
        console.log(response.error);
      }
    }
    fetchData();
  },[params.id]);

    async function fetchPut(){
        const url = import.meta.env.VITE_BASE_URL+'/'+params.id;
        const response = await fetch(url, {
            method: 'PUT',
            body: body,
            headers: {
              'Content-Type': 'application/json'
            }
          });
        if (response.status == 200){
          console.log('Felhasználó szerkesztése sikeres!');
        }else{
          alert(response.error)
        }
    }

    function onUpdate(inputData){
        body = inputData;      
        fetchPut();
        navigate('/read');
    }

    return(
        <UserForm title={title} id={params.id} name={name} email={email} phone={phone} subscribed={subscribed} onSubmit={onUpdate} refreshData={refreshData}/>
    );
}