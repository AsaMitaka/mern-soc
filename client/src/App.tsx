import { Route, Routes, useNavigate } from 'react-router-dom';
import { Search, Home, Login, Register, ProfilePosts, About, Error, Post } from './pages';
import AppRoute from './libs/enums';
import PrivateRoute from './utils/privateroute';
import { HomeLayout } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store/store';
import { useEffect } from 'react';
import { setLogin } from './store/slices/auth';
import axios from './libs/axios';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const isAuth = useSelector<RootState>((state) => state.auth.isAuth);

  useEffect(() => {
    const token = localStorage.getItem('token');

    const getData = async () => {
      if (token) {
        const response = await axios.get('/auth/isUser');
        const userData = response.data;

        dispatch(
          setLogin({
            user: userData,
            token,
          }),
        );
        return navigate('/');
      }
    };

    getData();
  }, [dispatch]);

  return (
    <>
      <Routes>
        {!isAuth && (
          <>
            <Route path={AppRoute.LOGIN} element={<Login />} />
            <Route path={AppRoute.REGISTER} element={<Register />} />
          </>
        )}
        <Route element={<PrivateRoute />}>
          <Route element={<HomeLayout />}>
            <Route path={AppRoute.HOME} element={<Home />} />
            <Route path={AppRoute.POST} element={<Post />} />
            <Route path={AppRoute.ABOUT} element={<About />} />
            <Route path={AppRoute.SEARCH} element={<Search />} />
          </Route>
          <Route path={AppRoute.PROFILEPOSTS} element={<ProfilePosts />} />
          {/* <Route element={<ProfileLayout />}>
            <Route path={AppRoute.PROFILELIKES} element={<ProfileLikes />} />
          </Route> */}
          <Route path={AppRoute.ERROR} element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
