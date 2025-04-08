import React from 'react'
import type { Route } from './+types/post'

export async function clientLoader({ params }: { params: Route.ClientLoaderArgs }) {
  //@ts-ignore
    const postId = params.postId
    return {postId}; }

export async function clientAction({ }: {  }) {}

export default function Post({loaderData}: {loaderData: Route.ComponentProps}) {
  return (
    <div>
        <p>Post id: {
        //@ts-ignore
        loaderData.postId}</p>
        <button className="mt-4 text-blue-500 hover:underline">
            <a href="/posts">Back to Posts</a>
        </button>
    </div>
  )
}
