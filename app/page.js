"use client"
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Zap, ArrowDownToLine } from 'lucide-react';



const testimonials = [
  {
    name: "Stanley Taber",
    role: "Director at Lorem Ipsum",
    quote:
      "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.",
    image:
      "https://cdn.dribbble.com/users/304574/screenshots/6222816/male-user-placeholder.png",
  },
  {
    name: "Ruveyda Crutzen",
    role: "Project Manager at Lorem Ipsum",
    quote:
      "Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor.",
    image:
      "https://cdn.dribbble.com/users/304574/screenshots/6222816/male-user-placeholder.png",
  },
  {
    name: "Sophie Lambert",
    role: "CEO at Lorem Ipsum Dolor",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie.",
    image:
      "https://cdn.dribbble.com/users/304574/screenshots/6222816/male-user-placeholder.png",
  },
  {
    name: "Robert S. McCully",
    role: "Employee at Lorem Ipsum",
    quote:
      "Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id.",
    image:
      "https://cdn.dribbble.com/users/304574/screenshots/6222816/male-user-placeholder.png",
  },
];

const Page = () => {
  return (

    <>

    <div className="min-h-screen bg-[#f2f0e3] ">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 text-center mt-40 tracking-widest">
        <h1 className="text-8xl font-serif  text-[rgb(22,22,22)]">
          Welcome to
          <br />
          <span className="text-[#ff7c4f] italic">GoRSVP</span>
        </h1>

        <p className="mt-8 text-2xl text-[rgb(22,22,22)] opacity-80 max-w-3xl mx-auto">
          Discover, plan, and experience extraordinary moments, all in one place
          <br />
          Where moments become memories, effortlessly.
        </p>
      </div>

      <div className="border-b-2 border-transparent mt-36 mb-20 text-secondary text-center flex justify-center items-center animate-bounce-fast">
      <ArrowDownToLine className="w-20 h-20 "/>
       </div>
      {/* Categories Section */}
     
      <nav className="flex flex-col justify-center items-center mx-auto w-fit gap-6 mt-10 sm:grid-cols-6 mb-16 text-center ">
        <div className="text-center text-2xl mx-auto my-auto font-semibold text-primary p-6">Choose Your Favourite Genre</div>
        <div className="grid mx-auto w-fit gap-6 sm:grid-cols-6 text-center">
        {["Tedx", "Techfest", "Business", "Sports", "Lifestyle", "Gaming"].map(
          (category) => (
            <button
              key={category}
              className="bg-[rgb(249,248,240)] border-2 border-secondary text-secondary bg-foreground hover:bg-secondary hover:text-footertext py-2 px-4 rounded-full shadow text-sm font-medium hover:bg-gray-200"
            >
              {category}
            </button>
          )
        )}
        </div>
      </nav>
      {/* Top Picks Section */}
      <div className="mt-10 mb-12 max-w-7xl min-w-2xl mx-auto">
        <h1 className="text-start text-2xl mx-auto my-auto font-semibold text-primary mb-4 p-6">
          Top Picks for you
        </h1>
        <div className="flex justify-center items-center md:grid-cols-3 gap-10  flex-wrap">
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <div
              key={id}
              className="p-6 rounded-lg shadow-md hover:shadow-xl"
            >
              <img className="border rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmBrquyUzcPbpRlxCIDTS6WFJ6IMlUGmqbgA&s" />
              <h3 className="text-md font-semibold text-gray-800 mt-6">
                Rhythm & Beats: Kasukabe Events
              </h3>
              <p className="text-md text-black mt-2">
                A night of electrifying Music!
              </p>
              <span className="text-md text-gray-500 mt-2 block">
                Dec 20, 2024 | Venue: Dhakkan Curry
              </span>
              <div className="flex justify-end mt-4">
                <button className="flex items-center justify-center py-2 gap-2 rounded-full border border-secondary bg-foreground text-secondary hover:bg-secondary hover:text-footertext px-2">
                <Zap />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-b-2 border-gray-200 mt-10"></div>

      // Testimonials Section
      <div className="bg-foregorund min-h-screen w-full">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#1a1a1a]">
            See what <span className="font-serif italic">our members</span> are saying.
          </h2>

          <div className="flex flex-wrap gap-x-16 gap-y-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-1 basis-[calc(50%-2rem)] min-w-[300px]"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}'s profile`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-primary mb-4 leading-relaxed text-lg">
                      {testimonial.quote}
                    </p>
                    <div>
                      <h3 className="text-secondary font-serif font-medium text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="text-primary text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
    </>
  );
};

export default Page;
