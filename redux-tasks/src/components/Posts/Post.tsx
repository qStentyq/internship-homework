import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, getPostsError, getPostsStatus, selectAllPosts } from '../../features/posts/postSlice'

export default function Post() {
const dispatch = useDispatch();

const posts = useSelector(selectAllPosts)
const postsStatus = useSelector(getPostsStatus)
const error = useSelector(getPostsError)

  useEffect(() => {
    if(postsStatus === 'idle') {
        //@ts-ignore
        dispatch(fetchPosts())
    }
  }, [postsStatus, dispatch])

let content;
if (postsStatus === 'loading' ) {
content = <p>Loading...</p>;
} else if (postsStatus === 'succeeded' ) {
content = posts.map(post => <div className='post' key={post.id}>
    <h2>{post.id} {post.title}</h2>
        <h4 className='body'>
            {post.body} </h4>
            <h3><br></br>-------------</h3>
        
    </div>
)
} else if (postsStatus === 'failed') {
content = <p>{error?.toString()}</p>; }

  return (

<section>
<h2>Posts</h2>
{content}
</section>
  )
}
