
import React from 'react';
import { useSelector } from 'react-redux';
import { selectNotifications } from '../redux/notifications/selectors';
import { Button, Select } from 'shadcn-ui';

const DashboardPage = () => {
  const notifications = useSelector(selectNotifications);

  const handlePeriodChange = (period) => {
    // Handle period change logic
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Select onChange={handlePeriodChange}>
        <option value="hour">Last Hour</option>
        <option value="today">Today</option>
        <option value="yesterday">Yesterday</option>
        <option value="week">Last Week</option>
        <option value="month">Last Month</option>
      </Select>
      <div>
        <p>Total Informational Messages: {notifications.info}</p>
        <p>Total Warning Messages: {notifications.warning}</p>
        <p>Total Error Messages: {notifications.error}</p>
      </div>
    </div>
  );
};

export default DashboardPage;