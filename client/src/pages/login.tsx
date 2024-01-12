import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import login from '../assets/login.jpg';
import { checkValidEmail, checkValidPassword } from '../libs/validation';
import axios from '../libs/axios';
import { AppDispatch } from '../store/store';
import { setLogin } from '../store/slices/auth';
import { Btn, Input } from '../components';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    let timer: number;

    if (error) {
      timer = setTimeout(() => {
        setError('');
      }, 5000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [error]);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email.length || !password.length) {
      setError('Email or password cant be empty');
      return;
    }

    if (!checkValidEmail(email)) {
      setError('Invalid email');
      return;
    }
    if (!checkValidPassword(password)) {
      setError('Invalid password, must be at least 6 or less 16');
      return;
    }

    try {
      const logedUser = await axios.post('/auth/login', {
        email,
        password,
      });

      if (!logedUser) {
        setError('Login failed');
        return;
      }

      const { token, ...otherData } = logedUser.data;

      dispatch(
        setLogin({
          user: otherData,
          token: token,
        }),
      );

      console.log('Login successful');
      return navigate('/');
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <div className="max-w-screen h-screen flex flex-col items-center justify-center bg-gray-200 dark:bg-black">
      <div className="flex md:flex-row md:w-auto md:h-auto w-full h-full">
        <div className="md:w-80 md:h-96 w-full h-full flex items-center justify-center rounded-l-lg bg-white">
          <form className="md:w-72 w-full md:px-0 px-4" onSubmit={handleLogin}>
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <h3 className="mt-1 text-base">Welcome back! Please enter your details.</h3>
            <div className="mt-2">
              <Input
                isBig
                isRounded
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
                value={email}
              />
              <Input
                isBig
                isRounded
                isOutline
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                value={password}
              />
            </div>
            <p className="mt-2 text-base flex items-center text-sm">
              Don't have account?
              <Link to="/register" className="ml-2 text-purple-500 hover:opacity-60">
                Register
              </Link>
            </p>
            <Btn isRounded title="Sign In" type="submit" />
            {/* <span className=" text-red-500 text-sm font-bold">{error}</span> */}
          </form>
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
