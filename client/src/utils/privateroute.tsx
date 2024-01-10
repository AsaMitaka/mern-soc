import { Navigate, Outlet } from 'react-router-dom';
import { Header } from '../components';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const PrivateRoute = () => {
  const isAuth = useSelector<RootState>((state) => state.auth.isAuth);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <div className="mx-auto flex-1 w-full max-w-lg md:max-w-screen-xl">
        <Outlet />
      </div>
    </div>
  );
};

export default PrivateRoute;
