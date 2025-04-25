import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const POST_URL = 'https://jsonplaceholder.typicode.com/posts';

export enum Status {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}

export const fetchPostsFromApi = async () => {
  const response = await fetch(POST_URL);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response;
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const response = await fetchPostsFromApi();
    return response.json();
  } catch (err) {
    if (err instanceof Error) {
      return Promise.reject({ message: err.message });
    }
    return Promise.reject({ message: 'Failed to fetch posts' });
  }
});

export interface Posts {
  posts: Post[];
  status: string;
  error: string | null;
}

export interface Post {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export const initialState: Posts = {
  posts: [],
  status: Status.IDLE,
  error: null,
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      //Mutable update but it's actually immutable since state is WritableDraft and has immer to handle it
      state.posts.push(action.payload);
      //Immutable update, in our case the're simmilar because of immer
      // return {
      //   ...state,
      //   posts: [...state.posts, action.payload],
      // };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.status = Status.SUCCEEDED;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = Status.FAILED;
        state.error = action.error.message || 'Failed to fetch';
      });
  },
});

// Action creators are generated for each case reducer function
export const selectAllPosts = (state: RootState) => state.posts.posts;
export const getPostsStatus = (state: RootState) => state.posts.status;
export const getPostsError = (state: RootState) => state.posts.error;
//selector for posts longer than 200 chars
export const getLongPosts = (state: RootState) =>
  state.posts.posts.filter((post) => post.body.length > 200);

export default postSlice.reducer;
export const { addPost } = postSlice.actions;
