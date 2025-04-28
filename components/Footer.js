import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary py-6 md:py-10 text-footertext">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Mobile footer layout: stacked */}
        <div className="md:hidden">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-semibold text-secondary">GoRSVP</h2>
            <p className="text-sm mt-2 px-4">
              A simple platform to create, manage and join events on the go without any hassle!
            </p>
          </div>
          
          <div className="text-center text-sm">
            <div className="flex flex-wrap justify-center gap-3 py-4">
              <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
              <span className="hidden sm:inline">&#x2022;</span>
              <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
              <span className="hidden sm:inline">&#x2022;</span>
              <a href="/contact-us" className="hover:underline">Contact Us</a>
              <span className="hidden sm:inline">&#x2022;</span>
              <a href="/about-us" className="hover:underline">About Us</a>
            </div>
            <p className="text-secondary">
              &copy; {new Date().getFullYear()} GoRSVP. All rights reserved.
            </p>
          </div>
        </div>
        
        {/* Desktop footer layout: side by side */}
        <div className="hidden md:flex md:flex-wrap md:justify-between">
          <div className="asset w-64 lg:w-80">
            <h2 className="text-3xl lg:text-4xl font-semibold text-secondary">GoRSVP</h2>
            <p className="text-sm lg:text-md mt-2">
              A simple platform to create, manage and join events on the go without any hassle!
            </p>
          </div>
          
          <div className="text-center self-end">
            <p className="py-4 lg:py-8">
              <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>&nbsp;&#x2022;&nbsp;
              <a href="/terms-of-service" className="hover:underline">Terms of Service</a>&nbsp;&#x2022;&nbsp;
              <a href="/contact-us" className="hover:underline">Contact Us</a>&nbsp;&#x2022;&nbsp;
              <a href="/about-us" className="hover:underline">About Us</a>
            </p>
            <p className="text-secondary">
              &copy; {new Date().getFullYear()} GoRSVP. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;