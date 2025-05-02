import React from "react";
import { Link } from "react-router-dom";

export default function Posts() {
  function generateRandomText(length: number) {
    const charset =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomText = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      if (i % 10 === 0) randomText += " ";
      else randomText += charset[randomIndex];
    }
    return randomText;
  }

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-4xl font-bold text-center mb-8'>Posts</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className='bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer'>
            <h2 className='text-2xl font-semibold mb-2 text-black'>
              Random text here/ Post {index + 1}
            </h2>
            <p className='text-gray-600 flex '>{generateRandomText(60)}</p>
            <a
              href={`/internship-homework/react-tasks/task-5/posts/${
                index + 1
              }`}>
              <button className='mt-4 text-blue-500 hover:underline'>
                Read More
              </button>
            </a>
          </div>
        ))}
      </div>
      <div className='mt-8 text-center'>
        <Link
          to='/internship-homework/react-tasks/task-5/'
          className='px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition'>
          Back to Home Page
        </Link>
      </div>
    </div>
  );
}
