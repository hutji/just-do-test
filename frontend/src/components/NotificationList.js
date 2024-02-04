import React from 'react';

const NotificationList = ({ notifications }) => {
  return (
    <ul>
      {notifications.map((notification) => (
        <li key={notification.id}>{notification.message}</li>
      ))}
    </ul>
  );
};

export default NotificationList;