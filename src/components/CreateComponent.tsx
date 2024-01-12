import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserForm from './UserForm';
import { useData } from './DataContext';

const CreateComponent: React.FC = () => {
  const { addNewData } = useData();
  const navigate = useNavigate();

  const onCreate = (inputData: string) => {
    addNewData(inputData);
    navigate('/read');
  };

  return (
    <UserForm
      title={'Új személy hozzáadása'}
      id={''}
      name={''}
      email={''}
      phone={''}
      birth_date={''}
      subscribed={false}
      onSubmit={onCreate}
    />
  );
};

export default CreateComponent;
