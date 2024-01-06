import { Link } from 'react-router-dom';
import Input from '../components/ui/input';
import Btn from '../components/ui/button';
import register from '../assets/register.jpg';

const Register = () => {
  return (
    <div className="max-w-screen h-screen flex flex-col items-center justify-center bg-gray-200">
      <div className="flex">
        <div className="rounded-l-lg">
          <div className="w-72 h-96">
            <img
              src={register}
              alt="login img"
              className="w-full h-full rounded-l-md bg-cover bg-center bg-no-repeat"
            />
          </div>
        </div>
        <div className="w-72 h-96 flex items-center justify-center rounded-r-lg bg-white">
          <div className="w-60">
            <h1 className="text-2xl font-bold">Hello </h1>
            <h3 className="text-sm">Welcome! Please enter your details.</h3>
            <div className="mt-2">
              <Input isBig isRounded placeholder="Email" type="email" />
              <Input isBig isRounded isOutline placeholder="password" type="password" />
            </div>
            <p className="mt-2 text-base flex items-center text-xs">
              Do you have account?
              <Link to="/login" className="ml-2 text-purple-500 hover:opacity-60">
                Login
              </Link>
            </p>
            <Btn isRounded title="Sign Up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
