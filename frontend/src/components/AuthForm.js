import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, register } from '../redux/actions';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login(email, password)); 
  };

  const handleRegister = () => {
    dispatch(register(email, password));
  };

  return (
    <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Войти</button>
      <button onClick={handleRegister}>Зарегистрироваться</button>
    </div>
  );
};

export default AuthForm;