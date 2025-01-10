import mongoose from "mongoose";
const{Schema, model} = mongoose;

const contactSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    message: { type: String, required: true },
    contactedAt: {type: Date, default: Date.now},
});

export default mongoose.models.Contact || model('Contact', contactSchema);