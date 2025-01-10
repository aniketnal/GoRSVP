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

//updates isOrganizer field in User model for current user.
export const becomeorganizer = async (msg) => {
    await connectDB();
    const user = await User.findOne({ email: msg.email });
    if (user) {await User.updateOne({ email: msg.email }, { isOrganizer: true });
        return { ok: true };
    }
    else{
        return { ok: false, error: "email not found in record" };
    }
    
}