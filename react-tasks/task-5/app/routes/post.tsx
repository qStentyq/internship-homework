import React from "react";
import type { Route } from "./+types/post";
import { Link } from "react-router-dom";
export async function clientLoader({
  params,
}: {
  params: Route.ClientLoaderArgs;
}) {
  const { postId } = params; // Simplified destructuring
  return { postId };
}
// Removed `clientAction` since it's unused
export default function Post({
  loaderData,
}: {
  loaderData: Route.ComponentProps;
}) {
  const { postId } = loaderData; // Simplify access to `postId`
  return (
    <div>
      <p>Post id: {postId}</p> {/* Simplified data access */}
      <button className='mt-4 text-blue-500 hover:underline'>
        <Link to='/internship-homework/react-tasks/task-5/posts'>
          Back to Posts
        </Link>{" "}
        {/* Adjusted to relative path */}
      </button>
    </div>
  );
}
