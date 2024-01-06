import { Link } from 'react-router-dom';
import Button from '../components/ui/button';

const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <Link to="/login">
        <Button>Login</Button>
      </Link>
    </div>
  );
};

export default Register;
