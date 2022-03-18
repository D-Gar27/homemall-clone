import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    filter: '',
  },
});

export default store;
