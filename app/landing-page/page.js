import React from 'react';

const LandingPage= () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner Section */}
      <header className="relative w-full max-w-6xl mx-auto p-4">
        <div className="relative w-full h-64 rounded-lg shadow overflow-hidden">
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
          >
          <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tbGVmdCI+PHBhdGggZD0ibTE1IDE4LTYtNiA2LTYiLz48L3N2Zz4='/>

          </button>
          <img
            src="https://t3.ftcdn.net/jpg/01/27/28/60/240_F_127286056_1e0NJO45xIXTfVIQMXPVnO069DFHrd9j.jpg"
            alt="Gallery Placeholder"
            className="w-full h-full object-cover"
          />
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200">
            <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4='/>
          </button>
        </div>
      </header>

      {/* Categories Section */}
      <nav className="grid mx-auto w-fit gap-2 mt-2 sm:grid-cols-6 text-center">
        {[
            'Tedx','Techfest','Business','Sports','Lifestyle','Gaming'].map((category) => (
          <div
            key={category}
            className="bg-white py-2 px-4 rounded-full shadow text-sm font-medium text-primary hover:bg-gray-200"
          >
            {category}
          </div>
        ))}
      </nav>
      <div className='border-b-2 border-gray-200 mt-6'></div>
      {/* Top Picks Section */}
      <div className="mt-8 max-w-6xl min-w-2xl mx-auto  ">
        <h1 className="text-2xl mx-auto my-auto font-semibold text-primary mb-4">Top Picks for you</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((id) => (
            <div key={id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg">
              <img src="https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg"/>
              <h3 className="text-md font-semibold text-gray-800">Rhythm & Beats: Kasukabe Events</h3>
              <p className="text-md text-black mt-2">A night of electrifying Music!</p>
              <span className="text-md text-gray-500 mt-2 block">Dec 20, 2024 | Venue: Dhakkan Curry</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;