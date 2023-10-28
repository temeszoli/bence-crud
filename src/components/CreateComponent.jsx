/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import UserForm from './UserForm';

export default function CreateComponent({lastID, refreshData}){

    const navigate = useNavigate();

    async function fetchPost(inputData){
        const url = import.meta.env.VITE_BASE_URL;
        const response = await fetch(url, {
            method: 'POST',
            body: inputData,
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

    function onCreate(inputData){      
        fetchPost(inputData);
        navigate('/read');
        refreshData();
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