"user client"
import Link from "next/link";
import React from "react";
import { Search, LogIn } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <>
      <div className="bg-foreground mt-2 font-serif border-b shadow-sm border-secondary top-0 sticky z-50">
        <div>
          <div className="flex gap-4 items-center justify-between mx-32">
            <div className="main-logo flex items-center">
              <img src="./MainLogo.png" alt="" className="h-[60px]" />
              <Link
                className="text-[1.5rem] tracking-wide font-medium ml-2 text-secondary"
                href="/"
              >
                GoRSVP
              </Link>
            </div>
            <div className="searchboxes rounded-md flex gap-4">
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
              {session && <button onClick={()=>{signOut()}} className="flex items-center gap-1 bg-foreground hover:bg-secondary text-secondary font-semibold hover:text-white py-2 px-4 border-2 border-secondary hover:border-transparent rounded-full">Sign Out<LogIn />
              </button>}
              {/* session && then stuff to show while logged in */}
              {!session && <button className="flex items-center gap-1 bg-foreground hover:bg-secondary text-secondary font-semibold hover:text-white py-2 px-4 border-2 border-secondary hover:border-transparent rounded-full">
                <Link className="flex" href="/signin">Sign In <LogIn /></Link>
              </button>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
