import mongoose from "mongoose";
const{Schema, model} = mongoose;

const eventSchema = new Schema({
    organizerEmail: {type: String, required: true},
    organizerName: {type: String},
    eventName:{type:String, required:true},
    createdAt: {type: Date, default: Date.now},
});

export default mongoose.models.Event || model('Event', eventSchema);