import { createSlice } from '@reduxjs/toolkit';
import { UserProps } from '../../libs/types';

interface UserStateProps {
  user: null | UserProps;
  isAuth: boolean;
  posts: [];
}

const initialState: UserStateProps = {
  user: null,
  isAuth: false,
  posts: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.isAuth = true;
      localStorage.setItem('token', action.payload.token);
    },
    setLogout: (state) => {
      state.user = null;
      state.isAuth = false;
      localStorage.removeItem('token');
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) {
          return action.payload.post;
        }
        return post;
      });
      state.posts = updatedPosts;
    },
  },
});

export const { setLogin, setLogout, setPost, setPosts } = authSlice.actions;
export default authSlice.reducer;
