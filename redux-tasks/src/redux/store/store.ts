import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import postReducer from '../features/posts/postSlice'

//@ts-ignore
const logger = store  => next => action => {
  //Logger middleware, commented for deploy, only for dev purposes
  // console.log('Dispatching:', action)
  const result = next(action)
  // console.log('Next state:', store.getState())
  return result
}
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store