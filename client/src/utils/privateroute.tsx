import { Navigate, Outlet } from 'react-router-dom';
import { Header } from '../components';
import * as stylex from '@stylexjs/stylex';

const CONTAINER_STYLES = stylex.create({
  base: {
    margin: '0 auto',
    width: {
      default: 800,
      '@media (max-width: 800px)': '100%',
      '@media (min-width: 1540px)': 1366,
    },
  },
});

const PrivateRoute = () => {
  const isAuth = true;

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <div {...stylex.props(CONTAINER_STYLES.base)}>
      <Header />
      <Outlet />
    </div>
  );
};

export default PrivateRoute;
