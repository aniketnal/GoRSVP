import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary  py-4 text-footertext">
      <div className="container mx-auto text-center">
        <p className="py-8 ">
          <a href="/privacy-policy" className="hover:underline" >Privacy Policy</a>&nbsp;&#x2022;&nbsp;
          <a href="/terms-of-service" className="hover:underline">Terms of Service</a>&nbsp;&#x2022;&nbsp;
          <a href="/contact-us" className="hover:underline" >Contact Us</a>&nbsp;&#x2022;&nbsp;
          <a href="/about-us" className="hover:underline" >About Us</a>
        </p>
        <p>
          &copy; {new Date().getFullYear()} GoRSVP. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
