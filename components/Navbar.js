"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Search, LogIn, Menu, X, Plus, User } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener
    window.addEventListener('resize', checkScreenSize);
    
    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleSelectChange = async (e) => {
    const selectedOption = e.target.value;
    switch (selectedOption) {
      case "Profile":
        window.location.replace(
          `/profile/${encodeURIComponent(session.user.email)}`
        );
        break;
      case "MyEvents":
        window.location.replace(`/organizer-dashboard`);
        break;
      case "SignOut":
        await signOut({ callbackUrl: '/' });
        break;
      case "MyRSVP":
        window.location.replace(`/my-rsvps`);
        break;
      case "AdminDash":
        window.location.replace(`/admin-dashboard`);
        break;
      default:
        break;
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.replace(
        `/search-results/${encodeURIComponent(searchQuery)}`
      );
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <div className="bg-foreground mt-2 font-serif border-b shadow-sm border-secondary top-0 sticky z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2">
            {/* Logo */}
            <div className="flex items-center">
              <img src="../MainLogo.png" alt="" className="h-10 md:h-[60px]" />
              <Link
                className="text-lg md:text-[1.5rem] tracking-wide font-medium ml-2 text-secondary"
                href="/"
              >
                GoRSVP
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-primary focus:outline-none"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex bg-foreground border-2 border-secondary rounded-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for Events"
                  id="searchBar"
                  className="px-3 py-2 bg-foreground text-black font-medium border-none focus:outline-none overflow-auto rounded-full w-40 lg:w-64"
                />
                <button
                  className="p-2 border-2 rounded-full bg-secondary text-footertext"
                  onClick={handleSearch}
                  id="searchButton"
                >
                  <Search />
                </button>
              </div>
              
              {session && (
                <button className="flex items-center gap-1 bg-foreground hover:bg-secondary text-secondary font-semibold hover:text-white py-2 px-4 border-2 border-secondary hover:border-transparent rounded-full">
                  <Link className="flex items-center" href="/createevent">
                    <Plus className="w-4 h-4 mr-1" />
                    Create Event
                  </Link>
                </button>
              )}

              {session && (
                <div className="flex text-primary items-center">
                  <img
                    src={session.user.image}
                    alt="pfp"
                    className="h-10 w-10 rounded-full mr-1"
                  />
                  {/* select menu */}
                  <select
                    name="userOptions"
                    id="userOptions"
                    onChange={handleSelectChange}
                    className="bg-foreground text-primary text-sm rounded-lg block w-32 p-2.5"
                  >
                    <option className="hidden text-secondary" value="">
                      Hi, {session.user.name}
                    </option>
                    <option value="Profile">Profile</option>
                    {session.user.admin && (
                      <option value="AdminDash">Admin Panel</option>
                    )}
                    <option value="MyRSVP">My RSVPs</option>
                    {session.user.organizer && (
                      <option value="MyEvents">My Events</option>
                    )}
                    <option value="SignOut">Sign Out</option>
                  </select>
                </div>
              )}

              {!session && (
                <Link href="/signin">
                  <p className="flex items-center gap-1 bg-foreground hover:bg-secondary text-secondary font-semibold hover:text-white py-2 px-4 border-2 border-secondary hover:border-transparent rounded-full">
                    Sign In <LogIn className="w-4 h-4 ml-1" />
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-3 sm:px-3 border-t border-gray-200">
              <div className="flex bg-foreground border-2 border-secondary rounded-full mx-2 mb-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for Events"
                  className="px-3 py-2 bg-foreground text-black font-medium border-none focus:outline-none overflow-auto rounded-full w-full"
                />
                <button
                  className="p-2 border-2 rounded-full bg-secondary text-footertext"
                  onClick={handleSearch}
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
              
              {session && (
                <div className="flex flex-col space-y-3">
                  <Link 
                    href="/createevent"
                    className="flex items-center justify-center gap-1 bg-foreground hover:bg-secondary text-secondary font-semibold hover:text-white py-2 px-4 border-2 border-secondary hover:border-transparent rounded-full mx-2"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Create Event
                  </Link>
                  
                  <div className="flex items-center justify-between px-2">
                    <div className="flex items-center">
                      <img
                        src={session.user.image}
                        alt="pfp"
                        className="h-8 w-8 rounded-full mr-2"
                      />
                      <span className="text-sm font-medium text-primary">
                        Hi, {session.user.name}
                      </span>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/profile/${encodeURIComponent(session.user.email)}`}
                    className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  
                  {session.user.admin && (
                    <Link 
                      href="/admin-dashboard"
                      className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-gray-100"
                    >
                      Admin Panel
                    </Link>
                  )}
                  
                  <Link 
                    href="/my-rsvps"
                    className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-gray-100"
                  >
                    My RSVPs
                  </Link>
                  
                  {session.user.organizer && (
                    <Link 
                      href="/organizer-dashboard"
                      className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-gray-100"
                    >
                      My Events
                    </Link>
                  )}
                  
                  <button
                    onClick={async () => await signOut({ callbackUrl: '/' })}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                </div>
              )}
              
              {!session && (
                <Link 
                  href="/signin"
                  className="flex items-center justify-center gap-1 bg-foreground hover:bg-secondary text-secondary font-semibold hover:text-white py-2 px-4 border-2 border-secondary hover:border-transparent rounded-full mx-2"
                >
                  Sign In <LogIn className="w-4 h-4 ml-1" />
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;