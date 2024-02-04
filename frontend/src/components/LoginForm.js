import React from 'react';

const LoginForm = ({
  email,
  password,
  setEmail,
  setPassword,
  handleLogin,
  handleRegister,
  error
}) => {
  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Войти</button>
      <button onClick={handleRegister}>Зарегистрироваться</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginForm;