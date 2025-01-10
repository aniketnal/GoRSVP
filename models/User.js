import mongoose from "mongoose";
const{Schema, model} = mongoose;

const userSchema = new Schema({
    email: {type: String, required: true},
    name: {type: String},
    isOrganizer: { type: Boolean, default: false },
    createdAt: {type: Date, default: Date.now},
});

export default mongoose.models.User || model('User', userSchema);