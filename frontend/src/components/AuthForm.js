import React from 'react';

const AuthForm = () => {
  return (
    <form>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default AuthForm;
