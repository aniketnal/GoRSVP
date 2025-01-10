"use server"

import connectDB from "@/db/ConnectDB"
import User from "@/models/User"
import Event from "@/models/Event"
import Contact from "@/models/Contact"

//contact us form submission, POST req.
export const savecontact = async (msg) => {
    await connectDB();
    
    // console.log(msg);
    const newcontact = new Contact({
        name: msg.name,
        email: msg.email,
        message: msg.message,
    });
    await newcontact.save(); 
    return { ok: true };
}