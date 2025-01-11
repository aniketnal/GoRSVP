import React from "react";

const NotFound = () => {
  
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-3/4 px-8 rounded">
        <h1 className="text-8xl font-bold text-center text-secondary">404</h1>
        <p className="text-2xl text-center text-primary mt-4">WE ARE SORRY PAGE NOT FOUND!</p>
        <p className="text-lg text-center text-primary mt-2">THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED, DELETED OR NEVER EXISTED.</p>
        <div className="mt-6 text-center">
          <a
            href="/"
            className="bg-secondary text-white py-2 px-6 rounded"
          >
            GO BACK TO HOME
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
