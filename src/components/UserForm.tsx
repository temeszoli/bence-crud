/* eslint-disable react/prop-types */
import { Button, Form } from "react-bootstrap";
import { useEffect, useRef } from "react";

interface UserFormProps {
  title: string;
  id: string | undefined | null;
  name: string;
  email: string;
  phone: string;
  birth_date: string;
  subscribed: boolean;
  onSubmit: (body: string) => void;
}

const UserForm: React.FC<UserFormProps> = ({
  title,
  id,
  name,
  email,
  phone,
  birth_date,
  subscribed,
  onSubmit,
}) => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const birthDateRef = useRef<HTMLInputElement | null>(null);
  const subscribedRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (nameRef.current) nameRef.current.value = name || "";
    if (emailRef.current) emailRef.current.value = email || "";
    if (phoneRef.current) phoneRef.current.value = phone || "";
    if (birthDateRef.current) birthDateRef.current.value = birth_date || "";
    if (subscribedRef.current) subscribedRef.current.checked = subscribed || false;
  }, [name, email, phone, birth_date, subscribed]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const body = JSON.stringify({
      id: id,
      name: nameRef.current?.value || "",
      email: emailRef.current?.value || "",
      phone: phoneRef.current?.value || "",
      birth_date: birthDateRef.current?.value || "",
      subscribed: subscribedRef.current?.checked || false,
    });

    onSubmit(body);
  };

  return (
    <div className="bg-dark text-white d-flex flex-column" id="forms-container">
      <h2 className="mt-3 text-center">{title}</h2>
      <Form
        className="mx-auto mb-5 d-flex flex-column w-75 justify-content-center"
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Név:</Form.Label>
          <Form.Control
            ref={nameRef}
            name="name"
            type="text"
            placeholder="Itt add meg a neved!"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email cím:</Form.Label>
          <Form.Control
            ref={emailRef}
            name="email"
            type="email"
            placeholder="Itt pedig az email címed!"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
          <Form.Label>Telefonszám:</Form.Label>
          <Form.Control
            ref={phoneRef}
            name="phone"
            type="tel"
            required
            placeholder="pl. (123) 456-7891"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicBirthDate">
          <Form.Label>Születési dátum:</Form.Label>
          <Form.Control ref={birthDateRef} name="birth_date" type="date" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            ref={subscribedRef}
            name="subscribed"
            type="checkbox"
            label="Iratkozz fel egy kattintással!"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Küldés
        </Button>
      </Form>
    </div>
  );
};

export default UserForm;
