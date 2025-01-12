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

//event creation form submission, POST req.
export const saveevent = async (msg) => {
    await connectDB();
    const newevent = new Event({
        organizerEmail: msg.organizerEmail,
        organizerName: msg.organizerName,
        eventTitle: msg.eventTitle,
        eventDate: msg.eventDate,
        eventTime: msg.eventTime,
        eventLocation: msg.eventLocation,
        eventCapacity: msg.eventCapacity,
        eventBanner: msg.eventBanner,
        eventDescription: msg.eventDescription,
    });
    await newevent.save(); 
    return { ok: true };
}

//fetches all events from Event model.
export const getallevents = async (msg) => {
    await connectDB();
    const events = await Event.find({isDeleted:false}).lean();
    const plainEvents = events.map(event => ({
        ...event,
        _id: event._id.toString(),
        eventDate: event.eventDate.toISOString(),
        createdAt: event.createdAt.toISOString(),
      }));
    return {events: plainEvents };
}

//fetches specific events from Event model.
export const getevent = async (msg) => {
    await connectDB();

    const event = await Event.findOne({ Timestamp: msg,isDeleted:false }).lean();
    if (!event) {
        alert('Event not found');
        window.location.replace("/");
      }
    const plainEvent = {
        ...event,
        _id: event._id.toString(),
        eventDate: event.eventDate.toISOString(),
        createdAt: event.createdAt.toISOString(),
        Timestamp: event.Timestamp.toString(),
      };
    return { event:plainEvent };
}
//fetches specific events from Event model.
export const getusersevent = async (msg) => {
    await connectDB();
    // console.log(msg)
    const event = await Event.find({ organizerEmail: msg, isDeleted:false }).lean();
    if (!event) {
        alert('Event not found');
        window.location.replace("/");
      }
      const plainEvents = event.map(event => ({
        ...event,
        _id: event._id.toString(),
        eventDate: event.eventDate.toISOString(),
        createdAt: event.createdAt.toISOString(),
        Timestamp: event.Timestamp.toString(),
      }));
    return { event:plainEvents };
}

//deletes specific event from Event model.
export const deleteevent = async (msg) => {
    await connectDB();
    const event = await Event.findOne({ Timestamp: msg, isDeleted:false });
    if (event) {
        await Event.updateOne({ Timestamp: msg }, { isDeleted: true });
        return { ok: true };
      }
    else{
        return { ok: false, error: "event not found" };
    }
}

//append RSVP to rsvps field in Event model.
export const rsvpevent = async (Timestamp,email) => {
    await connectDB();
    // console.log(Timestamp,email);
    const event = await Event.findOne({ Timestamp: Timestamp, isDeleted:false });
    if (event) {
        await Event.updateOne({ Timestamp: Timestamp }, { $push: { rsvps: email } });
        return { ok: true };
      }
    else{
        return { ok: false, error: "event not found" };
    }
}