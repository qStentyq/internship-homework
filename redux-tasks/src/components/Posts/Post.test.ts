import postReducer, {
  addPost,
  fetchPosts,
  initialState,
  Post,
} from './postSlice';
import { describe, it, expect } from 'vitest';

describe('postSlice', () => {
  it('should handle addPost', () => {
    const newPost: Post = {
      userId: 1,
      id: 101,
      title: 'Test Post',
      body: 'This is a test post',
    };

    const updatedState = postReducer(initialState, addPost(newPost));

    expect(updatedState.posts).toHaveLength(1);
    expect(updatedState.posts[0]).toEqual(newPost);
  });

  it('should handle fetchPosts.fulfilled', () => {
    const mockPosts = [
      { userId: 1, id: 1, title: 'Post 1', body: 'Body 1' },
      { userId: 2, id: 2, title: 'Post 2', body: 'Body 2' },
    ];

    const action = { type: fetchPosts.fulfilled.type, payload: mockPosts };
    const updatedState = postReducer(initialState, action);

    expect(updatedState.status).toBe('succeeded');
    expect(updatedState.posts).toEqual(mockPosts);
  });

  it('should handle fetchPosts.pending', () => {
    const action = { type: fetchPosts.pending.type };
    const updatedState = postReducer(initialState, action);

    expect(updatedState.status).toBe('loading');
  });

  it('should handle fetchPosts.rejected', () => {
    const action = {
      type: fetchPosts.rejected.type,
      error: { message: 'Failed to fetch' },
    };
    const updatedState = postReducer(initialState, action);

    expect(updatedState.status).toBe('failed');
    expect(updatedState.error).toBe('Failed to fetch');
  });
});
