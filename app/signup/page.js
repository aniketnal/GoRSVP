import React from "react";

const page = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-md rounded-lg w-96 p-6">
        <h1 className="text-2xl font-bold text-center text-primary mb-6">Sign Up</h1>
        <form>
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black mb-1"
            >
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              id="email"
              className="w-full px-4 text-black py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Mobile Field */}
          <div className="mb-4">
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-black mb-1"
            >
              Mobile number
            </label>
            <input
              type="tel"
              placeholder="Enter your Mobile Number"
              id="mobile"
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary text-black"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-black mb-1"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              id="password"
              className="w-full text-black px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-4">
            <label
              htmlFor="confirm-password"
              className="block text-black text-sm font-medium mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              id="confirm-password"
              className="w-full text-black px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-red-primary"
            />
          </div>

          {/* Account Type */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Account Type
            </label>
            <div className="flex justify-start">
              <div>
                <input
                  name="account_type"
                  value="user"
                  id="user"
                  type="radio"
                  className="mr-2"/>
                  <label className="text-black">User</label>
                <input
                  name="account_type"
                  value="organiser"
                  id="organiser"
                  type="radio"
                  className="mr-2 ml-6"/>
                  <label className="text-black">Organiser</label>
              </div>
            </div>
          </div>

          {/* Submit and Cancel Buttons */}
          <button
            type="submit"
            className="w-full bg-primary text-white font-medium py-2 rounded-lg shadow-md hover:bg-red-800 focus:ring-1 focus:ring-red-800 focus:ring-offset-2">
            Sign Up
          </button>
          <button
            type="button"
            className="w-full mt-2 bg-gray-200 text-black font-medium py-2 rounded-lg shadow-md hover:bg-gray-300 focus:ring-1 focus:ring-gray-400 focus:ring-offset-2"
          >
            Cancel
          </button>
        </form>

        {/* Sign In Redirect */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="#" className="text-primary hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default page;
