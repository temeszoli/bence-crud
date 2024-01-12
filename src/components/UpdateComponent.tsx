import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserForm from './UserForm';
import { useData } from './DataContext';

const UpdateComponent: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams<{id : string}>();
  const { data, updateExistingData } = useData();

  const [title, setTitle] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [birth_date, setBirth_date] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);

  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == params.id) {
        setTitle(data[i].name + ' adatainak szerkesztése');
        setName(data[i].name);
        setEmail(data[i].email);
        setPhone(data[i].phone);
        setBirth_date(data[i].birth_date);
        setSubscribed(data[i].subscribed);
      }
    }
  }, [data, params.id]);

  const onUpdate = (inputData: string) => {
    updateExistingData(params.id!, inputData);
    navigate('/read');
  };

  return (
    <UserForm
      title={title}
      id={params.id!}
      name={name}
      email={email}
      phone={phone}
      birth_date={birth_date}
      subscribed={subscribed}
      onSubmit={onUpdate}
    />
  );
};

export default UpdateComponent;
