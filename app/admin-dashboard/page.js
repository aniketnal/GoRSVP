"use client";
import React, { useState, useEffect } from "react";
import PanelNav from "@/components/PanelNav";
import { PieChart } from "@mui/x-charts/PieChart";
import { Users, Calendar, UserCog } from "lucide-react";
import { fetchall } from "@/actions/useractions";
import { useSession, signIn, signOut } from "next-auth/react"

export default function page() {
  const { data: session, status } = useSession();

  const [users, setUsers] = useState([]);
  const [Orgs, setOrgs] = useState([]);
  const [Events, setEvents] = useState([]);

  const fetcheverything = async () => {
    try {
      const data = await fetchall();
      setEvents(data.events);
      setUsers(data.users);
      setOrgs(data.organizers);
    } catch (error) {
      console.log("error Occured", error);
    }
  };

  console.log(session);
  useEffect(() => {
    fetcheverything();
  }, []);
  
  if(status == "loading"){return;}
  if(session.user.admin == false && status == "authenticated"){
    window.location.replace("/");
  }


  const stats = [
    {
      title: "Total Users",
      value: users.length,
      icon: <Users className="w-6 h-6 text-red-800" />,
    },
    {
      title: "Total Organizers",
      value: Orgs.length,
      icon: <UserCog className="w-6 h-6 text-red-800" />,
    },
    {
      title: "Total Events",
      value: Events.length,
      icon: <Calendar className="w-6 h-6 text-red-800" />,
    },
  ];

  return (
    <>
      <div className="p-1 mx-6">
        <PanelNav />
      </div>
      <div className="min-h-screen">
        {/* Main Content */}
        <div className="p-8">
          {/* Render Main Content */}
          <div className="flex items-center justify-center gap-6">
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: users.length, label: "Total Users" },
                    { id: 1, value: Orgs.length, label: "Total Organizers" },
                    { id: 2, value: Events.length, label: "Total Events" },
                  ],
                },
              ]}
              width={700}
              height={350}
            />
            <div className="flex justify-center flex-wrap gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-6 w-1/2 bg-[rgb(249,248,240)] rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-600 mb-1">{stat.title}</p>
                      <h2 className="text-3xl font-bold text-gray-900">
                        {stat.value}
                      </h2>
                    </div>
                    {stat.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Charts and Gauge
