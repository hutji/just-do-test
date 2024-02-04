import React, { useState } from 'react';
import { loginUser, registerUser } from '../utils/api';
import LoginForm from '../src/components/LoginForm';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await loginUser(email, password);
      // Обработка успешного входа
    } catch (error) {
      setError('Ошибка при авторизации');
    }
  };

  const handleRegister = async () => {
    try {
      const response = await registerUser(email, password);
      // Обработка успешной регистрации
    } catch (error) {
      setError('Ошибка при регистрации');
    }
  };

  return (
    <div>
      <h1>Страница авторизации/регистрации</h1>
      <LoginForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleRegister={handleRegister}
        error={error}
      />
    </div>
  );
};

export default LoginPage;