import React from 'react';
import { useDispatch } from 'react-redux';
import { login, register } from '../redux/auth/actions';
import { Button, Input, Form } from 'shadcn-ui';

const IndexPage = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  const handleRegister = () => {
    dispatch(register());
  };

  return (
    <div>
      <h1>Добро пожаловать в Just DO!</h1>
      <Form>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button onClick={handleLogin}>Авторизоваться</Button>
        <Button onClick={handleRegister}>Зарегистрироваться</Button>
      </Form>
    </div>
  );
};

export default IndexPage;