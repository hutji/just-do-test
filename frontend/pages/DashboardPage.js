import React, { useState, useEffect } from 'react';
import { getNotifications } from '../utils/api';
import NotificationList from '../src/components/NotificationList';

const DashboardPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const notificationsData = await getNotifications();
        setNotifications(notificationsData);
        setLoading(false);
      } catch (error) {
        setError('Ошибка при загрузке уведомлений');
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Панель управления пользователя</h1>
      <NotificationList notifications={notifications} />
    </div>
  );
};

export default DashboardPage;