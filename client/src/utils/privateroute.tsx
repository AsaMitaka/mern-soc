import { Navigate, Outlet } from 'react-router-dom';
import { Header } from '../components';

const PrivateRoute = () => {
  const isAuth = true;

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="mx-auto flex-1 w-full max-w-lg md:max-w-screen-xl">
        <Outlet />
      </div>
    </div>
  );
};

export default PrivateRoute;
