import { Route, Routes } from 'react-router-dom';
import {
  Search,
  Home,
  Login,
  Register,
  ProfileLikes,
  ProfilePosts,
  About,
  Error,
  Post,
} from './pages';
import AppRoute from './libs/enums';
import PrivateRoute from './utils/privateroute';
import ProfileLayout from './components/profileLayout';
import { HomeLayout } from './components';

const App = () => {
  return (
    <>
      <Routes>
        <Route path={AppRoute.LOGIN} element={<Login />} />
        <Route path={AppRoute.REGISTER} element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route element={<HomeLayout />}>
            <Route path={AppRoute.HOME} element={<Home />} />
            <Route path={AppRoute.POST} element={<Post />} />
            <Route path={AppRoute.ABOUT} element={<About />} />
            <Route path={AppRoute.SEARCH} element={<Search />} />
          </Route>
          <Route element={<ProfileLayout />}>
            <Route path={AppRoute.PROFILEPOSTS} element={<ProfilePosts />} />
            <Route path={AppRoute.PROFILELIKES} element={<ProfileLikes />} />
          </Route>
          <Route path={AppRoute.ERROR} element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
