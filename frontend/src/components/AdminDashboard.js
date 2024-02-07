import React, { useState } from 'react';

const AdminDashboard = ({ notifications, statistics }) => {
  const [message, setMessage] = useState('');
  const [recipient, setRecipient] = useState('');

  const handleSendNotification = () => {
    console.log('Sending notification...');
  };

  return (
    <div>
      <h2>Мини-дашборд админа</h2>
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
      <div>
        <h3>Отправить уведомление</h3>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Текст уведомления"
        />
        <input
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          placeholder="Получатель (пусто для всех)"
        />
        <button onClick={handleSendNotification}>Отправить</button>
      </div>
    </div>
  );
};

export default AdminDashboard;