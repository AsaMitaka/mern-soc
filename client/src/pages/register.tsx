import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/ui/input';
import Btn from '../components/ui/button';
import register from '../assets/register.jpg';
import { useEffect, useState } from 'react';
import {
  checkValidEmail,
  checkValidName,
  checkValidPassword,
  checkValidUsername,
} from '../libs/validation';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { setLogin } from '../store/slices/auth';
import axios from '../libs/axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    console.log(error);

    if (error) {
      timer = setTimeout(() => {
        setError('');
      }, 5000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [error]);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!username.length || !name.length || !email.length || !password.length) {
      setError('Username, name, email or password cant be empty');
      return;
    }

    if (!checkValidUsername(username)) {
      setError('Invalid username, must be at least 6 or less 16');
      return;
    }

    if (!checkValidName(name)) {
      setError('Invalid name, must be at least 6 or less 16');
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
      const registedUser = await axios.post('/auth/register', {
        username,
        name,
        email,
        password,
      });

      if (!registedUser) {
        setError('Registration failed');
        return;
      }

      console.log(registedUser);
      const { token, ...otherData } = registedUser.data;

      dispatch(
        setLogin({
          user: otherData,
          token: token,
        }),
      );

      navigate('/');
      console.log('Registration successful');
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <div className="max-w-screen h-screen flex flex-col items-center justify-center bg-gray-200 dark:bg-black">
      <div className="flex md:flex-row md:w-auto md:h-auto w-full h-full">
        <div className="hidden md:block md:rounded-l-lg">
          <div className="w-72 h-96">
            <img
              src={register}
              alt="login img"
              className="w-full h-full rounded-l-md bg-cover bg-center bg-no-repeat"
            />
          </div>
        </div>
        <div className="md:w-80 md:h-96 w-full h-full flex items-center justify-center rounded-r-lg bg-white">
          <form className="md:w-72 w-full md:px-0 px-4" onSubmit={handleRegister}>
            <h1 className="text-3xl font-bold">Hello </h1>
            <h3 className="mt-1 text-base">Welcome! Please enter your details.</h3>
            <div className="mt-2">
              <Input
                isBig
                isRounded
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                type="text"
                value={username}
              />
              <Input
                isBig
                isRounded
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                type="text"
                value={name}
              />
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
              Do you have account?
              <Link to="/login" className="ml-2 text-purple-500 hover:opacity-60">
                Login
              </Link>
            </p>
            <Btn isRounded title="Sign Up" type="submit" />
            {/* <span className=" text-red-500 text-sm font-bold">{error}</span> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
