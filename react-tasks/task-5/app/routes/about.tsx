import React from 'react'

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-center max-w-2xl">
        Hi there! I'm a passionate frontend developer who loves building web applications and exploring new technologies.
        Currently working as an intern at Endava
        <span className="inline-flex items-center">
          <a
            href="https://www.endava.com/en" target="_blank" rel="noopener noreferrer" >
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScVxWEEeVSSDXiBSAPz_7vFbetvg8-eKAUMQ&s'
            className='w-6 h-6 ml-2'
            alt="Endava Logo" />
          </a>
        </span>
      ,where I get to learn and grow in a dynamic environment.I enjoy solving complex problems and creating user-friendly experiences.
      In my free time, I like to read, learn, play games and contribute.
    </p>
    <div className="mt-6">
        <a
          href="https://github.com/qStentyq"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Check out my GitHub
        </a>
      </div>
      <div className="mt-4">
        <a
          href="/internship-homework/react-tasks/task-5/"
          className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
        >
          Back to Home Page
        </a>
      </div>
    </div>
  )
}
