const BASE_URL = 'http://localhost:3000';

export const loginUser = async (email, password) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) {
    throw new Error('Ошибка при авторизации');
  }

  const data = await response.json();
  return data;
};

export const registerUser = async (email, password) => {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) {
    throw new Error('Ошибка при регистрации');
  }

  const data = await response.json();
  return data;
};

export const getNotifications = async () => {
  const response = await fetch(`${BASE_URL}/notifications`);

  if (!response.ok) {
    throw new Error('Ошибка при загрузке уведомлений');
  }

  const data = await response.json();
  return data;
};