"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Search, LogIn } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Plus, User } from "lucide-react";

const Navbar = () => {
  const { data: session } = useSession();
  const [searchQuery, setSearchQuery] = useState("");
  const handleSelectChange =async (e) => {
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
      //similar cases corresponding to value for other options
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
  return (
    <>
      <div className="bg-foreground mt-2 font-serif border-b shadow-sm border-secondary top-0 sticky z-50">
        <div>
          <div className="flex gap-4 items-center justify-between mx-32">
            <div className="main-logo flex items-center">
              <img src="../MainLogo.png" alt="" className="h-[60px]" />
              <Link
                className="text-[1.5rem] tracking-wide font-medium ml-2 text-secondary"
                href="/"
              >
                GoRSVP
              </Link>
            </div>
            <div className="searchboxes rounded-md flex gap-4 items-center ">
              <div className=" flex bg-foreground border-2 border-secondary rounded-full">
                
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for Events"
                  id="searchBar"
                  className="px-3 py-2  bg-foreground text-black font-medium border-none focus:outline-none overflow-auto rounded-full"
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
                  <Link className="flex" href="/createevent">
                    <Plus />
                    Create Event
                  </Link>
                </button>
              )}
              {/* shall be a dashboard / Profile Drop down */}

              {session && (
                <div className="flex text-primary">
                  <img
                    src={session.user.image}
                    alt="pfp"
                    className="h-10 w-10 rounded-full mr-1"
                  />
                  {/* select menu starts */}
                  <select
                    name="userOptions"
                    id="userOptions"
                    onChange={handleSelectChange}
                    className="bg-foreground  text-primary text-sm rounded-lg  block  w-32 p-2.5"
                  >
                    <option className="hidden text-secondary " value="">
                      {" "}
                      Hi, {session.user.name}
                    </option>
                    <option value="Profile">Profile</option>
                    {session.user.admin && (
                      <option value="AdminDash">Admin Panel</option>
                    )}
                    <option value="MyRSVP">My RSVPs</option>
                    {session.user.organizer && (
                      <option value="MyEvents" href="./organizer-dashboard">
                        My Events
                      </option>
                    )}
                    <option value="SignOut">Sign Out</option>
                  </select>
                </div>
              )}
              {/* session && then stuff to show while logged in */}
              {!session && (
                <Link href="/signin">
                  <p className="flex items-center gap-1 bg-foreground hover:bg-secondary text-secondary font-semibold hover:text-white py-2 px-4 border-2 border-secondary hover:border-transparent rounded-full">
                    Sign In <LogIn />
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
