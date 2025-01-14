"use client";
import React, { useState, useEffect } from "react";
import PanelNav from "@/components/PanelNav";
import { LineChart } from "@mui/x-charts/LineChart";
import { Users, Calendar, UserCog } from "lucide-react";
import { fetchall } from "@/actions/useractions";

export default function page() {
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

  useEffect(() => {
    fetcheverything();
  }, []);

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
            <LineChart
              className="bg-[rgb(249,248,240)] rounded-lg shadow-md"
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
              ]}
              width={500}
              height={300}
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
