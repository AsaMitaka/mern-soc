import { Link } from 'react-router-dom';
import Button from '../components/ui/button';

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Link to="/register">
        <Button>Register</Button>
      </Link>
    </div>
  );
};

export default Login;
