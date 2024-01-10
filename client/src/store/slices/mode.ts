import { createSlice } from '@reduxjs/toolkit';

interface ModeProps {
  mode: boolean;
}

const storedMode =
  localStorage.getItem('mode') !== undefined ? JSON.parse(localStorage.getItem('mode')) : null;

const initialState: ModeProps = {
  mode: storedMode !== null ? storedMode : true,
};

if (storedMode !== null) {
  document.documentElement.classList.toggle('dark', storedMode);
}

export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = !state.mode;
      localStorage.setItem('mode', JSON.stringify(state.mode));
      if (state.mode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
  },
});

export const { setMode } = modeSlice.actions;
export default modeSlice.reducer;
