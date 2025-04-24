import { configureStore, Middleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postReducer from '../features/posts/postSlice';

const logger: Middleware = (store) => (next) => (action) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Dispatching:', action);
  }

  const result = next(action);
  if (process.env.NODE_ENV === 'development') {
    console.log('Next state:', store.getState());
  }
  return result;
};
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
  },
  middleware: (getDefaultMiddleware) =>
    process.env.NODE_ENV === 'development'
      ? getDefaultMiddleware().concat(logger)
      : getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
