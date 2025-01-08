import mongoose from "mongoose";
import { use } from "react";
const{Schema, model} = mongoose;

const userSchema = new Schema({
    email: {type: String, required: true},
    name: {type: String},
    createdAt: {type: Date, default: Date.now},
});

export default mongoose.models.User || model('User', userSchema);