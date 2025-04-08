import React from 'react'

export default function Posts() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"

          >
            <h2 className="text-2xl font-semibold mb-2">Post Title {index + 1}</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              vehicula, lorem non tincidunt tincidunt, justo nisi facilisis erat,
              at tincidunt lorem nulla vel nisi...
            </p>
           <a href= {`/posts/${index + 1}`}>
           <button className="mt-4 text-blue-500 hover:underline">
              Read More
            </button>
            </a>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a
          href="/"
          className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
        >
          Back to Home Page
        </a>
    </div>
  </div>
  )
}
