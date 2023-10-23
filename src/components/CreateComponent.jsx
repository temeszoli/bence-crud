/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import UserForm from './UserForm';

export default function CreateComponent({lastID, refreshData}){

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
            refreshData();
            console.log('Létrehozás sikeres!');
          }else{
            alert('Létrehozás sikertelen!');
          }
    }

    function onCreate(inputData){      
        body = inputData;
        fetchPost();
        navigate('/read');
    }

    return(
        <UserForm 
        title={'Új személy hozzáadása'} 
        id={lastID++} 
        name={''}
        email={''}
        phone={''} 
        onSubmit={onCreate}/> 
    );
}