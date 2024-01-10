import { Link } from 'react-router-dom';
import Input from '../components/ui/input';
import Btn from '../components/ui/button';
import login from '../assets/login.jpg';

const Login = () => {
  return (
    <div className="max-w-screen h-screen flex flex-col items-center justify-center bg-gray-200 dark:bg-black">
      <div className="flex md:flex-row md:w-auto md:h-auto w-full h-full">
        <div className="md:w-72 md:h-96 w-full h-full flex items-center justify-center rounded-l-lg bg-white">
          <div className="md:w-60 w-full md:px-0 px-4">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <h3 className="mt-1 text-base">Welcome back! Please enter your details.</h3>
            <div className="mt-2">
              <Input isBig isRounded placeholder="Email" type="email" />
              <Input isBig isRounded isOutline placeholder="Email" type="email" />
            </div>
            <p className="mt-2 text-base flex items-center text-sm">
              Don't have account?
              <Link to="/register" className="ml-2 text-purple-500 hover:opacity-60">
                Register
              </Link>
            </p>
            <Btn isRounded title="Sign In" />
          </div>
        </div>
        <div className="hidden md:block md:rounded-r-lg">
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
