import { Link } from 'react-router-dom';
import Input from '../components/ui/input';
import Btn from '../components/ui/button';
import login from '../assets/login.jpg';

const Login = () => {
  return (
    <div className="max-w-screen h-screen flex flex-col items-center justify-center bg-gray-200">
      <div className="flex">
        <div className="w-72 h-96 flex items-center justify-center rounded-l-lg bg-white">
          <div className="w-60">
            <h1 className="text-2xl font-bold">Welcome Back</h1>
            <h3 className="text-sm">Welcome back! Please enter your details.</h3>
            <div className="mt-2">
              <Input isBig isRounded placeholder="Email" type="email" />
              <Input isBig isRounded isOutline placeholder="Email" type="email" />
            </div>
            <p className="mt-2 text-base flex items-center text-xs">
              Don't have account?
              <Link to="/register" className="ml-2 text-purple-500 hover:opacity-60">
                Register
              </Link>
            </p>
            <Btn isRounded title="Sign In" />
          </div>
        </div>
        <div className="rounded-r-lg">
          <div className="w-72 h-96">
            <img
              src={login}
              alt="login img"
              className="w-full h-full rounded-r-md bg-cover bg-center bg-no-repeat"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
