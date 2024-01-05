import { Navigate, Outlet } from 'react-router-dom';
import { Header } from '../components';

const PrivateRoute = () => {
  const isAuth = true;

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default PrivateRoute;
