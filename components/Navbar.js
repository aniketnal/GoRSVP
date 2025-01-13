"use client";
import Link from "next/link";
import React from "react";
import { Search, LogIn } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Plus, User } from "lucide-react";

const Navbar = () => {
  const { data: session } = useSession();

  const handleSelectChange = (e) => {
    const selectedOption = e.target.value;
    switch (selectedOption) {
      case "Profile":
        window.location.replace(`/profile/${encodeURIComponent(session.user.email)}`);
        break;
      case "MyEvents":
        window.location.replace(`/organizer-dashboard`);
        break;
      case "SignOut":
        window.location.replace(`/`);
        signOut();
        break;
      case "MyRSVP":
        window.location.replace(`/my-rsvps`);
        break;
        //similar cases corresponding to value for other options
      default:
        break;
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
            <div className="searchboxes rounded-md flex gap-4 items-center">
              <div className=" flex bg-foreground border-2 border-secondary rounded-full">
                <button className="p-2 border-2 rounded-full bg-secondary text-footertext">
                  <Search />
                </button>
                <input
                  className=" text-primary ml-3 rounded-full border-none focus:outline-none bg-inherit"
                  type="text"
                  placeholder="Search for Events"
                />
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
                    className="bg-transparent border-none focus:outline-none"
                  >
                    <option className="hidden text-secondary" value="">
                      {" "}
                      Hi, {session.user.name}
                    </option>
                    <option value="Profile">Profile</option>
                    <option value="MyRSVP">My RSVPs</option>
                    {session.user.organizer && <option value="MyEvents" href="./organizer-dashboard">My Events</option>}
                    <option value="SignOut">
                      Sign Out
                    </option>
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
