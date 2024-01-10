import { configureStore } from '@reduxjs/toolkit';
import modeReducer from './slices/mode';
import authReducer from './slices/auth';

export const store = configureStore({
  reducer: {
    mode: modeReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
