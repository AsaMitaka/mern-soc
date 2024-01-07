import { Route, Routes } from 'react-router-dom';
import { Search, Home, Login, Register, ProfileLikes, ProfilePosts, About, Error } from './pages';
import PrivateRoute from './utils/privateroute';
import ProfileLayout from './components/profileLayout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/search?" element={<Search />} />
          <Route element={<ProfileLayout />}>
            <Route path="/profile/:id" element={<ProfilePosts />} />
            <Route path="/profile/:id/likes" element={<ProfileLikes />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
