/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserForm from './UserForm';
import { useData } from './DataContext';

export default function UpdateComponent(){

  const navigate = useNavigate();
  const params = useParams();
  const { data, updateExistingData } = useData();

  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);
  const [birth_date, setBirth_date] = useState(0);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(()=>{
    for (let i = 0; i < data.length; i++){
      if(data[i].id == params.id){
        setTitle(data[i].name + ' adatainak szerkesztése');
        setName(data[i].name);
        setEmail(data[i].email);
        setPhone(data[i].phone);
        setBirth_date(data[i].birth_date);
        setSubscribed(data[i].subscribed)
      }
    }
  },[data, params.id]);

    function onUpdate(inputData){    
        updateExistingData(params.id, inputData);
        //fetchPut(inputData);
        navigate('/read');
    }

    return(
        <UserForm title={title} id={params.id} name={name} email={email} phone={phone} birth_date={birth_date} subscribed={subscribed} onSubmit={onUpdate}/>
    );
}