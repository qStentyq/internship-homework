import React from 'react'
import type { Route } from './+types/post'

export async function clientLoader({ params }: { params: Route.ClientLoaderArgs }) {

    const postId = params.params.postId
    return {postId}; }

export async function clientAction({ }: {  }) {}

export default function Post({loaderData}: {loaderData: Route.ComponentProps}) {
  return (
    <div>
        <p>Post id: {
        
        loaderData.loaderData.postId}</p>
        <button className="mt-4 text-blue-500 hover:underline">
            <a href="/internship-homework/react-tasks/task-5/posts">Back to Posts</a>
        </button>
    </div>
  )
}
