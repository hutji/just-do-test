import { useSelector } from 'react-redux';
import AdminDashboard from '../components/AdminDashboard';

const AdminDashboardPage = () => {
  const { notifications, statistics } = useSelector((state) => state);
  
  return (
    <div>
      <h1>Страница супер-пользователя</h1>
      <AdminDashboard notifications={notifications} statistics={statistics} />
    </div>
  );
};

export default AdminDashboardPage;