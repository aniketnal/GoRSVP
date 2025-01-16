"use client";
import React, { useState } from "react";
import { savecontact } from "@/actions/useractions";
import { toast } from "react-toastify";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await savecontact(formData);
      if (response.ok) {
        toast.success("We'll get back to you soon!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Please try again later, we're having some issues");
      }
    } catch (error) {
      console.error("Error saving contact:", error);
      alert("Please try again later");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen text-primary">
      <div className="w-full max-w-lg px-8 rounded">
        <h1 className="text-4xl font-bold mb-4 text-center text-secondary">
          Contact Us
        </h1>
        <p className="mb-4 text-lg text-center text-primary">
          We would love to hear from you!
          <br />
          Please fill out the form below to get in touch with us.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-lg font-medium text-primary"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-4 py-2 border rounded"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              className="block text-lg font-medium text-primary"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-2 border rounded"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              className="block text-lg font-medium text-primary"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-4 py-2 border rounded"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary text-white rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
