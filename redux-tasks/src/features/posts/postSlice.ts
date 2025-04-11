import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'


const POST_URL = 'https://jsonplaceholder.typicode.com/posts'

export const fetchPosts = createAsyncThunk('posts/fetchPosts',
    async () => {
      try {
        
          const response = await fetch(POST_URL)
          return response.json()
      }
      catch (err) {
        return err
      }
    },
  )

export interface Posts {
  posts: Post[],
  status: string,
  error: string | null
}

export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

const initialState: Posts = {
  posts: [],
  status: 'idle',
  error: null
}

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      
      state.status = 'succeeded'
      console.log('Success!')
      // Add user to the state array
      state.posts = action.payload
    })
    .addCase(fetchPosts.rejected, (state, action) => {

        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch';
        
        
      })
    .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading'
        console.log('Still pending')
 
        
      })
  },
})

// Action creators are generated for each case reducer function
export const selectAllPosts = (state: RootState) => state.posts.posts
export const getPostsStatus = (state: RootState) => state.posts.status
export const getPostsError = (state: RootState) => state.posts.error


export default postSlice.reducer