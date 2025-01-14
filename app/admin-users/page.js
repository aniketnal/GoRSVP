"use client";
import React, { useState, useEffect } from "react";
import PanelNav from "@/components/PanelNav";
import { deleteuser, getallusers } from "@/actions/useractions";

export default function Page() {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    try {
      const userdata = await getallusers();
      // console.log(userdata.users);
      setUsers(userdata.users);
    } catch (error) {
      console.log("error Occured", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleViewClick = (id) => {
    window.location.replace(`/profile/${id}`);
  };
  const handleDeleteClick = async (email) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmed) {
      const result = await deleteuser(email);
      if (result.ok) {
        alert("User Deleted Successfully");
        fetchUsers();
      } else {
        alert("Failed to delete user");
      }
    }
  };

  return (
    <>
      <div className="p-1 mx-6">
        <PanelNav />
      </div>
      <div className="min-h-screen min-w-full bg-foreground p-4">
        <div className="text-primary text-2xl font-bold mx-8 my-4">
          {" "}
          All Users
        </div>
        {/* Main Content */}
        <table className="ml-6 w-[96%] border-collapse text-primary bg-white rounded-lg overflow-hidden border border-primary">
          <thead>
            <tr className="bg-[rgb(249,248,240)]">
              <th className="p-4 border-2 text-center border-primary">
                Sr. No.
              </th>
              <th className="p-4 border-2 text-center border-primary">
                Email ID
              </th>
              <th className="p-4 border-2 text-center border-primary">Name</th>
              <th className="p-4 border-2 text-center border-primary">
                RSVP'd Events
              </th>
              <th className="p-4 border-2 text-center border-primary">
                Is Organizer
              </th>
              <th className="p-4 border-2 text-center border-primary">
                Is Admin
              </th>
              <th className="p-4 border-2 text-center border-primary">
                Actions
              </th>
            </tr>
          </thead>
          {/* dynamic rows below */}
          <tbody>
            {users.map((u, index) => (
              <tr
                key={u.email}
                className={
                  index % 2 === 0
                    ? "bg-foreground border-2 border-primary"
                    : "bg-[rgb(249,248,240)] border-2 border-primary"
                }
              >
                <td className="p-4 border-2 text-center border-primary">
                  {index + 1}
                </td>
                <td className="p-4 border-2 text-center border-primary">
                  {u.email}
                </td>
                <td className="p-4 border-2 text-center border-primary">
                  {u.name}
                </td>
                <td className="p-4 border-2 text-center border-primary">
                  {u.rsvpevents.length}
                </td>
                <td className="p-4 border-2 text-center border-primary">
                  {u.isOrganizer ? "Yes" : "No"}
                </td>
                <td className="p-4 border-2 text-center border-primary">
                  {u.isAdmin ? "Yes" : "No"}
                </td>
                <td className="p-4 border-2 text-center border-primary">
                  <div className="flex justify-center  gap-3">
                    <button
                      className="px-3 mr-2 py-1 border-2 border-secondary text-secondary hover:text-footertext hover:bg-secondary rounded-md"
                      onClick={() => {
                        handleViewClick(u.email);
                      }}
                    >
                      View
                    </button>
                    <button
                      className="px-3 mr-2 py-1 border-2 border-secondary text-secondary hover:text-footertext hover:bg-secondary rounded-md"
                      onClick={() => {
                        handleDeleteClick(u.email);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
