import React from 'react';

const Dashboard = ({ notifications, statistics }) => {
  return (
    <div>
      <h2>Мини-дашборд</h2>
      <div>
        <p>Количество информационных сообщений: {statistics.info}</p>
        <p>Количество предупреждающих сообщений: {statistics.warning}</p>
        <p>Количество сообщений об ошибках: {statistics.error}</p>
      </div>
      <div>
        <h3>Уведомления</h3>
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id}>{notification.message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;