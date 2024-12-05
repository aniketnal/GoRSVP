import React from 'react';

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded-sm shadow-lg">
        <h2 className="text-4xl font-bold text-center text-primary">Sign In</h2>
        <form className="mt-4">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              name="email"
              className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary text-black"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-black"
            >
              Password
            </label>
            <input
          
              type="password"
              id="password"
              name="password"
              placeholder="Enter Your Password"
              className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary text-black"
              required
            />
          </div>
          <div className="flex justify-end">
            <a
              href="#"
              className="text-primary text-lg hover:underline hover:text-secondary"
            >
              Forgot password?
            </a>
          </div>
          <button                                 
            type="submit"
            className="mt-6 w-full px-4 py-2 text-white bg-primary rounded-md shadow-sm focus:shadow-md hover:bg-secondary  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Sign In
          </button>
        </form>
        <p className="mt-6 text-center text-black">
          Don't have an account?{' '}
          <a
            href="./signup"
            className="text-primary text-lg hover:underline hover:text-secondary"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default page;
