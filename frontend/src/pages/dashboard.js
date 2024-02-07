import { useSelector } from 'react-redux';
import Dashboard from '../components/Dashboard';

const DashboardPage = () => {
  const { notifications, statistics } = useSelector((state) => state);
  
  return (
    <div>
      <h1>Основная страница</h1>
      <Dashboard notifications={notifications} statistics={statistics} />
    </div>
  );
};

export default DashboardPage;