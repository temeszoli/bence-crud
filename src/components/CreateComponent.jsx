/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import UserForm from './UserForm';
import { useData } from './DataContext';

export default function CreateComponent(){

    const { addNewData } = useData();
    const navigate = useNavigate();

    function onCreate(inputData){   
        addNewData(inputData);   
        navigate('/read');
    }

    return(
        <UserForm 
        title={'Új személy hozzáadása'} 
        name={''}
        email={''}
        phone={''} 
        onSubmit={onCreate}/> 
    );
}