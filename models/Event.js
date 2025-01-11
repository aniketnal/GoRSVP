import mongoose from "mongoose";
const{Schema, model} = mongoose;

const eventSchema = new Schema({
    organizerEmail: {type: String, required: true},
    organizerName: {type: String},
    eventTitle: {type: String, required: true},
    eventDate: {type: Date, required: true},
    eventTime: {type: String, required: true},
    eventLocation: {type: String, required: true},
    eventCapacity: {type: Number, required: true},
    eventBanner: {type: String, required: true},
    eventDescription: {type: String, required: true},
    Timestamp: {type: Number, default: Date.now},
    createdAt: {type: Date, default: Date.now},
});

export default mongoose.models.Event || model('Event', eventSchema);