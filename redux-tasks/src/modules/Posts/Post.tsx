import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addPost,
  fetchPosts,
  getLongPosts,
  getPostsError,
  getPostsStatus,
  selectAllPosts,
} from './postSlice';
import './Post.css';
import { AppDispatch } from '../../store';

export default function Post() {
  const [isLongPosts, setIsLongPosts] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const Allposts = useSelector(selectAllPosts);
  const longPosts = useSelector(getLongPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useMemo(() => longPosts, [longPosts]);

  const posts = isLongPosts ? longPosts : Allposts;
  // console.log(isLongPosts, posts, longPosts);

  const handlePostSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(posts[posts.length - 1].id)
    // const formTitle = e.target.0.value;
    // const formBody = e.target.1.value ;
    const form = e.target as HTMLFormElement;
    const formTitle = (form[0] as HTMLInputElement).value;
    const formBody = (form[1] as HTMLInputElement).value;
    const formId = Number((form[2] as HTMLInputElement).value);
    // console.log(formTitle, formBody, formId);
    // console.log(formTitle, formBody);
    // console.log(e)

    dispatch(
      addPost({
        userId: formId,
        title: formTitle,
        body: formBody,
        id: Number(Allposts[Allposts.length - 1].id) + 1,
      }),
    );
  };

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  let content;

  if (postsStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (postsStatus === 'succeeded') {
    content = posts.map((post) => (
      <div className='post' key={post.id}>
        <h2>
          {post.id} {post.title}
        </h2>
        <h4 className='body'>{post.body} </h4>
        <h3>
          <br></br>-------------
        </h3>
      </div>
    ));
  } else if (postsStatus === 'failed') {
    content = <p>{error?.toString()}</p>;
  }

  return (
    <section>
      <h2>Posts</h2>
      <form onSubmit={(e) => handlePostSubmit(e)}>
        <div className='formcontainer'>
          <label htmlFor='postTitle'>Post title:</label>
          <input type='text' placeholder='Add post title' />
          <br />
          <label htmlFor='postText'>Post text:</label>
          <input type='text' placeholder='Add body text' />
          <br />
          <label htmlFor='idForm'>Your id:</label>
          <input type='number' placeholder='your user ID' />
          <br />
          <input type='submit' placeholder='Add new post' />
        </div>
      </form>
      <br />
      <button onClick={() => setIsLongPosts(true)}>Show only long posts</button>
      <button onClick={() => setIsLongPosts(false)}>Show all posts</button>
      {content}
    </section>
  );
}
